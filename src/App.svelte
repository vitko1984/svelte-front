<script>
import Footer from '@/src/components/Footer.svelte';
import Header from '@/src/components/Header.svelte';
import Router from '@/src/Router.svelte';
import LeftMenu from '@/src/components/LeftNavigation.svelte';

import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';

import { MaterialApp } from 'svelte-materialify';
import { Row, Col, Container} from 'svelte-materialify/src';

let theme = 'transparent';
let y = 0;
let k;

$: if($progress === 0) y = y*(1 - $progress)
    else y = y*$progress;

const progress = tweened(0, {
  duration: 400,
	easing: cubicOut
});

const handleUp = () => {
  if($progress === 0) progress.set(1)
  else progress.set(0);
};
</script>

<svelte:window bind:scrollY={y}/>

<div id="app">
  <MaterialApp {theme}>  
	  <Header />
	  <Container>
	    <Row>				
        <Col cols={1}>
          {#if y >= 500}
            <LeftMenu />
          {/if}
        </Col>
	      <Col cols={10}><Router /></Col>
        <Col cols={1}>
          {#if y >= 250}
		        <div class="topcontrol" on:click={handleUp}>
		          <img src="//web-ptica.ru/VRV-files/knopkavverh/4.png" alt="Вверх..." />
            </div>
          {/if}
	      </Col>
	    </Row>  
    </Container>	  	
	  <Footer />
  </MaterialApp>
</div>

<style lang="scss">	
@import "./custom/styles";
#app {
  background-color: $background-tint;
  &:after {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
	  left: 0;
	  background: url('./images/back2.jpg') no-repeat center center fixed;  
	  background-size: cover;  
    opacity: .9;
    z-index: -1;
  }
  .topcontrol {
    position: fixed;
    bottom: 5px;
    right: 5px;
    opacity: 1;
    cursor: pointer;
    img {
	  width: 48px;
	  height: 48px;	  
    }
  }
}
</style>