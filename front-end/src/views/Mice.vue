<template>
  <div>
    <div class="banner__container"></div>
    <p class="intro">Current Lisitings</p>
    <div class="brand__container">
      <div @click="triggleBrandArray" class="icon__container">
        <i class="fa-solid fa-filter"></i>
        <p class="icon__title">Filter</p>
      </div>
      <ul class="brand__group" v-show="isShow">
        <li @click="filterFunction(brand)" class="brand__item" v-for="brand of brandsArray" :key="brand">{{brand}}</li>
      </ul>
    </div>
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
        productsArray: [],
        brandsArray: [],
        isShow: false,
      }
    },
    methods: {
      async getAllListings() {
        const response = await fetch('http://localhost:3000/mouse');
        const data = await response.json();
        this.productsArray = data;
        console.log(this.productsArray);
        this.getBrandsArray();
      },
      getBrandsArray(){
        const originalArray = this.productsArray;
        const newArray = originalArray.map(item => {
          return item.brand
        })
        const reducedDuplicatesArray = [...new Set(newArray)]
        this.brandsArray = reducedDuplicatesArray;
        console.log(this.brandsArray)
      },
      triggleBrandArray () {
        this.isShow = !this.isShow
      },
      filterFunction(brand) {
        // const newListingsArray = this.productsArray.filter(item => item.brand === brand);
        // console.log (newListingsArray)
        // this.productsArray = newListingsArray;
        const originalArray = this.productsArray;
        const filteredArray = originalArray.filter (item => item.brand === brand)
        return this.productsArray = filteredArray;
      },
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
  color: #333;
  font-size: 36px;
  font-weight : 700;
  text-align: center;
  padding: 30px 0 30px 0;
  background-color: white;
  margin: 0;
}

.products_list {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.brand__container {
  max-width: 1340px;
  display: flex;
  margin: 30px auto;
  align-items: center;
  gap: 30px;
}
.icon__container {
  display: flex;
  margin: 0 auto;
  color: white;
  font-size: 32px;
  gap: 15px;
  align-items: center;
  padding: 15px 20px 15px 20px;
  background: -webkit-linear-gradient(to right, #1095C9, #C51EED);
  background: linear-gradient(to right, #1095C9, #C51EED);
  border-radius: 10px;
}
.icon__container:hover {
    border: 2px solid white;
    box-shadow: 0 0  10px 5px rgba(225, 225, 225, 0.2) ;
  }
.icon__title {
  margin: 0;
}
.brand__group {
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  color: white;
  font-size: 24px;
  justify-content: space-between;
}
.brand__item {
  border-radius: 10px;
  text-align: center;
  min-width: 15%;
  padding: 20px;
  border: 2px solid white;
  margin: 0 auto;
}
.brand__item:hover {
  box-shadow: 0 0  10px 5px rgba(225, 225, 225, 0.2) ;
  background-color: white;
  color: #333;
}
</style>