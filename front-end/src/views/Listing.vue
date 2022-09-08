<template>
    <div class="container">
        <div class="listing__container">
            <p class="intro">Product details</p>
            <form class="form">
            <div class="form__group">
                <label for="seller">Seller:</label>
                <input id="seller" class="form__element" type="text">
            </div>
            <div class="form__group">
                <label for="product__name">Product name:</label>
                <input id="product__name" class="form__element" type="text">
            </div>
            <div class="form__group">
                <label for="brand">Brand:</label>
                <input id="brand" class="form__element" type="text">
            </div>
            <div class="form__group">
                <label for="photo_url">Photo URL:</label>
                <input id="photo_url" class="form__element" type="url">
            </div>
            <div class="form__group__radio">
                <p class="from__tittle">Condition:</p>
                <div class="input__group">
                    <input id="used" type="radio" value="used"><label for="used">Used</label>
                </div>
                <div class="input__group">
                    <input id="brandNew" type="radio" value="brandNew"><label for="brandNew">Brand New</label>
                </div>
            </div>
            <div class="form__group__radio">
                <p class="from__tittle">Category:</p>
                <div class="input__group">
                    <input id="keyboard" type="radio" value="keyboard"><label for="keyboard">Keyboard</label>
                </div>
                <div class="input__group">
                    <input id="mice" type="radio" value="mice"><label for="mice">Mice</label>
                </div>
                <div class="input__group">
                    <input id="headphone" type="radio" value="headphone"><label for="headphone">Headphone</label>
                </div>
               
                    
            </div>
            <div class="form__group">
                <label for="stock">Stock:</label>
                <input id="stock" class="form__element" type="number">
            </div>
        </form>
        </div>
    </div>
    
    <Footer/>
</template>

<script>
    import Footer from '../components/Footer.vue'
    export default {
        components : {Footer}
    }
</script>

<style scoped>
.container {
    color: white;
    max-width: 1400px;
    margin: 0 auto;
}
.intro {
    font-size : 36px;
    font-weight : 700;
    text-align : center;
    margin-bottom: 5%;
}
.listing__container {
    height: 66.5vh;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.form {
    display: flex;
    flex-direction: column;
    width : 40%;
    margin : 0 auto;
    gap: 20px;
}
.form__group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.form__group label{
    min-width : 30%;
}
.form__group input {
    flex: 1;
    min-width: 300px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 50px;
}
.form__group__radio {
    display: flex;
    margin-bottom: 2%;
    align-items: center;
    flex-wrap: wrap;
}
.form__group__radio label{
   font-size: 20px;
   font-weight: 500;
}
.form__group__radio p {
    margin: 0;
    min-width: 30%;
}
.input__group {
    margin-right: 4.5%;
    flex-wrap: wrap;
}
</style>