<template>
    <div class="background__container">
      <!-- <div class="contact_seller__container">
        <p class="seller__name">{{productData.sellerName}}</p>
        <div class="detail__group">
          <p class="label">Email:</p>
          <p class="info">{{productData.sellerName}}@gmail.com</p>
        </div>
        <div class="detail__group">
          <p class="label">Phone:</p>
          <p class="info">022 507 5847</p>
        </div>
      </div> -->
      <div class="details__container">
       <div class="image__container">
           <img class="img" :src="productData.photoUrl" alt="Photo">
       </div>
       <div class="product__detail">
          <div class="detail__group_first">
            <p class="name">{{productData.productName}}</p>
            <p class="date">{{productData.updatedAt}}</p>
          </div>
          <div class="detail__group">
            <p class="label">Seller Name: </p>
            <p class="info location">{{productData.sellerName}}</p>
          </div>
          <div class="detail__group">
            <p class="label">Condition: </p>
            <p class="info location">{{productData.condition}}</p>
          </div>
          <div class="detail__group">
            <p class="label">Stock: </p>
            <p class="info bio">{{productData.stock}}</p>
          </div>
          <div class="detail__group">
            <p class="label">Price: </p>
            <p class="info bio">${{productData.price}}.00</p>
          </div>
          <div class="detail__group">
            <p class="label">Description: </p>
            <p class="info location">{{productData.description}}</p>
          </div>
          <button  class="product__button" type="button">Contact Seller</button>
        </div>
    </div>
    </div>
      <p class="listing__title">Related Products</p>
      <div class="listing__container">
        <RelatedProducts v-for="product of relatedListingArray " :productData = product :key = "product._id"/>
      </div>
      <div class="comments__section">
        <p class="listing__title">Comments</p>
        <div class="comment__container">
          <div class="comment__item">
            <div class="avatar">
              <img src="" alt="">
            </div>
          </div>
        </div>
      </div>
    <Footer />
  </template>
  
  <script>
    import RelatedProducts from "../components/RelatedProducts.vue"
    import YourListings from "../components/YourListings.vue"
    import Footer from "../components/Footer.vue";
    export default {
      components : {
        Footer,
        YourListings,
        RelatedProducts
      },
      data () {
        return {
          productData: {},
          productsArray: [],
          relatedListingArray: []
        }
      },
      methods: {
        async getProductData() {
          const response = await fetch(`http://localhost:3000/all-listings/${this.$route.params.id}`);
          const data = await response.json();
          this.productData = data;
          console.log(this.productData);
          this.getRelatedProductArray();

        },
        async getRelatedProductArray() {
          const response = await fetch(`http://localhost:3000/${this.productData.category}`);
          const data = await response.json();
          this.productsArray = data;
          console.log(this.productsArray);
          this.relatedProduct();
        },
        relatedProduct() {
          const listingId = this.productData._id;
          console.log(listingId)
          const rawArray = this.productsArray;  
          const reducedLengthArray = rawArray.filter(function(item) {
            return item._id !== listingId;
          });
          const shuffled = reducedLengthArray.sort(()=> 0.5 - Math.random());
          const threeRelatedListing = shuffled.slice(0, 3);
          this.relatedListingArray = threeRelatedListing;
        }
      },
      mounted(){
        this.getProductData();

      }
    }
  </script>
  
  <style scoped>
    .background__container {
      margin-top: 30px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4)
    }
    .contact_seller__container {
      color: white;
    }
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
    /* max-height: 50vh; */
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
  .date {
    font-size:14px;
    color: rgba(255, 255, 255, 0.523);
  }
  .name {
    font-size: 32px;
    font-weight: 700;
    margin: 0;
  }
  .detail__group_first {
    display: flex;
    flex-direction: column;
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
    text-transform: capitalize;
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
  border: 2px solid white;
  box-shadow: 0 0  10px 5px rgba(225, 225, 225, 0.2) ;
}
  </style>
  