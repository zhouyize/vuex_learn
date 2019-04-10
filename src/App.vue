<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!--<Vuexx />-->
    <PageA />
    <PageB />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import Vuexx from './components/vuex'
import PageA from './components/a'
import PageB from './components/b'

export default {
  name: 'app',
  components: {
      HelloWorld,
      //Vuexx,
      PageA,
      PageB
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
