<h3 class="white-text">Наши приемлемые цены - твой заказ</h3>

<div class="l-price">
  <div class="d-flex flex-row justify-space-around l-price-search">
    <div>
      <p class="white-text"><i>Поиск по наименованию :</i></p>  
      <S.TextField 
          bind:value={searchValue}          
          color="yellow"
          on:input = {searchText}
          clearable
          rules={rules}>
          <div slot="prepend" on:click={toggleSearch} class="yellow-text">
            <S.Icon path="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
          </div>  
          <p>Сперва нажми на поиск...</p>
        </S.TextField>
    </div>

    <div class="themed">
      <p class="white-text"><i>Поиск по категориям услуг :</i></p>  
      <Select
          placeholder='Жми ...'
          bind:selectedValue={status}          
          items={statusItems}
          containerClasses='transparent yellow-text'
          inputStyles = " box-sizing: border-box; "></Select>
    </div>
  </div>

  {#if listPrice}
    <List>
      <div slot="ListHeader">
        <ListHeader headers={headers} sortTbl={sortTbl} />
      </div>
      <div slot="ListBody">                                                                                                       
        {#await promise}
          <!--<p class="white-text">...загружаемся</p>-->
          <p class="white-text"><S.Icon size="32px" spin path="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" /></p>
        {:then resolve}
          <ListBody
              {basketVisible}
              {addPrice} 
              on:edit={editPrice} 
              on:add={savePrice} 
              on:del={deletePrice}
              on:edit_filter={editFilterPrice} />  
        {:catch error}
	        <p class="red lightnen-4 white-text">{error.message}</p>
        {/await}
      </div>
    </List>
  {/if}

  <S.Snackbar 
      timeout={timeout}
      bottom
      class={snackColor}
      bind:active={snackbar}>
      { message }
  </S.Snackbar>

  <div class="d-flex  flex-column-reverse align-start">  
    <S.Button  
          class="fab red lighten-1 white-text"
          dark
          fab
          on:click={fabBtn}>
        <!--add and close icon-->
      {#if !fab_document && !fab_client}   
        <S.Icon path="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      {:else}
        <S.Icon path="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
      {/if}
    </S.Button> 

    {#if fab_document}
      <p transition:fly="{{ y: 100, duration: 500 }}">
        <Tooltip tip="Добавить запись в документ" color="#81d4fa" right>        
          <S.Button 
              class="light-blue lighten-1 white-text"
              dark
              size="small"
              fab 
              on:click={() => [priceId = true, listPrice = true, addPrice = true, fab_client = false]}>
            <!--assignment(document) icon-->
            <S.Icon path="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" size="24px" />
          </S.Button>
        </Tooltip>
      </p>
    {/if}

    {#if fab_client}     
      <p transition:fly="{{ y: 100, duration: 500 }}">
        <Tooltip tip="Добавить нового клиента" color="#a5d6a7" right>
          <S.Button 
              class="green lighten-1 white-text"
              dark
              size="small"
              fab 
              on:click={() => [priceId = false, listPrice = true, addPrice = false, fab_document = false]}>
            <!--accoun_circle icon-->
            <S.Icon path="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
          </S.Button>
        </Tooltip>
      </p>
    {/if}
  </div>
</div>

<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  import List from '@/src/components/List.svelte';
  import ListHeader from '@/src/components/ListHeader.svelte';
  import ListBody from '@/src/components/ListBody.svelte';
  import * as S from 'svelte-materialify/src';
  import Tooltip from 'svelte-tooltip';
  import Select from 'svelte-select';

  import roof from '@/src/services/PriceService';

  import { hdr, Columns, Data } from '@/src/stores.js';
      
  $hdr = { ...$hdr, title: 'Расценки', iconName: 'PriceIcon' };
  let listPrice = true;
  let priceId = false;
  let addPrice = false;
  let headers = $Columns.priceHeaders;
  let basketVisible = true;
  let keyName = 'service_id';
  let serviceName = '';
  let snackbar = false;
  let message = '';
  let sort = 1;
  let search = false;
  let promise;
  let timeout = 6000;
  let snackColor = 'light-blue lighten-1';
  let fab_document = false;
  let fab_client = false;
  let searchValue = '';
  let preSearchData = null;
  let editFilterId;
  let status;
  let rules = [
        value => !!value || 'Ввести...',
        value => (value && value.length >= 3) || 'Мин 3 символа...',
      ];
  let statusItems = [ 'Кровельные работы', 'Каркасное домостроение', 'Общестроительные работы', 'Сварочные работы', 'Заборы, беседки'];

  let editFilterPrice = (e) => {
    editFilterId = e.detail.l;
    console.log(editFilterId);    
  };
  let fabBtn = () => {
    if (!fab_document && !fab_client) {
      fab_document = true;
      fab_client = true;
    } else {
      fab_document = false;
      fab_client = false;
    };
    if(!fab_document || fab_client) addPrice = false;
  };
  let searchText = async() => {
    try {
    const needle = searchValue.toLowerCase();
      if (!needle) { // строка поиска будет удалена
        $Data = preSearchData;
        return;
      };
      console.log(searchValue.toLowerCase());
      console.log(search);
      const idx = 'service'; // в каком столбце искать
      $Data = await preSearchData.filter(function(row) {
      return row[idx].toString().toLowerCase().indexOf(needle)
      > -1;
      });
      console.log($Data);
    } catch {
      error => {
        snackbar = true;
        message = error.message;
        snackColor = 'red lightnen-4';
      };
    }
  };
  let toggleSearch = () => {
    if (search) {
      $Data = preSearchData;
      search = false;
    } else {
      preSearchData = $Data;
      search = true;
      snackbar = search;
      snackColor = 'light-blue lightnen-1'
      message = 'Поиск включен...';
      handleMount()
    }
  };
  let sortTbl = (key, sort_header) => {
    keyName = key;
    console.log(keyName);
    sort = sort_header;
    console.log(sort);
    console.log(search);
    if(!search) {
      getPrices();
    };     
    if(search) {
      let Data_sort = $Data.slice();
      console.log(Data_sort);
      let compare = (a, b) => {
        if(a[keyName] < b[keyName]) 
        return -1;
        if(a[keyName] > b[keyName]) 
        return 1;
        return 0;
      };
    sort === 1 ? $Data =  Data_sort.sort(compare) : $Data = Data_sort.sort(compare).reverse();
    console.log($Data);
    };
  };
  let getPrices = async() => {  
    try {
      const data_price = await roof.find({ params: { serviceName: serviceName, sort: sort, key: keyName }});
      console.log(data_price);
      if(data_price.success) $Data = await dataParser(data_price.data, 'service_id', 'service', 'unit', 'price', 'rating', 'foto');
    }
    catch {
      error => {
        snackbar = true;
        message = error.message;
        snackColor = 'red lightnen-4';
      };
    }
  };
  let dataParser = (targetedArray, ...options) => {
    let parsedData = [];
      targetedArray.forEach(item => {
        let parsedItem = {};
        options.forEach(option => (parsedItem[option] = item[option]));
        parsedData.push(parsedItem);
      })
      return parsedData;    
  };
  let editPrice = async(e) => {
    const prices = e.detail;
    let edit_prices = {...prices, serviceFilterId: editFilterId};
    if(!!editFilterId) {
      roof
      .put_price({edit_prices})
      .then(res => {
        console.log(res);
        resetFields(edit_prices);
        snackbar = true;
        message = res.data.message;
        snackColor = 'light-blue lighten-1';
        getPrices();
      })
      .catch (error => {
        errorHandler(error);
      })
    } 
  };
  let savePrice = async(event) => {
    const prices = event.detail;
    roof
    .post_price({prices})
    .then(res => {
      console.log(res)
      resetFields(prices);
      snackbar = true;
      message = res.data.message;
      snackColor = 'light-blue lighten-1';
      //console.log(res.data._doc);
      getPrices();
    })
    .catch (error => {
      errorHandler(error);
    })
  };
  let resetFields = (item) => {
    for (let key in item) {
        item[key] = null;

        if (key === 'quantity' || key === 'price') {
          item[key] = 0;
          };

          item['items'] = [];
      }    
  };
  let errorHandler = (error) => {
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
  let deletePrice = async (e) => {
    const del_id = e.detail.m;
    console.log(del_id);
    roof
    .delete_price({ params: { serviceId: del_id, sort: sort}})
    .then(res => {
      console.log(res);
      snackbar = true;
      message = res.data.message;
      snackColor = 'light-blue lighten-1';
      getPrices();
    })
    .catch(      
        error => {
        snackbar = true;
        message = error.message;
        snackColor = 'red lightnen-4';
      });
  };
  let handleMount = () => search ? promise = searchText() : promise = getPrices();
  onMount(handleMount);
</script>
  
<style lang="scss">
   @import "./../custom/styles";
  .l-price {
    background-color: transparent;
    margin: 25px auto;
    padding: 15px;
    min-width: 272px;
    .l-price-search {
      .themed {
        --itemColor: blue;
		    --border: 3px solid yellow;
		    --borderRadius: 10px;
		    --placeholderColor: yellow;
        --clearSelectFocusColor: yellow;
        --clearSelectHoverColor: yellow;
        --clearSelectColor: yellow;
	    }
      //width: 500px; 
    }   
  } 
</style>