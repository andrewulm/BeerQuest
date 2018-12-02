<template>
  <div class="content">
    <div class="container text-center">
      <h2>Login</h2>
      <hr/>
      <form>
        <label for="email" >E-Mail Address</label>
        <div>
          <input id="email" type="email" v-model="email" required autofocus>
        </div>
        <div>
          <label for="password" >Password</label>
          <div>
            <input id="password" type="password" v-model="password" required>
          </div>
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
  name: 'Login'
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
