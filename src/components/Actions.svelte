<script>
 export let onAction = () => {};
</script>

<div class="Actions white-text">
  <span tabIndex="0" title="Показать  информацию" on:click={() => onAction('info')} class="ActionsInfo">&#8505;</span>
  <span tabIndex="0" title="Редактировать" on:click={() => onAction('edit')} class="ActionsEdit">&#10000;</span>
  <span tabIndex="0" title="Удалить" on:click={() => onAction('delete')} class="ActionsDelete">x</span>    
</div>

<style lang="scss">
  .Actions {
    span {
      border-radius: 150%;
      border: 2px solid black;
      color: black;
      cursor: pointer;
      display: inline-block;
      font-weight: bold;
      height: 33px;
      //height: 25px;
      margin: 5px 15px 5px 15px;
      padding-top: 3px;
      text-align: center;
      transition-duration: 0.1s;
      transition-property: transform;
      width: 33px;
      //width: 25px;
      &:hover {
        transform: scale(1.1);
      }
    }
    .ActionsInfo {
      border-color: #4fc3f7;
      color: #4fc3f7;
    }
    .ActionsEdit {
      border-color: yellowgreen;
      color: yellowgreen;
    }
    .ActionsDelete {
      border-color: red;
      color: red;
    }
  }
</style>