<table>
  <thead>
    <tr>
      {#each schema as item (item.id)}
        {#if item.show}
          <th key={item.id} on:click={_sort(item.id)} class="schema-{item.id}">
              {sortby === item.id ? item.label += descending ? '\u2191' : ' \u2193' : item.label}
          </th>
        {/if}
      {/each}
      <th class="TableNotSortable">Действия</th>  
    </tr>
  </thead>
  <tbody on:dblclick={_showEditor}>
    {#each data as row, rowidx}
      <tr key=(rowidx)>
        {#each Object.keys(row) as cell, idx}
          {#if schema[idx] && schema[idx].show}
            <td class="schema-{schema[idx].id}"
                class:TableEditable={!(schema[idx].type === 'tex') && !(schema[idx].type === 'ratin')}
                class:TableDataLeft={schema[idx].id.align ==='left'}
                class:TableDataRight={schema[idx].id.align === 'right'}
                class:TableDataCenter={schema[idx].id.align !== 'left' && schema[idx].id.align !== 'right'} 
                key={idx}
                data-row={rowidx}
                data-key={schema[idx].id}>            
              {#if !(schema[idx].type == 'rating') && !!edit && edit.row === rowidx && edit.key === schema[idx].id}
                <!--<form on:submit|preventDefault={_save}>-->
                <form on:change={_save}>  
                  <FormInput {...schema[idx]} initialData={data[rowidx]} defaultValue={row[cell]} on:getData={e => getData(e)} />
                </form>
              {:else if (schema[idx].type === 'rating') && !!edit && edit.row === rowidx && edit.key === schema[idx].id}
                <Rating defaultValue={Number(row[cell])} on:rating={e => getRatingData(e.detail)} />    
              {:else if (schema[idx].type === 'rating')}
                <Rating readonly defaultValue={Number(row[cell])} />
              {:else}
                <p class="grey-text" style="text-align: left;">{row && row[cell]}</p>
              {/if}
            </td>
          {/if}  
        {/each}
        <td class="TableDataCenter">
          <Actions onAction={type => _actionClick(type, rowidx, row._id)} />    
        </td>
      </tr>  
    {/each}
  </tbody>
</table>
  
  <script>
    import { createEventDispatcher } from 'svelte';

    import { initData } from '@/src/stores.js';

    import Rating from '@/src/components/Rating.svelte';  
    import Actions from '@/src/components/Actions.svelte';
    import FormInput from '@/src/components/FormInput.svelte';

    const dispatch = createEventDispatcher();

    export let onDataChange = () => {};
    export let schema;
    export let initialData;

    let sortby = null; // schema.id
    let descending = false;
    let edit = null; //[row index, schema.id]
    let readonly = true;
    $: data = $initData;
    //$: data = [initialData];
    let inputsData; 

    function _sort(key) {
      let descendingI = sortby === key && !descending;
      key !=='date' ? data.sort(function(a, b) {
        return descendingI ? (a[key] < b[key] ? 1 : -1) : (a[key] > b[key] ? 1 : -1);
      }) : data.sort(function(a, b) {
        let c = new Date(a[key].replace(/\./g, ',').replace(/([0-9]+),([0-9]+),([0-9]+)/g, '$3,$2,$1')).getTime();
        let d = new Date(b[key].replace(/\./g, ',').replace(/([0-9]+),([0-9]+),([0-9]+)/g, '$3,$2,$1')).getTime();
        return descendingI ? (c < d ? 1 : -1) : (c > d ? 1 : -1);
      });
      sortby = key;
      descending = descendingI;
      _fireDataChange(data);    
    };
    function getData(e) {
      inputsData = e.detail;
    };
    function getRatingData(rating) {
      data[edit.row][edit.key] = rating;
      let dialog = {type: 'edit', idx: edit.row, id: data[edit.row]._id};
      edit = null;
      _fireDataChange(data, dialog);
    };
    function _fireDataChange(data, dialog) {
      onDataChange(data, dialog);
    };
    const _save = () => {
      data[edit.row][edit.key] = inputsData[edit.key];
      let dialog = {type: 'edit', idx: edit.row, id: data[edit.row]._id};
      edit = null;
      _fireDataChange(data, dialog);
    };
    function _showEditor(e) {
      edit = {
        row: parseInt(e.target.dataset.row, 10),
        key: e.target.dataset.key
      };
      readonly = false;
    };
    function _actionClick(action, idx, rowid) {
      let dialog = {type: action, idx: idx, id: rowid};
      console.log('Изменение типа диалога: ', dialog)
      dispatch('dialog', dialog);    
    };
    $: console.log('Изменение данных(редактирование): ', data);
    $: console.log('Изменение координат("edit"): ', edit);
    $: console.log('inputsData: ', inputsData);
    $: console.log('Данные, переданные из Client.svelte: ', initialData)
  </script>

<style lang="scss">  
  td {
    //background-color: #ffffff;
    background-color: transparent;
    padding: 5px;
  }
  
  th {
    //color: #7f7f7f;
    color: white;
    cursor: pointer;
    font-size: 13px;
    font-weight: normal;
    padding: 5px;
    text-align: center;
  }
  
  table {
    width: 100%;
  }
  
  .TableNotSortable {
    cursor: default;
  }
  
  .TableEditable {
    cursor: cell;
  }
  
  .TableEditable:hover {
    //background: #FBFBFB;
    background: #283593;
  }
  
  .TableDataCenter {
    text-align: center;
  }
  
  .TableDataLeft {
    padding: 0 10px;
    text-align: left;
  }
  
  .TableDataRight {
    text-align: right;
  }    
  </style>