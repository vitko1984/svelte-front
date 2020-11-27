<script>
    import { Route, router } from 'tinro'
    import Contacts from './components/Contacts.svelte'
    import About from './components/About.svelte'
    import Krovlya from './components/Krovlya.svelte'
    import Karkas from './components/Karkas.svelte'
    import Build from './components/Build.svelte'
    import Prices from './components/Prices.svelte'
    import Comments from './components/Comments.svelte'
    import Home from './components/Home.svelte'
    import Test from './components/Test.svelte'

    router.useHashNavigation ( )
</script>

<div class="router">    
  <Route path="/"><Home /></Route>
  <Route path="/about"><About /></Route>
  <Route path="/krovlya"><Krovlya /></Route>
  <Route path="/karkas"><Karkas /></Route>
  <Route path="/build"><Build /></Route>
  <Route path="/prices"><Prices /></Route>
  <Route path="/contacts"><Contacts /></Route>
  <Route path="/comments"><Comments /></Route>
  <Route path="/test"><Test /></Route>
</div>  

<style lang="scss">
.router {
  max-width: 1500px;
  position: relative;
  //left: 270px;    
}    
</style>


