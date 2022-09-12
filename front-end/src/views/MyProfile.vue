<template>
    <div class="details__container">
       <div class="image__container">
           <img class="img" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="Photo">
       </div>
       <div class="product__detail">
          <div class="detail__group_first">
            <p class="label">Name: </p>
            <p class="info middle">Nick Furry</p>
            <button class="edit__btn">Edit</button>
          </div>
          <div class="detail__group">
            <p class="label">Age: </p>
            <p class="info location">25 </p>
          </div>
          <div class="detail__group">
            <p class="label">Location: </p>
            <p class="info location">Auckland</p>
          </div>
          <div class="detail__group">
            <p class="label">Bio: </p>
            <p class="info bio">My name is Nick and I'm an avid gamer. I like showing newbies around the world of gaming and the equipment that would be good for them to start with. Check out my listings below!</p>
          </div>
          <div class="detail__group">
            <p class="label">Mobile number: </p>
            <p class="info name">022 507 58xx</p>
          </div>
          <div class="detail__group">
            <p class="label">Email: </p>
            <p class="info name">seller.mhk@gmail.com</p>
          </div>
          
           
           
           
       </div>
    </div>
    <Footer />
  </template>
  
  <script>
    import Footer from '../components/Footer.vue';
    export default {
        components : {Footer},
        data () {
          return {
            
          }
        }
    }
  </script>
  
  <style scoped>
  .details__container {
    width: 100%;
    max-width : 1400px;
    margin: 0 auto;
    display: flex;
    min-height: 50vh;
    height: 100%;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-between;
  }
  .product__detail {
    max-width: 50%;
    max-height: 50vh;
    color: #fff;
    flex-grow: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .image__container {
    max-width: 50%;
    flex-grow: 1;
    padding: 20px;
    border-radius: 20px;
  }
  .img {
    width: 100%;
    max-height: 300px;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
  .detail__group_first {
    display: flex;
  }
  .detail__group {
    display: flex;
  }
  .label{
    min-width: 25%;
    font-size: 20px;
    margin: 0;
    padding-top: 10px;
  }
  .info {
    font-size: 32px;
    margin: 0;
  }
  .bio {
    padding-top: 10px;
    font-size: 20px;
  }
  .location {
    padding-top: 10px;
    font-size: 20px;
  }
  .middle {
    padding-top: 10px;
    font-size: 20px;
    flex-grow: 1;
  }
  .edit__btn {
    font-size: 20px;
    color: #fff;
    background-color: transparent;
    border: 2px solid #fff;
    padding: 10px;
    border-radius: 5px;
  }
  .edit__btn:hover {
    background: -webkit-linear-gradient(to right, #1095C9, #C51EED);
    background: linear-gradient(to right, #1095C9, #C51EED);
    border: 2px solid white;
    box-shadow: 0 0  10px 5px rgba(225, 225, 225, 0.2) ;
  }
  </style>
  