<template>
  <div class="body">
    <div class="banner__container">
      <h2 class="banner__text" >The one stop marketplace for keyboards, mice and headphones.</h2>
    </div>
    <div class="range__container">
      <div class="range__title">
        <h2>Post and Sell or Buy</h2>
      </div>
      <div class="range__category">
        <div class="range__image">
          <img src="../assets/character/dog-keyboard.png" alt="">
        </div>
        <div class="range__text">
          <div>
            <ul class="range__list">
            <li class="range__item"><h1>01</h1></li>
            <li class="range__item hr"><hr></li>
            <li class="range__item"><h2>Keyboards</h2></li>
            <li class="range__item"><strong>Speed. Accuracy. Durability.</strong> Gaming keyboards are designed with the technology and materials required for high performance gaming.</li>
          </ul>
          </div>
          <div>
            <p>Keyboards</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
  import Footer from '../components/Footer.vue';

  export default {
  components: {Footer}
  }
</script>

<style scoped>
  .body{
    overflow: hidden;
    color: white;
  }
.banner__container {
  margin-top: 3%;
  height: 400px;
  width: 100%;
  background-image: url(../assets/Keyboard-Banner.png);
  background-size: cover;
}

.banner__text{
  width: 500px;
  text-align: center;
  margin: auto;
  vertical-align: middle;
}

.range__title{
  text-align: center;
}

.range__image{
  border: 1px solid white;
}

.range__image img{
  width: 400px;
  height: 400px;
  object-fit: contain;
}

.range__category{
  display: flex;
}

.range__text{
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.range__list{
  list-style: none;
  padding-left: 0;
  width: 300px;
}

.hr{
  width: 50px;
}
</style>