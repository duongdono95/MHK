<template>
  <div>
    <div class="banner__container"></div>
    <p class="intro">Current Lisitings</p>

    <button>View</button>
    <div class="products_list">
      <div class="product">
        <div class="image__container">
          <img class="img" src="http://vision.stanford.edu/aditya86/ImageNetDogs/images/n02106166-Border_collie/n02106166_1663.jpg" alt="product">
        </div>
        <p class="product__name">Keyboard 1</p>
        <p class="seller__name">Duong</p>
        <p class="price">$119</p>
        <button class="product__button" type="button">See More -></button>
    </div>
    </div>
  </div>
  <Footer />
</template>

<script>
  import Footer from '../components/Footer.vue';

  export default {
    components: {
      Footer
    },
    data() {
      return {
        productsArray: []
      }
    },
    methods: {
      async getAllListings() {
        const response = await fetch('/localhost:3000/all-listings');
        const data = await response.json();
        console.log(data);
        this.productsArray = data;
        console.log(this.productsArray);
      }
    },
    mounted(){
      this.getAllListings();
    }
  }
</script>

<style scoped>

</style>