<template>
  <div>
     <div><Header/></div>
    <h1>Registration</h1>
    
    <div class="box">
       <form id="signup-form">
  
      <div class="field">
        <label class="label">Username </label><br>
        <input type="text" class="input" name="userName">
      </div>

      <div class="field">
        <label class="label">Email ID </label><br>
        <input type="email" class="input" name="email">
      </div>

      <div class="field">
        <label class="label">Password </label><br>
        <input type="password" class="input" name="password">
      </div>

      <div class="field">
        <label class="label">Confirm Password </label><br>
        <input type="password" class="input" name="confirmPassword">
      </div>
 <br>
      <!-- submit button -->
      <div class="field has-text-right">
        <button type="submit" class="button is-danger">Submit</button>
      </div>
    </form>
    </div>
  </div>
 
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'Registration',
  components:{Header},
  props: {
    msg: String
  },data(){
    return{
    
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
field {
  float: left;
width: 20%;
}
box {
  margin: 1px;
}
</style>
