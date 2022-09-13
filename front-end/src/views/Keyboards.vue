<template>
  <div>
    <div class="banner__container"></div>
    <p class="intro">Current Lisitings</p>
    <div class="products_list">
      <Product v-for = "product of productsArray" :productData = product :key = "product._id" />
    </div>
  </div>
  <Footer />
</template>

<script>
  import Product from '../components/Product.vue';
  import Footer from '../components/Footer.vue';
  export default {
    components: {
      Footer,
      Product
    },
    data() {
      return {
        productsArray: []
      }
    },
    methods: {
      async getAllListings() {
        const response = await fetch('http://localhost:3000/all-listings');
        const data = await response.json();
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
.banner__container {
  margin-top: 3%;
  height: 400px;
  width: 100%;
  background-image: url(../assets/Keyboard-Banner.png);
  background-size: cover;
}
.intro {
  color: white;
  font-size: 36px;
  font-weight : 700;
  text-align: center;
  margin: 50px 0 30px 0;
}

.products_list {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>