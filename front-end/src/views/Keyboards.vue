<template>
  <div>

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