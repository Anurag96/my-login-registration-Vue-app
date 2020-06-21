<template>
  <div class="login">
    <div>
      <Header />
    </div>
    <h1>Login</h1>

    <div class="box">
      <form id="login-form" @submit.prevent="verifyUser">
        <!-- email -->
        <div class="field">
          <label class="label">Email/Username</label>
          <br />
          <input type="text" class="input" v-model="loginemail" required name="email" />
        </div>

        <div class="field">
          <label class="label">Password</label>
          <br />
          <input type="password" class="input" v-model="loginpassword" required name="password" />
        </div>

        <!-- submit button -->
        <div class="field has-text-right">
          <br />
          <button type="submit" class="button is-danger">Submit</button>
          <br />
          <br />
          <router-link to="/">Register</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
//import Registration from './Registration'

export default {
  name: "Login",
  components: {
    Header
  },
  data() {
    return {
      loginemail: "",
      loginpassword: ""
    };
  },
  mounted(){
    let activeUser = localStorage.getItem("loginUser");
    if(activeUser){
      this.$router.push('/about')
    }
  },
  methods: {
    verifyUser() {
      if (this.loginemail !== "" && this.loginpassword !== "") {
        let users = JSON.parse(localStorage.getItem("users"));
        let userExists = (users)?users.filter(user => user.email === this.loginemail || user.userName===this.loginemail):[];

        if (userExists.length) {
          if (userExists[0].password == this.loginpassword) {
            localStorage.setItem("loginUser", JSON.stringify(userExists[0]));
            console.log("success");
            this.$router.push('/about')
            
            
          } else {
            console.log("password doesn't match");
          }
        } else {
          console.log("Email doesn't exsits");
        }
      }
    }
  }
};
</script>