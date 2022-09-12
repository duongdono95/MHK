<template>
  <div>
    <div class="banner__container">
      <h2 class="banner__text" >The one stop marketplace for keyboards, mice and headphones</h2>
    </div>
    <h2>hello</h2>
    <h2>hello</h2>
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
    overflow: hidden;
  }
.banner__container {
  margin-top: 3%;
  height: 400px;
  width: 100%;
  background-image: url(../assets/Keyboard-Banner.png);
  background-size: cover;
}

.banner__text{
  color: white;
  width: 500px;
  text-align: center;
}
</style>