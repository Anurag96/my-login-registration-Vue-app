<template>
  <div>
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

}
</script>

<style>

</style>