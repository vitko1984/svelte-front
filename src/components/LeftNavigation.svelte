<div class="d-inline-block navigation" 
    on:mouseenter={() => {mini = false;}} 
    on:mouseleave={() => {mini = true;}}>
  <NavigationDrawer {mini} style="color:yellow;text-align:center">
    <ListItem>
      <span slot="prepend" class="ml-n2">
        <Avatar size={40}><img src="../build/images/krovlya1.jpg" alt="profile" /></Avatar>
      </span>
      <h6>ВитКо</h6>
    </ListItem>
    <Divider />
    <List dense nav>  
      <ListItem>
        <span slot="prepend">
          <a href="/"><HouseIcon width='20' /></a>
        </span>
        <i>Главная</i>
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <a href="/about"><AboutIcon width='20' /></a>
        </span>
        <i>О нас</i>
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <a href="/krovlya"><RoofIcon width='20' /></a>
        </span>
        <i>Кровельные работы</i>
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <a href="/karkas"><KarkasIcon width='20' /></a>
        </span>
        <i>Каркасный дом</i>
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <a href="/build"><BuildIcon width='20' /></a>
        </span>
        <i>Общестроительные работы</i>
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <a href="/prices"><PriceIcon width='20' /></a>
        </span>
        <i>Расценки</i>      
      </ListItem>
      <ListItem>
       <span slot="prepend">
        <a href="/contacts"><ContactIcon width='20' /></a>
        </span>
        <i>Контакты</i>
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <a href="/comments"><ClientIcon width='20' /></a>
        </span>
        <i>Рейтинг + отзыв</i>
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <a href="/test"><HouseIcon width='20' /></a>
        </span>
        <i>Тест</i>
      </ListItem>
    </List>
  </NavigationDrawer>
</div>

<script>
import HouseIcon from '@/public/build/images/house.svg';
import PriceIcon from '@/public/build/images/bill.svg';
import ContactIcon from '@/public/build/images/contact.svg';
import AboutIcon from '@/public/build/images/about.svg';
import RoofIcon from '@/public/build/images/roof1.svg';
import KarkasIcon from '@/public/build/images/karkas.svg';
import BuildIcon from '@/public/build/images/build.svg';
import ClientIcon from '@/public/build/images/clients.svg';

import { NavigationDrawer,
        List,
        ListItem,
        Avatar,
        Divider} from 'svelte-materialify/src';

let mini = true;
</script>

<style lang="scss">
@import "./../custom/styles";

a {
  font-weight: bold;
  font-size: 14px;
  font-family:  Georgia;
  //color: rgba(255, 255, 255, 0.5);
  color: white;
  /*& :active {    
    color: $background-tint;
  }*/
}
.navigation {
  background-color: $background-color;
  //background-color: transparent;
  position: fixed;
  bottom: 250px;
	left: 10px;
}  
</style>