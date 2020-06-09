<template>
 <div class="login">
   <div><Header/></div>
    <h1>Login</h1>
    
    <div class="box">
       <form id="login-form">
      <!-- name -->
      <div class="field">
        <label class="label">User Name </label><br>
        <input type="text" class="input" name="userName">
      </div>

      <!-- email -->
      <div class="field">
        <label class="label">Email </label> <br>
        <input type="email" class="input" name="email">
      </div>

      <div class="field">
        <label class="label">Password </label> <br>
        <input type="password" class="input" name="password">
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

export default {
  name: 'Login',
  components:{Header}

}
</script>

<style>

</style>