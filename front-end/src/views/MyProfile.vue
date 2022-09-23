<template>
    <div class="background__container">
      <div class="details__container">
        <div class="confirmation__background" v-show="isShow">
              <div class="confirmation__container">
                  <p class="confirmation__title">Are you Sure that you want to DELETE {{this.productName}}?</p>
                  <div class="button__container">
                    <button @click="switchIsShow" class="cancel__btn">No</button>
                    <button @click="submitDeleteRequest" class="submit__btn">Yes</button>
                  </div>
              </div>
        </div>
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
            <p class="info bio">My name is Nick and I"m an avid gamer. I like showing newbies around the world of gaming and the equipment that would be good for them to start with. Check out my listings below!</p>
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
    </div>
      <p class="listing__title">Your Listings</p>
      <div class="listing__container">
        <YourListings @deleteProduct="deleteProduct" v-for="product of productsArray" :productData = product :key = "product._id"/>
    </div>
    <Footer />
  </template>
  
  <script>
    import YourListings from "../components/YourListings.vue"
    import Footer from "../components/Footer.vue";
    export default {
        components : { Footer, YourListings },
        data () {
          return {
            id : null,
            productsArray: [],
            isShow: false,
            productName : null,
          }
        },
        methods: {
          async getAllListings() {
          const response = await fetch("http://localhost:3000/MyProfile");
          const data = await response.json();
          this.productsArray = data;
          console.log(this.productsArray);
          },
          async deleteProduct(idAndName){
            const id = idAndName[0];
            const name = idAndName[1];
            this.productName = name;
            this.id = id;
            console.log(this.productName);


            this.isShow = true;
          },
          async submitDeleteRequest (id) {
            const response = await fetch (`http://localhost:3000/MyProfile/${this.id}`,{
              method:"DELETE"
            });
            const data = await response.text();
            this.isShow = false;
            this.getAllListings();
          },
          switchIsShow () {
                this.isShow = false;
            }
        },
    mounted(){
      this.getAllListings();
    }
    }
  </script>
  
  <style scoped>
  .confirmation__background {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
}

.confirmation__container {
    position: relative;
    background-color: rgb(35, 35, 35);
    color: rgb(255, 255, 255);
    margin: 0 auto;
    padding: 20px 50px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.confirmation__title {
    font-size: 24px;
    font-weight: 500;

}
.button__container {
  display: flex;
  gap: 100px;
}
.background__container {
  margin-top: 30px;
  display: flex;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
  .details__container {
    max-width : 1400px;
    margin: 0 auto 0 auto;
    display: flex;
    min-height: 50vh;
    height: 100%;
    flex-wrap: wrap;
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
    max-height: 450px;
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
    color: rgba(255, 255, 255, 0.7);
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
  .listing__container {
    margin: 30px auto 0 auto;
    max-width: 1400px;
    max-width: 1400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
  }
  .listing__title {
    color: white;
    font-size: 36px;
    font-weight: 700;
    width: 1400px;
    margin: 20px auto;
    padding-left: 15px;
  }
  .submit__btn {
    padding: 10px 50px;
    border-radius: 5px;
    border: none;
    background: -webkit-linear-gradient(to right, #1095C9, #C51EED);
    background: linear-gradient(to right, #1095C9, #C51EED);
    color: white;
    text-decoration: none;
}
.submit__btn:hover {
    box-shadow: 0 0  10px 2px rgba(225, 225, 225, 0.2) ;

}
  .cancel__btn {
    padding: 7px 50px;
    border-radius: 5px;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    text-decoration: none;
  }
  .cancel__btn:hover{
    box-shadow: 0 0  10px 2px rgba(225, 225, 225, 0.2) ;
    background-color: white;
    color: #333;
  }
  </style>
  