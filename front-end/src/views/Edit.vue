<template>
    <div class="container">
        <p class="intro">Edit your Listing's details</p>
        <div class="body">
            <div class="image__container">
                <img :src="productData.photoUrl" alt="">
            </div>
            <div class="listing__container">
            <form class="form">
            <div class="form__group">
                <label for="seller">Seller:</label>
                <p>{{productData.sellerName}}</p>
            </div>
            <div class="form__group">
                <label for="product__name">Product name:</label>
                <input v-model="productName" id="product__name" class="form__element" type="text">
            </div>
            <div class="form__group">
                <label for="brand">Brand:</label>
                <input v-model="brand" id="brand" class="form__element" type="text">
            </div>
            <div class="form__group">
                <label for="photo_url">Photo URL:</label>
                <input v-model="photoUrl" id="photo_url" class="form__element" type="url">
            </div>
            <div class="form__group">
                <label for="condition">Condition:</label>
                <select class="input__selection" v-model="condition" name="condition" id="condition">
                    <option value="brandNew">Brand New</option>
                    <option value="used">Used</option>
                </select>
            </div>
            <div class="form__group">
                <label for="category">Category:</label>
                <select class="input__selection" v-model="category" name="category" id="category">
                    <option value="headphone">Headphone</option>
                    <option value="mouse">Mouse</option>
                    <option value="keyboard">Keyboard</option>
                </select>
            </div>
            <div class="form__group">
                <label for="stock">Stock:</label>
                <input v-model="stock" id="stock" class="form__element" type="number">
            </div>
            <div class="form__group">
                <label for="price">Price:</label>
                <input v-model="price" id="price" class="form__element" type="number" min="10"  step="any">
            </div>
            <div class="form__group">
                <label for="description">Descriptions:</label>
                <textarea v-model="description" id="description" class="description" type="number" cols="51" rows="2"> </textarea>
            </div>
        </form>
        <button @click="submitForm" class="submit__btn" type="button" >Update your Listing</button>
        </div>
        </div>
        
    </div>
    
    <Footer/>
</template>

<script>
    import Footer from '../components/Footer.vue'
    export default {
        components : {Footer},
        data() {
            return {
                productData :[],
                sellerName: null,
                productName: null,
                brand: null,
                photoUrl: null,
                condition: null,
                category: null,
                stock: null,
                price: null,
                description: null,
                
            }
        },
        methods: {
            async getProductData() {
                const response = await fetch(`http://localhost:3000/edit/${this.$route.params.id}`);
                const data = await response.json();
                this.productData = data;
                console.log(this.productData);
            },
            async submitForm() {
                const response = await fetch(`http://localhost:3000/edit/${this.$route.params.id}`, {
                    method: 'PUT',
                    headers: {'content-Type': 'application/json'},
                    body: JSON.stringify({
                        productName: this.productName,
                        brand: this.brand,
                        photoUrl: this.photoUrl,
                        condition: this.condition,
                        category: this.category,
                        stock: this.stock,
                        price: this.price,
                        description: this.description,
                    })
                });
                const data = await response.json();
                console.log(data)
            }
        },
        mounted(){
            this.getProductData();
    }
    };
    
</script>

<style scoped>
.container {
    color: white;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
.intro {
    font-size : 36px;
    font-weight : 700;
    text-align : center;
    margin-bottom: 2%;
}
.body {
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
    margin-bottom: 5%;
}
.image__container {
    flex-grow: 1;
    border-radius: 20px;
    max-height: 504px;
    margin: 0 auto;
    max-width: 700px;
}
.image__container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
.listing__container {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
}
.form {
    display: flex;
    flex-direction: column;
    width : 100%;
    margin : 0 auto 30px auto;
    gap: 15px;

}
.form__group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: white;
}
.form__group label{
    min-width : 22%;
}
.form__group input {
    flex: 1;
    min-width: 300px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 50px;
    color: white;
    padding: 10px 20px 10px 20px;
}
.description {
    flex: 1;
    min-width: 300px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    color: white;
    padding: 10px 20px 10px 20px;
}

.input__selection {
    min-width: 100px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 50px;
    color: white;
    padding: 0 20px 0 20px;
}
.submit__btn {
    padding: 10px 50px;
    border-radius: 5px;
    border: none;
    background: -webkit-linear-gradient(to right, #1095C9, #C51EED);
    background: linear-gradient(to right, #1095C9, #C51EED);
    color: white;
}
.submit__btn:hover {
    box-shadow: 0 0  10px 2px rgba(225, 225, 225, 0.2) ;
    border: 2px solid white;
}
</style>