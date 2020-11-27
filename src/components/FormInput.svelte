<div class="">
  {#if type !== 'db'}
    {#if type === 'year'}
      <TextField clearable bind:value {...common}  type="text" color="grey" />
    {:else if type==='suggest'}
      <Suggest bind:value {...common} {options} on:suggest={(e) => value = e.detail} />
    {:else if type==='rating'}
      <Rating {id} defaultValue={parseInt(defaultValue, 10)} on:rating={(e) => value = e.detail} />
    {:else if type==='text'}
      <Textarea clearable noResize rows=3 bind:value {...common} color="grey" />
    {:else}
      <TextField clearable bind:value {...common} type="text" color="grey" />   
    {/if}
  {/if}    
</div>

<script>
  import { createEventDispatcher } from 'svelte';
  import { initData } from '@/src/stores.js';
  import { TextField, Textarea, Icon } from 'svelte-materialify/src';
  import Rating from '@/src/components/Rating.svelte';
  import Suggest from '@/src/components/Suggest.svelte';

  const dispatch = createEventDispatcher();

  export let defaultValue;
  export let id;
  export let options;
  export let type;
  export let initialData;
  
  let data = initialData;

  const common = {
    defaultValue: defaultValue,
    id: id   
  };

  console.log('Данные в FormInput.svelte: ', data);
  let prefilled = {};
  $: value = (id === 'date' || type === 'year') ? new Date().getDate()+'.'+(new Date().getMonth()+1)+'.'+new Date().getFullYear() || defaultValue : defaultValue;
  $: console.log(id);
  $: console.log(value);
  $: if(id && value) prefilled[id] = value;
  $: dispatch('getData', prefilled);
  $: console.log('prefilled: ', prefilled);
  console.log(defaultValue);
</script>

<style lang="scss"></style>