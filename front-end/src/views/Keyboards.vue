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

/* product css */
.product {
  width: 400px;
  border: 2px solid #C51EED;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto 50px auto;
  box-shadow: 0 0  30px 10px rgba(225, 225, 225, 0.1) ;
}
.image__container {
  width: 100%;
  height: 350px;
}
.img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;

}
.product__name {
  color: white;
  font-size: 28px;
  font-weight: 400;
  margin: 0;
}
.seller__name {
  font-size: 20px;
  color: white;
  margin: 0;
  font-weight: 300;
}
.price {
  color: white;
  font-size: 36px;
  font-weight: 700px;
  margin: 0;
}
.product__button {
  width: 100%;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  border: 2px solid #1095C9;
  background-color: transparent;
  color: white;
}
.product__button:hover {
  background: -webkit-linear-gradient(to right, #1095C9, #C51EED);
  background: linear-gradient(to right, #1095C9, #C51EED);
  border: 2px solid transparent;
  box-shadow: 0 0  10px 5px rgba(225, 225, 225, 0.2) ;
}
</style>