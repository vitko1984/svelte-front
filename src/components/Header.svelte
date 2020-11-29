<style lang="scss">
@import "./../custom/styles";
@import "./../custom/partials/buttons";
@import "./../custom/partials/headers";

.overlay {
  height: 380px;
  width: 250px;
  padding-top: 16px;
  position: relative;
  left: 5px;
}
a {
  font-weight: bold;
  font-size: 14px;
  font-family:  Georgia;
  //color: rgba(255, 255, 255, 0.5);
  color: yellow;
  &:active {    
    color: $background-tint;
  }
}
button {
  background-color: $background-color;
}
</style>

<script>
import HouseIcon from '@/src/images/house.svg';
import PriceIcon from '@/src/images/bill.svg';
import ContactIcon from '@/src/images/contact.svg';
import AboutIcon from '@/src/images/about.svg';
import RoofIcon from '@/src/images/roof1.svg';
import KarkasIcon from '@/src/images/karkas.svg';
import BuildIcon from '@/src/images/build.svg';
import ClientIcon from '@/src/images/clients.svg';

import {AppBar,
      Button,
      Icon,
      NavigationDrawer,
      Divider,
      List,
      ListItem,
      Avatar,
      Overlay, 
      Row, 
      Col, 
      Container } from 'svelte-materialify/src';

import {hdr} from '@/src/stores.js';

let active = false;

const toggleNavigation = () => active = !active;
const handleScroll = () => {
  if(scrollY >= 250 && active) active = false;
};
function logout() {};

console.log('$hdr: ', $hdr);
</script>

<svelte:window on:scroll={handleScroll} />

<div class="Header">
  <div class="Header-Info">
    <div style="position:relative;height:400px;">
      <AppBar >
        <Container>
          <Row noGutters style="align-items: center;">
            <Col cols={1}>
              <Button fab depressed on:click={toggleNavigation}>
                <Icon path="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
              </Button>
            </Col>
            <Col cols={2}><span slot="default" style="font-size:24px;font-weight:bold;"><i>{$hdr.title}</i></span></Col>
            <Col>
              {#if $hdr.iconName === 'AboutIcon'} 
                <AboutIcon width='45' />
              {:else if $hdr.iconName === 'PriceIcon'}
                <PriceIcon width='45' />
              {:else if $hdr.iconName === 'RoofIcon'}
                <RoofIcon width='45' />
              {:else if $hdr.iconName === 'KarkasIcon'}
                <KarkasIcon width='45' />
              {:else if $hdr.iconName === 'BuildIcon'}
                <BuildIcon width='45' />
              {:else if $hdr.iconName === 'ContactIcon'}
                <ContactIcon width='45' />
              {:else if $hdr.iconName === 'ClientIcon'}
                <ClientIcon width='45' />
              {:else }
                <HouseIcon width='45' />
              {/if}
            </Col>
            <span slot="default" style="font-size:14px">
              <i>{$hdr.userName}</i><br />
              <button class="btn-primary" on:click ={logout}>Выйти</button> 
            </span>
            <span slot="default" style="margin-left: 20px">
              <Avatar size={60} style="margin-right: 20px"><img src="krovlya1.jpg" alt="profile" /></Avatar>
            </span>
          </Row>
        </Container>
      </AppBar>
      <NavigationDrawer absolute {active} style="color:yellow;top:56px;text-align:left">
        <Divider />
        <List dense nav>  
          <ListItem>
            <a href="/"><i>Главная</i></a>            
          </ListItem>
          <ListItem>
            <a href="/about"><i>О нас</i></a>
          </ListItem>
          <ListItem>
            <a href="/krovlya"><i>Кровельные работы</i></a>
          </ListItem>
          <ListItem>
            <a href="/karkas"><i>Каркасный дом</i></a>            
          </ListItem>
          <ListItem>
            <a href="/build"><i>Общестроительные работы</i></a>
          </ListItem>
          <ListItem>
            <a href="/prices"><i>Расценки</i></a>      
          </ListItem>
          <ListItem>
            <a href="/contacts"><i>Контакты</i></a>
          </ListItem>
          <ListItem>
            <a href="/comments"><i>Рейтинг + отзыв</i></a>
          </ListItem>
          <ListItem>
            <a href="/test"><i>Тест</i></a>
          </ListItem>
        </List>      
      </NavigationDrawer>
      <div class="overlay">
        <Overlay {active} absolute on:click={toggleNavigation} index={1} />
      </div>
    </div>
  </div>       
</div>   