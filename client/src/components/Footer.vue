<template>
  <footer class="footer">
    <div class="container d-flex">
      <div class="col-md-6">
        <h3>BeerQuest</h3>
        <span>Find your perfect beer</span>
      </div>
      <div class="col-md-3">
        <ul>
          <li>Search Beers</li>
          <li>Top Beers</li>
          <li>Beer Categories</li>
        </ul>
      </div>
      <div class="col-md-3">
        <ul>
          <li>Login</li>
          <li>Sign Up</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <div class="sub-footer">
      <div class="container">
        Made with <fa-icon icon="heart"/> by Andrew, Cody, Eki & Tim
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  .footer {
    background: #343a40;
    color: #fff;
    border-top: 8px #F0C030 solid;
    padding-top: 30px;

    h3 {
      color: #F0C030;
    }

    ul {
      list-style: none;
    }

    .sub-footer {
      width: 100%;
      padding: 10px;
      position: absolute;
      bottom: 0;
      background: #000;

      svg {
        color: red;
      }
    }
  }
</style>
