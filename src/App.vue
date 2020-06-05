<template>
  <div id="app">
  <!-- <router-link to="/registration">About</router-link>
    <router-view></router-view> -->
    <Registration/>
  </div>
</template>

<script>
import Registration from './components/Registration.vue'

export default {
  name: 'App',
  components: {
    Registration
    
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
  margin-top: 0px;
}
</style>
