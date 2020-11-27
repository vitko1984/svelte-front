<div class="Excel">
  <Table {onDataChange} {initialData} {schema} on:dialog={(e) => dialog = e.detail} />
  {#if dialog}  
    {#if dialog.type === 'delete'}
      <Dialog modal
          header="Удалить запись"
          confirmLabel="Удалить"
          onAction={action => _deleteConfirmationClick(action)}>
        Вы уверены, что хотите удалить отзыв от клиента "{nameguess}"?
      </Dialog>
    {:else if dialog.type === 'info' || dialog.type === 'edit'}
      <Dialog modal 
          {readonly} 
          header={readonly ? 'Вся информация о записи' : 'Редактировать запись'}
          confirmLabel={readonly ? 'Закрыть' : 'Запомнить'} 
          hasCancel={!readonly} 
          onAction={action => _saveDataDialog(action)}>
        <Form
            fields={schema}
            initialData={data[dialog.idx]}
            {readonly} 
            on:getData={e => getData(e)} />  
      </Dialog>
    {:else}
      <p class="red-text">Недействительный тип диалога: "{dialog.type}"</p>  
    {/if}
  {/if}  
</div>

<script>
  import Form from '@/src/components/Form.svelte';
  import Table from '@/src/components/Table.svelte';
  import Dialog from '@/src/components/Dialog.svelte';

  import { initData } from '@/src/stores.js';

  export let onDataChange = () => {};
  export let schema;
  export let initialData;

  $: data = $initData;
  let inputsData = {};
  let dialog = null; //{type, idx}
  let readonly;
  let nameguess;
  let initial = initialData;

  $: if(!!dialog) {
    readonly = (dialog.type === 'info') ? true : false;
    const first = data[dialog.idx];
    nameguess = first[Object.keys(first)[1]];
  };

  function getData(e) {
    inputsData = {...inputsData, ...e.detail};
    console.log(inputsData);
  };
  function _deleteConfirmationClick(action) {
    if (action === 'dismiss') {
    _closeDialog();
    return;
  };
  data.splice(dialog.idx, 1);
  let dlg = dialog;
  dialog = null;
  data = data;
  _fireDataChange(data, dlg);
  };
  function _saveDataDialog(action) {
    if (action === 'dismiss') {
      _closeDialog();
      return;
    };
    let vl = {};
    let keys = Object.keys(initial);
    console.log('Массив ключей: ', keys);
    console.log('Вот, что пришло из инпутов(редактирование в ярлыке Exel.svelte): ', inputsData)
    keys.forEach(id => !!inputsData[id] ? vl[id] = inputsData[id] : vl[id] = data[dialog.idx][id]);
    console.log('Новый объект: ', vl);
    data[dialog.idx] = vl;
    let dlg = dialog;
    dialog = null;    
    _fireDataChange(data,dlg);
    inputsData = {};
    data = $initData;
  };
  function _closeDialog() {
    dialog = null;
  };
  function _fireDataChange(dt, dlg) {
    onDataChange(dt, dlg);
  };
  $: console.log('Данные в Excel.svelte: ', data);
  $: console.log('nameguess: ', nameguess);
  console.log('Изменение типа диалога: ', dialog)
</script>

