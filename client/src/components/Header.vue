<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">BeerQuest</router-link>

    <div class="ml-auto">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/login">
            <button class="bq-btn login">Login</button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register">
            <button class="bq-btn sign-up">Sign Up</button>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  nav {
    border-bottom: 8px #F0C030 solid;
    padding: 20px;
    box-shadow: 0 3px 3px rgba(0,0,0,0.5);

    .navbar-nav {
      display: inline;
      .nav-item {
        display: inline;
      }
    }
  }

  .bq-btn {
    border-radius: 6px;
    padding: 5px 15px;
    color: #fff;
    border: none;
    margin: 5px;

    &:hover {
      cursor: pointer;
    }
  }

  .login {
    background: #D89018;
    &:hover {
      background: darken(#D89018, 10%);
    }
  }

  .sign-up {
    background: #F0C030;
    &:hover {
      background: darken(#F0C030, 10%);
    }
  }
</style>
