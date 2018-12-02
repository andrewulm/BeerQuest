<template>
  <div class="content">
    <div class="container text-center">
      <h2>Register</h2>
      <hr/>
      <form>
        <label for="name">Name</label>
        <div>
          <input id="name" type="text" v-model="name" required autofocus>
        </div>

        <label for="email" >E-Mail Address</label>
        <div>
          <input id="email" type="email" v-model="email" required>
        </div>

        <label for="password">Password</label>
        <div>
          <input id="password" type="password" v-model="password" required>
        </div>

        <label for="password-confirm">Confirm Password</label>
        <div>
          <input id="password-confirm" type="password" v-model="password_confirmation" required>
        </div>

        <div>
          <input type="submit" @click="handleSubmit">

        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style lang="scss" scoped>
  form {
    input {
      width: 80%;
      border: 1px #ccc solid;
      border-radius: 6px;
      padding: 10px;
    }

    input[type="submit"] {
      margin-top: 20px;
      background: #F0C030;
      color: #fff;
      font-weight: bold;

      &:hover {
        cursor: pointer;
        background: darken(#F0C030, 10%);
      }
    }

    .form-control {
    }
  }
</style>
