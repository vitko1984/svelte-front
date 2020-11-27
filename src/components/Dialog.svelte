<svelte:head>
  {#if modal}
    <style>
      body { overflow: hidden; }
    </style>
  {/if}
</svelte:head>

<div class="Dialog" class:DialogModal={modal}>
  <div class:DialogModalWrap={modal}>
    <div class="DialogHeader">{header}</div>
    <div class="DialogBody"><slot></slot></div>
    <div class="DialogFooter">
      {#if hasCancel}
        <span
            class="DialogDismiss"
            on:click={() => onAction('dismiss')}>
          Отменить
        </span>
      {/if}
      <Button on:click={() => onAction(hasCancel ? 'confirm' : 'dismiss')}>
        {confirmLabel}
      </Button>
    </div>
  </div>
</div>

<script>
import Button from '@/src/components/Button.svelte';

export let header;
export let confirmLabel = 'Применить';
export let modal = false;
export let onAction = () => {};
export let hasCancel = true;
    
//onMount(() => {if(process.browser) document.body.classList[modal ? 'add' : 'remove']('DialogModalOpen');});
//$: if(process.browser) document.body.classList[modal ? 'add' : 'remove']('DialogModalOpen');
</script>

<style lang="scss">  
.Dialog {
  border: 1px solid lightgray;
  &.DialogModal {
	background: rgba(0, 0, 0, 0.7);
	bottom: 0;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 1;
  }
  .DialogModalWrap {
    background: white;
	  margin: 5% auto;
	  width: 350px;      
    .DialogHeader {
      background-color: #6F001B;
      color: #F0F0F0;
      font-family: Norican, cursive;
      font-size: 42px;
      margin: 0;
      padding: 10px 10px 10px 20px;
      text-align: left;
    }
    .DialogBody {
      border-bottom: 1px solid lightgray;
      border-top: 1px solid lightgray;
      max-height: 50vh;
      overflow-x: hidden;
      padding: 10px 30px 30px 30px;
      text-align: center;
      font-size: 18px;
    }
    .DialogFooter {
      padding: 10px;
      text-align: right;
      .DialogDismiss {
        color: gray;
        cursor: pointer;
        text-decoration: underline;
      }
      //.Button {margin: 10px;} 
    }      
  }  
}
</style>