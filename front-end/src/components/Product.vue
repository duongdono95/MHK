<template>
    <div class="product">
        <div class="image__container">
          <img class="img" src="http://vision.stanford.edu/aditya86/ImageNetDogs/images/n02106166-Border_collie/n02106166_1663.jpg" alt="product">
        </div>
        <p class="product__name">Keyboard 1</p>
        <p class="seller__name">Duong</p>
        <p class="price">$119</p>
        <button class="product__button" type="button">See More -></button>
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
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