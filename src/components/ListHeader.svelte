{#if headers != null}
<header class="l-list-header">
    {#each headers as header}
    <i class="md-list-header white-text">        
      { header.label }
      <span class="icon-list-header">
        {#if header.sortable===true}
        <span on:click={()=>{header.sortable=!header.sortable; sortable(header)}} class="blue-text">
          <Icon path="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
        </span>
        {:else if header.sortable===false}
        <span on:click={()=>{header.sortable=!header.sortable; sortable(header)}} class="blue-text">
          <Icon path="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </span>
        {/if}
      </span>
    </i>
    {/each}    
</header>
{/if}

<script>
  import { Icon } from 'svelte-materialify/src';

  export let headers = {};
  export let sortTbl;

  function sortable(header) {
    if(header.sortable) sortTbl(header.key, -1);
    if(!header.sortable) sortTbl(header.key, 1); 
    };
</script>

<style lang="scss">
  @import "./../custom/styles";

.l-list-header {
  display: none;
  width: 100%;

  @media (min-width: 601px) {
    margin: 25px 0 0;
    display: flex;
  }

  .md-list-header {
    //padding: 0 15px;      
    width: 100%;
    background-color: $background-color;
    border: 1px solid $border-color-input;
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
    font-size: 18px;

    &:first-of-type, &:nth-of-type(4) {width: 10%}
    &:nth-of-type(2) {width: 53%;}
    &:nth-of-type(3), &:nth-of-type(5) {width: 15%;}

    @media (min-width: 601px) {display:flex;justify-content: flex-start;}
    .icon-list-header {
      display: flex;
      flex-direction: column;
    }
  }
}  
</style>