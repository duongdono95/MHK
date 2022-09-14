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
            <li class="range__item"><h1><i>01</i></h1></li>
            <li class="range__item hr"><hr></li>
            <li class="range__item"><h2>Keyboards</h2></li>
            <li class="range__item paragraph"><strong>Speed. Accuracy. Durability.</strong> Gaming keyboards are designed with the technology and materials required for high performance gaming.</li>
          </ul>
          </div>
          <div class="range__button">
            <RouterLink class="nav__item" to="/keyboards">Keyboards</RouterLink>
          </div>
        </div>
      </div>
      <div class="range__category reverse">
        <div class="range__text">
          <div>
            <ul class="range__list">
            <li class="range__item"><h1><i>02</i></h1></li>
            <li class="range__item hr"><hr></li>
            <li class="range__item"><h2>Headphones</h2></li>
            <li class="range__item paragraph"><strong>Immersive. Surround Sound. Comfortable</strong> Take your gaming experience to the next level with a quality gaming headset from our massive selection of headsets.</li>
          </ul>
          </div>
          <div class="range__button">
            <RouterLink class="nav__item" to="/headphones">Headphones</RouterLink>
          </div>
        </div>
        <div class="range__image">
          <img src="../assets/character/cat-headphone.png" alt="">
        </div>
      </div>
      <div class="range__category">
        <div class="range__image">
          <img src="../assets/character/mouse-mice.png" alt="">
        </div>
        <div class="range__text">
          <div>
            <ul class="range__list">
            <li class="range__item"><h1><i>03</i></h1></li>
            <li class="range__item hr"><hr></li>
            <li class="range__item"><h2>Mice</h2></li>
            <li class="range__item paragraph"><strong>Ergonomic. Versatile. Wireless or Wired</strong> With a huge range of mice, we are sure you will find a mouse to suit your and size and preferred grip type.</li>
          </ul>
          </div>
          <div class="range__button">
            <RouterLink class="nav__item" to="/mice">Mice</RouterLink>
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
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
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
  filter: brightness(80%);
}

.banner__text{
  display: flex;
  width: 900px;
  height: 400px;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  font-size: 2rem;
}

.range__title{
  text-align: center;
  margin: 5em 0;
  bottom: 0;
}

.range__image img{
  width: 370px;
  height: 370px;
  object-fit: contain;
}

.range__category{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3em 0;
  gap: 1em;
}

.reverse{
  flex-wrap: wrap-reverse;
}

.range__text{
  border: 2px solid #C51EED;
  border-radius: 10px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 30px 10px rgba(225, 225, 225, 0.1);
}
.range__list{
  list-style: none;
  padding-left: 0;
  width: 330px;
}

.hr{
  width: 60px;
  height: 5px;
  background-color: white;
  margin: 1em 0;
}

.paragraph{
  margin: 1em 0;
}

.range__button a{
  text-decoration: none;
  color: white;
}

.range__button {
  padding: 10px 30px;
  font-weight: 700;
  border-radius: 10px;
  border: 2px solid #1095C9;
  text-align: center;
}
.range__button:hover {
  background: -webkit-linear-gradient(to right, #1095C9, #C51EED);
  background: linear-gradient(to right, #1095C9, #C51EED);
  border: 2px solid white;
  box-shadow: 0 0  10px 5px rgba(225, 225, 225, 0.2) ;
}
</style>