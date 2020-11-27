{#if data}
  <section class="l-list-body white--text">
    {#each data as item, i}    
      <div class="md-list-item">
        {#each [...Object.entries(item)] as [key,info]}    
          <div class={basketVisible ? 'md-roof-info white-text' : 'md-karkas-info white-text'}>
            {#if info != item._id}  
              <div>{ info }</div>
            {/if}   
          </div>
        {/each}
        {#if basketVisible}
          <div class:l-roof-actions={basketVisible}>
            <Button icon class="{ i !== k || !clr ? 'yellow-text' : ''}" on:click={[index_filter(i), edit_filter(item.service_id), Clr(p = true)]}>
              <Icon path="M16.84,2.73C16.45,2.73 16.07,2.88 15.77,3.17L13.65,5.29L18.95,10.6L21.07,8.5C21.67,7.89 21.67,6.94 21.07,6.36L17.9,3.17C17.6,2.88 17.22,2.73 16.84,2.73M12.94,6L4.84,14.11L7.4,14.39L7.58,16.68L9.86,16.85L10.15,19.41L18.25,11.3M4.25,15.04L2.5,21.73L9.2,19.94L8.96,17.78L6.65,17.61L6.47,15.29" />
            </Button>
            <Button icon class="red-text" on:click={del(item.service_id)}>
              <Icon path="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
            </Button>
          </div>
        {/if}
      </div>
      {#if i === k && clr}
      <EditPrice {addPrice} {Clr} on:edit />
      {/if}
    {/each}
    {#if addPrice}
    <EditPrice {addPrice} {Clr} on:add />
    {/if}
  </section>
{/if}

  <script>
    import { createEventDispatcher } from 'svelte';

    import { Button, Icon } from 'svelte-materialify/src';

    import EditPrice from '@/src/components/EditPrice.svelte';

    import { Data } from '@/src/stores.js';

    export let basketVisible;
    export let addPrice;

    const dispatch = createEventDispatcher();

    let k;
    let p;
    let data;
    let clr = true;
    $: data = $Data;   
    console.log(data);

    $: index_filter = (i) => {k=i};
    let edit_filter = (l) => {
      console.log(l);
      dispatch('edit_filter', {l});
    };
    let del = (m) => {
      console.log(m);
      dispatch('del', {m});
    };
    let Clr = (p) => {
      p ? clr = p : clr = !clr;
      console.log(clr);
    }
  </script>

  <style lang="scss">
    @import "./../custom/styles";

    .l-list-body {
      display: flex;
      flex-direction: column;

      .md-list-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 15px 0;

        @media (min-width: 960px) {
          flex-direction: row;
          margin: 0;
        }

      .md-roof-info {
        //flex-basis: 17%;
        width: 100%;
        background-color: rgba(0, 175, 255, 0.45);
        //border: 1px solid $border-color-input;
        padding: 0 15px;
        display: flex;
        height: auto;
        align-items: stretch;
        justify-content: center;
        text-align: left;

        &:first-of-type, &:nth-of-type(4) {width: 8%}

        &:nth-of-type(2) {width: 62%;}

        &:nth-of-type(3), &:nth-of-type(5) {width: 15%;}

        @media (min-width: 601px) {
          justify-content: flex-start;
        }
      }

      .md-karkas-info {
        @extend .md-roof-info;
        background-color: rgba(102, 187, 106, 0.45)!important;

        }
      //}      

      .l-roof-actions {
        flex-basis: 25%;
        display: flex;
        background-color: rgba(0, 175, 255, 0.45);
        //border: 1px solid $border-color-input;
        align-items: center;
        justify-content: center;
      }

      /*.l-karkas-actions {
        @extend .l-roof-actions;
        background-color: rgba(102, 187, 106, 0.45)!important;
      }*/      
    }
  }
  </style>