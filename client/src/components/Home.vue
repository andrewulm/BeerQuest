<template>
  <div>
    <div class="hero">
      <div class="hero-overlay">
        <div class="hero-search">
          <h2>Start Your Quest!</h2>
          <form class="d-flex flex-wrap justify-content-center">
            <div class="beer-input">
              <input type="text" placeholder="Enter name of beer...">
            </div>
            <div class="beer-submit">
              <input type="submit">
            </div>
          </form>
        </div>
      </div>
    </div>
    <TopBeers></TopBeers>
    <TopBeersCategory></TopBeersCategory>
  </div>
</template>

<script>
import TopBeers from './TopBeers'
import TopBeersCategory from './TopBeersCategory'

export default {
  name: 'homepage',
  components: { TopBeers, TopBeersCategory }
}
</script>

<style lang="scss" scoped>
  .hero {
    height: 80vh;
    background: url('http://glass.style/wp-content/uploads/2018/04/craft-beer-dunellen-hotel.jpg') no-repeat center;
    background-size: cover;

    .hero-overlay {
      height: 80vh;
      background: rgba(0,0,0, 0.65);
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 8px #F0C030 solid;

      .hero-search {
        background: #fff;
        border-radius: 6px;
        padding: 20px;
        flex-basis: 90%;

        form {
          .beer-input {
            flex-basis: 100%;

            input {
              width: 100%;
              padding: 10px;
              border-radius: 6px;
              border: 1px #ccc solid;
            }
          }

          .beer-submit {
            flex-basis: 60%;

            input {
              width: 100%;
              border-radius: 6px;
              margin-top: 10px;
              padding: 10px;
              border: none;
              background: #F0C030;
              color: #fff;

              &:hover {
                cursor: pointer;
                background: darken(#F0C030, 5%)
              }
            }
          }
        }

        .col-12 {
          padding: 0;
        }

        @media (min-width: 768px) {
          flex-basis: 60%;

          form {
            .beer-submit {
              flex-basis: 40%;
            }
          }
        }

        @media (min-width: 1170px) {
          flex-basis: 40%;

          form {
            .beer-submit {
              flex-basis: 40%;
            }
          }
        }
      }
    }
  }
</style>
