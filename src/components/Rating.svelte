<!--<svelte:options accessors />-->
<div 
on:mouseout={reset}
class="Rating" 
class:RatingReadonly={readonly}>
  {#each stars as star, idx}
    <span 
    on:click={!readonly && setRating(idx+1)} 
    on:mouseover={!readonly && setTmpRating(idx+1)} 
    class:RatingOn={idx+1 <= tmpRating}>&#9734;</span>
  {/each}
</div>
{#if !readonly && !!id}
<input type="hidden" value={rating} />
{/if}

<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

export let max = 5;
export let defaultValue;
export let readonly;
export let id;

let stars = [];
//$: value = defaultValue;
$: rating = defaultValue;
$: tmpRating = defaultValue;
for(let i = 0; i < max; i++) {
  stars = [...stars, 1];
};

function setTmpRating(rtg) {tmpRating = rtg;};
function setRating(rtg) {
  tmpRating = rtg; 
  rating = rtg;
  dispatch('rating', rating);
};
function reset() {tmpRating = rating};

$: console.log('defaulValue: ', defaultValue);
$: console.log('rating: ', rating);
</script>

<style lang="scss">
  /* thanks to https://css-tricks.com/star-ratings/ */
  .Rating {
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  font-size: 28px;

  &.RatingReadonly{
    cursor: auto;
  }

  > span {
    color: gold;
    display: inline-block;
    position: relative;
    width: 1.1em;
  }

  .RatingOn:before {
    color: gold;
    content: "\2605";
    left: 0; 
    padding: 1px;
    position: absolute;
  }
}    
</style>