<template>
  <div class="container">
    <h2>Top Rated Beers</h2>
    <hr/>

    <div class="d-flex flex-wrap">
      <div class="col-12 col-md-3 px-2 text-center">
        <div class="card">
          <div class="card-header">
            Beer Name
          </div>
          <div class="card-body">
            <div>
              <img src="https://via.placeholder.com/150" class="img-fluid">
            </div>
            <div>
              Beer Description
            </div>
          </div>
          <div class="card-footer">
            <fa-icon icon="star"/><fa-icon icon="star"/><fa-icon icon="star"/><fa-icon icon="star"/><fa-icon icon="star"/>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3 px-2 text-center">
        <div class="card">
          <div class="card-header">
            Beer Name
          </div>
          <div class="card-body">
            <div>
              <img src="https://via.placeholder.com/150" class="img-fluid">
            </div>
            <div>
              Beer Description
            </div>
          </div>
          <div class="card-footer">
            <fa-icon icon="star"/><fa-icon icon="star"/><fa-icon icon="star"/><fa-icon icon="star"/><fa-icon icon="star"/>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3 px-2 text-center">
        <div class="card">
          <div class="card-header">
            Beer Name
          </div>
          <div class="card-body">
            <div>
              <img src="https://via.placeholder.com/150" class="img-fluid">
            </div>
            <div>
              Beer Description
            </div>
          </div>
          <div class="card-footer">
            <fa-icon icon="star"/><fa-icon icon="star"/><fa-icon icon="star"/><fa-icon icon="star"/><fa-icon icon="star"/>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3 px-2 text-center">
        <div class="card">
          <div class="card-header">
            Beer Name
          </div>
          <div class="card-body">
            <div>
              <img src="https://via.placeholder.com/150" class="img-fluid">
            </div>
            <div>
              Beer Description
            </div>
          </div>
          <div class="card-footer">
            <fa-icon icon="star"/><fa-icon icon="star"/><fa-icon icon="star"/><fa-icon icon="star"/><fa-icon icon="star"/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBeers'
}
</script>

<style lang="scss" scoped>
  .container {
    padding: 40px;
  }

  .col-12 {
    padding: 0;
  }

  .card {
    border: none;
    width: 100%;
    margin-bottom: 20px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    transition: 1s;

    &:hover {
      transform: scale( 1.05 );
      transition: 1s;
    }

    .card-header {
      background: darken(#F0C030, 10%);
      color: #fff;
      font-weight: bold;
      border: none;
    }

    .card-footer {
      border: none;
    }
  }

</style>
