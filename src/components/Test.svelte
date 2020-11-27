<span class="mdi mdi-menu-swap"></span>

<S.TextField color="white">
  Label
</S.TextField>
<br />
<div class="white-text">
  <S.Icon path="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"  />
  <S.Icon path="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"  />
</div>

<h2 class="white-text">Кнопка</h2>
<div><Button props={{className: ""}}>Кнопка</Button></div>

<h2 class="white-text">Предложение</h2>
<div><Suggest options={['eenie', 'meenie', 'miney', 'mo']} /></div>

<h2 class="white-text">Рейтинг</h2>
<div class="white-text">Не присвоено значение : <Rating /></div>
<div class="white-text">Количество 4 из 5(присвоено значение 3) : <Rating defaultValue={3} /></div>
<div class="white-text">Звезд - 11(не присвоено) : <Rating max={11} /></div>
<div class="white-text">Только для чтения(+ количество3 из 5(присвоено значение 2)) : <Rating readonly={true} defaultValue={2} /></div>

<h2 class="white-text">Формы ввода</h2>
<table class="white-text"><tbody>
<tr>
<td>Обычный ввод</td> 
<td><FormInput /></td>
</tr>
<tr>
<td>С предварительным заполнением</td>
<td><FormInput defaultValue="it's like a default" /></td>
</tr>
<tr>
  <td>Год</td>
  <td><FormInput type="year" /></td>
  </tr>
  <tr>
  <td>Рейтинг</td>
  <td><FormInput type="rating" defaultValue={3} /></td>
  </tr>
  <tr>
  <td>Предложение</td>
  <td><FormInput
      type="suggest"
      options={['red', 'green', 'blue']}
      defaultValue="green" />
  </td>
  </tr>
  <tr>
  <td>Обычная текстовая область</td>
  <td><FormInput type="text" /></td>
  </tr>
  </tbody></table>

  <h2 class="white-text">Действия</h2>
  <div><Actions onAction={type => alert(type)} /></div>
  <h2 class="white-text">Диалоги</h2>
  <Dialog
      modal={false}
      header="Out-of-the-box example" 
      onAction={type => alert(type)}>
    Hello, Dialog!
  </Dialog>
  <Dialog
      modal={false} 
      header="No cancel, custom button"
      hasCancel={false}
      confirmLabel="Любое действие"
      onAction={type => alert(type)}>
    Все происходит здесь, см.: <Button props={{hrefName: '', className: ''}}>Кнопка</Button>
  </Dialog>
  <h2 class="white-text">Форма для заполнения</h2>  
  <Form  
  {fields}
  initialData={data} />
  <h2 class="white-text">Форма для чтения</h2>
  <Form 
  readonly 
  {fields} 
  initialData={data} />
<script>
  import { hdr, Columns, initData } from '@/src/stores.js';
  import * as S from 'svelte-materialify/src';
  import Rating from '@/src/components/Rating.svelte';
  import Suggest from '@/src/components/Suggest.svelte';
  import FormInput from '@/src/components/FormInput.svelte';
  import Actions from '@/src/components/Actions.svelte';
  import Dialog from '@/src/components/Dialog.svelte';
  import Button from '@/src/components/Button.svelte';
  import Form from '@/src/components/Form.svelte';

  $hdr = {...$hdr, title: 'Тест', iconName: 'HouseIcon'};

  const fields = $Columns.comentHeaders;
  let data = {};
  fields.forEach(item => data[item.id] = item.sample);
  data = [data];
  //$initialData = [data];
</script>

<style lang="scss">

</style>