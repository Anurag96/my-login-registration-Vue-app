<template>
  <div class="registration">
    <h1>{{ msg }}</h1>
    <h1>Registration</h1>
        <div>
        <h2>User Name</h2>
        <input type="text" v-model="userName" />
      </div>

      <div>
        <h2>Email</h2>
        <input type="text" v-model="email" />
      </div>
        <div>
        <h2>Password</h2>
        <input type="text" v-model="password" />
      </div>
        <div>
        <h2>Confirm Password</h2>
        <input type="text" v-model="confirmPassword" />
      </div>

      <div>
        <h2>Submit</h2>
        <input type="submit" value="Submit" v-on:click="submit" />
      </div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
</style>
