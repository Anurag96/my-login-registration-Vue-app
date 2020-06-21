<template>
  <div>
    <div>
      <Header />
    </div>
    <h1>Registration</h1>

    <div class="box">
      <form id="signup-form" @submit.prevent="addUser">
        <div class="field">
          <label>
            Username
            <span class="eshtrik">*</span>
          </label>
          <br />
          <input type="text"  class="input" v-model="userName" name="userName" required />
        </div>
        <span class="error" v-if="!validationArr.userName.valid">
          <label v-for="msg in validationArr.userName.msgs" :key="msg">{{msg}}</label>
        </span>
        <div class="field">
          <label>
            Email ID
            <span class="eshtrik">*</span>
          </label>
          <br />
          <input type="email" class="input" v-model="email" name="email" required />
          <br />
          <span class="error" v-if="!validationArr.email.valid">
            <label v-for="msg in validationArr.email.msgs" :key="msg">{{msg}}</label>
          </span>
        </div>

        <div class="field">
          <label>Password</label>
          <br />
          <input type="password" class="input" v-model="password" name="password" required />
        </div>

        <div class="field">
          <label>Confirm Password</label>
          <br />
          <input type="password" class="input" v-model="passwordconfirm" name="passwordconfirm" />
        </div>
        <br />

        <span class="error" v-if="!validationArr.passwordconfirm.valid">
          <label v-for="msg in validationArr.passwordconfirm.msgs" :key="msg">{{msg}}</label>
        </span>
        <!-- submit button -->
        <div class="field has-text-right">
          <button type="submit">Submit</button>
          <br />
          <br />
          <router-link to="/login">Login </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { uuid } from "vue-uuid";

export default {
  name: "Registration",
  components: { Header },
  props: {
    msg: String
  },
  data() {
    return {
      userName: "",
      email: "",
      passwordconfirm: "",
      password: "",
            validationArr: {
              userName: {
                valid: true,
                msgs: []
              },
              email: {
                valid: true,
                msgs: []
              },
              passwordconfirm: {
                valid: true,
                msgs: []
              }
      }
    };
  },
  methods: {
  addUser() {       
      let users = JSON.parse(localStorage.getItem("users"));
      let newTodoObj = [];
      for(let key in this.validationArr){
        this.validationArr[key]['valid']=true;
        this.validationArr[key]['msgs']=[];
      }

      if (users) {
        var isValidate = true;
        let emailExists = users.filter(user => user.email == this.email);
        let userExists = users.filter(user => user.userName == this.userName);
   
        if (emailExists.length) {
          this.validationArr.email.valid = false;
          this.validationArr.email.msgs = ["Email already exsits"];
          isValidate =  false;
        }  if (userExists.length) {
          this.validationArr.userName.valid = false;
          this.validationArr.userName.msgs = ["User already exsits"];
          isValidate = false;
        }  if (this.password!=='' && this.passwordconfirm!=='' && this.password !== this.passwordconfirm) {
          this.validationArr.passwordconfirm.valid = false;
          this.validationArr.passwordconfirm.msgs = ["Password doesnt match"];
          isValidate = false;
        } 

        if(isValidate) {
          users.push({
            id: uuid.v1(),
            userName: this.userName,
            email: this.email,
            password: this.password
          });
          newTodoObj = users;
        } else{
          return false
        }

      } else {
        newTodoObj = [
          {
            id: uuid.v1(),
            userName: this.userName,
            email: this.email,
            password: this.password
          }
        ];
      }

      localStorage.setItem("users", JSON.stringify(newTodoObj));

      this.userName = "";
      this.email = "";
      this.passwordconfirm = "";
      this.password = "";
      
    }
  }
};
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

span.error {
  color: red;
  font-size: 14px;
}
span.eshtrik {
  color: red;
}
</style>
