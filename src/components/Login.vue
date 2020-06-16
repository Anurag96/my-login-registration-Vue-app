<template>
 <div class="login">
   <div><Header/></div>
    <h1>Login</h1>
    
    <div class="box">
       <form id="login-form" @submit.prevent="addUser">
      <!-- name -->
      <div class="field">
        <label class="label">User Name </label><br>
        <input type="text" class="input" v-model="userName" name="userName">
      </div>

      <!-- email -->
      <div class="field">
        <label class="label">Email </label> <br>
        <input type="email" class="input" v-model="email" name="email">
      </div>

      <div class="field">
        <label class="label">Password </label> <br>
        <input type="password" class="input" v-model="password" name="password">
      </div>

      <!-- submit button -->
      <div class="field has-text-right"> <br>
        <button type="submit" class="button is-danger">Submit</button><br>
        <br>
        <router-link to="/">Register |</router-link>
         <router-link to="/about"> About</router-link>
      </div>
    </form>
    </div>
  </div>

</template>

<script>
import Header from './Header.vue'
// import Registration from './Registration'

export default {
  name: 'Login',
  components:{Header},
  methods:{
   addUser(){
     
   }
  },
  data(){
    return{
      userName:"",
      email:"",
      password:""
    }
  }

}
</script>

<style>

</style>