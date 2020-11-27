<style lang="scss">
.Form {
  .FormRow {
    padding-left: 20px;
    text-align: left;
    //width:300px;
    .FormLabel {
       color: #A0A0A0;
       display: block;
       font-size: 12px;
       padding: 12px 0 6px;
    }
  }
}    
</style>

<script>
import FormInput from '@/src/components/FormInput.svelte'
import Rating from '@/src/components/Rating.svelte'
import { initData } from '@/src/stores.js';

export let fields = [];
export let readonly = false;
export let initialData;

let data = initialData;
const initial = $initData;
</script>

<form class="Form">
  {#each fields as field (field.id)}
    {#if !readonly}
      <div class="FormRow" key={field.id}>
        {#if field.id !== '_id'}
          <label class="FormLabel" for={field.id}>{field.label}:
          <FormInput {...field} initialData={data} defaultValue={data && data[field.id]} on:getData /></label>
        {/if}
      </div>
    {:else}    
      <div class="FormRow" key={field.id}>
        {#if field.id !== '_id'}
          <span class="FormLabel">{field.label}:</span>
        {/if}
        {#if field.type === 'rating'}
          <Rating readonly defaultValue={parseInt(data && data[field.id], 10)} />
        {:else if field.id !== '_id'} 
          <div class="grey-text">{data && data[field.id]}</div>
        {/if}
      </div>
    {/if}
  {/each}
</form>