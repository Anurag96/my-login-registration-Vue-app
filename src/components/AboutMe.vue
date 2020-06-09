<template>
  <div>
    <div><Header/></div>
   <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'About',
  components:{Header}
};
</script>
