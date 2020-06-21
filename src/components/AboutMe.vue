<template>
  <div>
    <div><Header/></div>
   <button @click="logoutUser">Logout</button>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'About',
  components:{Header},
  methods: {
    logoutUser() {
      localStorage.removeItem("loginUser");
      this.$router.push('/login')
    }
  }
};
</script>
