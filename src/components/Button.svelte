<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();  
export let props = {};

function Click() {
  dispatch('click');
};
</script>

<style lang="scss">
.Button {
  background-color: #6f001b;
  border-radius: 28px;
  border: 0;
  box-shadow: 0px 1px 1px #d9d9d9;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  padding: 5px 15px;
  text-decoration: none;
  transition-duration: 0.1s;
  transition-property: transform;
  &:hover {
    transform: scale(1.1);
  }
}   
</style>

  {#if !!props.hrefName}
    <a href={props.hrefName} {...props} on:click={Click} class="Button" class:{props.className}={props.className}><slot></slot></a>
  {:else}
    <button {...props} on:click={Click} class="Button" class:{props.className}={props.className}><slot></slot></button>
  {/if}