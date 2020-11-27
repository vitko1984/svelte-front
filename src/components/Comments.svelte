<!--<h3 class="grey-text">Отзывы</h3>-->
<div class="Clients">
  <div class="ClientsToolbar">    
    <div class="ClientsToolbarSearch white-text">
      <Textarea
          clearable
          rows="1"
          autogrow
          color="white"
          rules={rules}
          on:input={_search}
          on:focus={_startSearching}
          on:blur={_doneSearching}>
        <Icon path="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
      </Textarea>
    </div>
    <div class="ClientsToolbarAdd">
      <Button
          on:click={_addNewDialog}
          class="ClientsToolbarAddButton">
        + Добавить запись
      </Button>
    </div>
  </div>
  <div class="ClientsDatagrid">
    {#await promise}
      <p class="white-text"><Icon size="32px" spin path="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" /></p>
    {:then resolve}
      <Excel
          initialData={initial}
          {schema}
          onDataChange={(data_inp, dialog) =>_onExcelDataChange(data_inp, dialog)} />
    {:catch error}
	    <p class="red lightnen-4 white-text">{error.message}</p>
    {/await}      
  </div>
  <Snackbar 
      timeout={timeout}
      bottom
      class={snackColor}
      bind:active={snackbar}>
    { message }
  </Snackbar>
  {#if addnew}
    <Dialog
        modal
        header="Добавить новый отзыв"
        confirmLabel="Добавить"
        onAction={action => _addNew(action)}>
      <Form
          fields={schema}
          initialData={data} 
          on:getData={e => getData(e)} />
    </Dialog>  
  {/if}
</div>  
<script>
  import { onMount } from 'svelte';

  import Button from '@/src/components/Button.svelte';
  import Dialog from '@/src/components/Dialog.svelte';
  import Form from '@/src/components/Form.svelte';
  import Excel from '@/src/components/Excel.svelte';

  import { Textarea, Icon, Snackbar } from 'svelte-materialify/src';

  import { hdr, Columns, initData } from '@/src/stores.js';

  import comment from '@/src/services/CommentService';
      
  $hdr = { ...$hdr, title: 'Рейтинг + отзыв', iconName: 'ClientIcon' };

  let addnew;
  let form = {};
  let _preSearchData = null;
  let initial = {};
  let snackColor = 'light-blue lighten-1';
  let snackbar = false;
  let timeout = 6000;
  let message = '';
  let serviceName = '';
  let search = false;
  let promise;
  let addComment = false;
  let rules = [
        value => !!value || 'Ввести...',
        value => (value && value.length >= 3) || 'Мин 3 символа...',
      ];
  const schema = $Columns.comentHeaders;

  schema.forEach(item => initial[item.id] = item.sample);
  let data = [initial];
  _commitToStores([initial]);

  const _onExcelDataChange = (data_inp, dialog) => {
    console.log('data_inp: ', data_inp);
    console.log('dialog: ', dialog);
    _commitToStores(data_inp);
    if(dialog && dialog.type === 'delete') deleteComment(dialog.id);
    if(dialog && dialog.type === 'edit') editComment(data_inp, dialog);
    };

  function getData(e) {
    console.log(form);
    form = {...form, ...e.detail};
  };
  function _addNewDialog() {
    addnew = true;
  };
  function _addNew(action) {
    if (action === 'dismiss') {
      addnew = false;
      return;
    };
    let vl = {};
    let keys = Object.keys(initial);
    console.log('Массив ключей: ', keys);
    console.log('Вот, что пришло из инпутов(новая запись): ', form)
    keys.forEach(id => !!form[id] ? vl[id] = form[id] : vl[id] = '');
    !!form['date'] ? vl['date'] = form['date'] : vl['date'] = new Date().getDate()+'.'+(new Date().getMonth()+1)+'.'+new Date().getFullYear();
    let dataI = [vl, ...data];
    console.log('Новый объект: ', vl);
    addnew = false;
   // _commitToStores(dataI);
   saveComment(vl);
    form = {};
    data = $initData;    
  };
  function _commitToStores(dt) {
    //localStorage.setItem('data', JSON.stringify(data));
    $initData = dt;
  };
  function _startSearching() {
    //_preSearchData = data;
    _preSearchData = $initData;
    search = true;
    snackbar = search;
    snackColor = 'light-blue lightnen-1'
    message = 'Поиск ждет...';
  };
  function _doneSearching() {
    //data = _preSearchData;
   // _commitToStores(_preSearchData);
    search = false;
  };
  const _search = async (e) => {
    try {
      const needle = e.target.value.toLowerCase();
      console.log('needle: ', needle);
      if (!needle) {
        //data = _preSearchData;
        _commitToStores(_preSearchData);
        return;
      };
      const fields = schema.map(item => item.id);
      console.log('fields: ', fields);
      const searchdata = await _preSearchData.filter(row => {
        console.log('row: ', row);
        for (let f = 0; f < fields.length; f++) {
          if (row[fields[f]].toString().toLowerCase().indexOf(needle) > -1) {
            return true;
          };
        };
        return false;
      });
      //data = searchdata;
      _commitToStores(searchdata);
    } catch {
      error => {
      snackbar = true;
      message = error.message;
      snackColor = 'red lightnen-4';
      };
    };
  };
  const getComments = async() => {  
    try {
      const data_cmnt = await comment.find({});
      console.log(data_cmnt);
      let dt;
      if(data_cmnt.success)  {
        dt = await dataParser(data_cmnt.data, '_id', 'client', 'service', 'date',  'rating', 'comments');
        _commitToStores(dt);
      };
    }
    catch {
      error => {
        snackbar = true;
        message = error.message;
        snackColor = 'red lightnen-4';
      };
    }
  };
  const dataParser = (targetedArray, ...options) => {
    let parsedData = [];
      targetedArray.forEach(item => {
        let parsedItem = {};
        options.forEach(option => (parsedItem[option] = item[option]));
        parsedData.push(parsedItem);
      })
      return parsedData;    
  };
  const editComment = async(dataI, dialog) => {
    console.log('dataI: ', dataI);
    console.log('dialog: ', dialog);
    const id = dialog.id;
    const idx = dialog.idx;
    const edit_comments = {...dataI[idx], serviceFilterId: id};
    if(!!id) {
      comment
      .put_comment({edit_comments})
      .then(res => {
        console.log(res);
        resetFields(edit_comments);
        snackbar = true;
        message = res.data.message;
        snackColor = 'light-blue lighten-1';
        getComments();
      })
      .catch (error => {
        errorHandler(error);
      })
    } 
  };
  const saveComment = async(dataI) => {
    const comments = dataI;
    console.log('dataI: ', dataI);
    comment
    .post_comment({comments})
    .then(res => {
      console.log(res)
      resetFields(comments);
      snackbar = true;
      message = res.data.message;
      snackColor = 'light-blue lighten-1';
      //console.log(res.data._doc);
      getComments();
    })
    .catch (error => {
      errorHandler(error);
    })
  };
  const resetFields = (item) => {
    for (let key in item) {
        item[key] = null;

        if (key === 'quantity' || key === 'price') {
          item[key] = 0;
          };

          item['items'] = [];
      }    
  };
  const errorHandler = (error) => {
    console.log(error);
    if(error.response.status) {
    status = error.response.status;
    snackbar = true;
    snackColor = 'red lighten-1';
      if (status === 404) {
        message = 'Неверный запрос...';
      } else if (status === 401 || status === 403) {
        message = 'Неавторизовван...';
      } else if (status === 400) {
        message = 'Неверно... А может идет передача данных...';
      } else {
        message = error.message;
      }
    } else {message = error.message;};    
  };
  const deleteComment = async (id) => {
    const del_id = id;
    console.log(del_id);
    comment
    .delete_comment({ params: { serviceId: del_id}})
    .then(res => {
      console.log(res);
      snackbar = true;
      message = res.data.message;
      snackColor = 'light-blue lighten-1';
      getComments();
    })
    .catch(      
        error => {
        snackbar = true;
        message = error.message;
        snackColor = 'red lightnen-4';
      });
  };
  const handleMount = () => search ? promise = search() : promise = getComments();
  onMount(handleMount);

  $: console.log('_preSearchData: ', _preSearchData);
  $: console.log('data: ', data);
  $: console.log('$initData:', $initData); 
</script>

<style lang="scss">
    input {
    font: 16px Arial;
    color: #bdbdbd;
  }::placeholder {color: #e0e0e0;}

  .Clients {
    .ClientsToolbar {
      margin: 40px;
      .ClientsToolbarAdd {
        float: right;
        .ClientsToolbarAddButton {
          font-size: 32px;
        }
      }
      .ClientsToolbarSearch {
        float: left;
      }
    }
    .ClientsDatagrid {
      clear: both;
      margin: 40px;
      padding-top: 20px;
    }
  }
</style>