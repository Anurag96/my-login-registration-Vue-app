<template>
  <div id="app">
    <Header/>
    <Registration msg=""/>
  </div>
</template>

<script>
import Registration from './components/Registration.vue'
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Registration,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
