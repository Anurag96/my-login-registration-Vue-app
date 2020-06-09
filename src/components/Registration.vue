<template>
  <div>
     <div><Header/></div>
    <h1>Registration</h1>
    
    <div class="box">
       <form id="signup-form" @submit.prevent="addUser">
  
      <div class="field">
        <label class="label">Username </label><br>
        <input type="text" class="input" v-model="userName" name="userName" required>
      </div>

      <div class="field">
        <label class="label">Email ID </label><br>
        <input type="email" class="input" v-model="email" name="email" required>
      </div>

      <div class="field">
        <label class="label">Password </label><br>
        <input type="password" class="input" v-model="password" name="password" required>
      </div>

      <div class="field">
        <label class="label">Confirm Password </label><br>
        <input type="password" class="input" name="password_confirmation">
      </div>
 <br>
      <!-- submit button -->
      <div class="field has-text-right">
        <button type="submit" class="button is-danger">Submit</button><br>
       <br> <router-link to="/login">Login |</router-link>
         <router-link to="/about"> About</router-link>
      </div>
      <!-- ERRORS -->
    <!-- <div class="alert alert-danger" v-show="errors.any()">
      <div v-if="errors.has('password')">
        {{ errors.first('password') }}
      </div>
      <div v-if="errors.has('password_confirmation')">
        {{ errors.first('password_confirmation') }}
      </div>
    </div> -->
    </form>
    </div>
  </div>
 
</template>

<script>
import Header from './Header.vue'
import { uuid } from "vue-uuid";
// import VeeValidate from "vee-validate";


export default {
  name: 'Registration',
  components:{Header},
  props: {
    msg: String
  },
  data(){
    return{
      userName:"",
      email:"",
      password:""
    
    }
  },
  methods: {
    addUser(){
      const newTodoObj = {
            id: uuid.v1(),
            userName: this.userName,
            email: this.email,
            password:this.password
          };
    // localStorage.setItem('users',JSON.stringify())
    // localStorage.getItem('abc','ff5')
    // localStorage.removeItem('abc','ff5')
    localStorage.setItem(newTodoObj.id,JSON.stringify())
    localStorage.setItem(newTodoObj.userName,JSON.stringify())
    localStorage.setItem(newTodoObj.email,JSON.stringify())
    localStorage.setItem(newTodoObj.password,JSON.stringify())
    // localStorage.setItem(newTodoObj.id,newTodoObj.userName,newTodoObj.email,newTodoObj.password,JSON.stringify())
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
