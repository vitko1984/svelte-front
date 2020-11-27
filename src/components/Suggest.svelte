<!--<input list={randomid} placeholder="Выбор..." {id} bind:value on:input={dispatch('suggest', value)} class="Suggest grey-text" />-->
<TextField clearable {rules} list={randomid} {id} bind:value on:input={dispatch('suggest', value)} color="grey" />
<datalist id={randomid} class="">
  {#each options as item, idx}
    <option value={item} key={idx} class="transparent"></option> 
  {/each}
</datalist>

<script>
import { createEventDispatcher } from 'svelte';
import { TextField, Icon} from 'svelte-materialify/src';

const dispatch = createEventDispatcher();

export let options;
export let defaultValue = '';

let id;
let value = defaultValue;
let rules = [
        value => !!value || 'Ввести...',
        value => (!!value && value.length >= 3) || 'Мин 3 символа...',
      ];

const randomid = Math.random().toString(16).substring(2);
</script>