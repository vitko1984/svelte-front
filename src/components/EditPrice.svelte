<div class="l-price-edit">
  <Grid container gutter={12}>  
    <Grid xs={12} md={1}>
      <TextField
            clearable
            bind:value={price_edit1.serviceId}
            color="white">
        № п/п
      </TextField>
    </Grid>

    <Grid xs={12} md={3}>
      <Textarea 
            clearable
            rows={1}
            bind:value={price_edit1.serviceName}
            color="white">
        Наименование 
      </Textarea>
    </Grid>

    <Grid xs={12} md={1}>
      <TextField 
            clearable
            bind:value={price_edit1.unit}
            color="white">
        Ед. изм.    
      </TextField>
    </Grid>

    <Grid xs={12} md={1}>
      <TextField
            clearable 
            bind:value={price_edit1.price}
            color="white">
        Цена
      </TextField>
    </Grid>
      
    <Grid xs={12} md={1}>
      <TextField 
            clearable
            bind:value={price_edit1.rating}
            color="white">
        Рейтинг
      </TextField>
    </Grid>

    <Grid xs={12} md={3}>
      <Textarea 
            clearable
            rows={1}
            bind:value={price_edit1.foto}
            color="white">
        Фото
      </Textarea>
    </Grid>
    {#if addPrice}
      <Grid xs={12} md={2}>
        <button class="btn-primary" on:click={Add_price(price_edit1)}>Добавить</button>
      </Grid>
    {/if}
    {#if !addPrice}
      <Grid xs={12} md={2}>
        <button class="btn-primary" on:click={[Edit_price(price_edit1), Clr()]}>Обновить</button>
      </Grid>
    {/if}
  </Grid>  
</div>

<script>
  import { TextField, Textarea, Icon } from 'svelte-materialify/src';
  import { createEventDispatcher } from 'svelte';
  import Grid from 'svelte-grid-responsive';

  const dispatch = createEventDispatcher();

  export let addPrice;
  export let Clr;

  let Edit_price = (price_edit1) => {
    console.log(price_edit1);
    dispatch('edit', {...price_edit1});
  };

  let Add_price = (price_edit1) => {
    console.log(price_edit1);
    dispatch('add', {...price_edit1});
  };
  
  let price_edit1;
  
  let price_edit = {
    serviceId: '',
    serviceName: '',
    unit: '',
    price: '',
    rating: '',
    foto: ''
  };

  price_edit1 = price_edit
</script>

<style lang="scss">
  @import "./../custom/styles";
  @import "./../custom/partials/buttons";

  button {
    height: 36px;
    background-color: $background-color;
  }

</style>