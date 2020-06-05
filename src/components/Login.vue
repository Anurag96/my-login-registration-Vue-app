<template>
 <div class="login">
    <h1>Login</h1>
    
    <div class="box">
       <form id="login-form">
      <!-- name -->
      <div class="field">
        <label class="label">User Name : </label>
        <input type="text" class="input" name="userName">
      </div>

      <!-- email -->
      <div class="field">
        <label class="label">Email : </label>
        <input type="email" class="input" name="email">
      </div>

      <div class="field">
        <label class="label">Password : </label>
        <input type="password" class="input" name="password">
      </div>

      <div class="field">
        <label class="label">Confirm Password : </label>
        <input type="password" class="input" name="confirmPassword">
      </div>

      <!-- submit button -->
      <div class="field has-text-right">
        <button type="submit" class="button is-danger">Submit</button>
      </div>
    </form>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>