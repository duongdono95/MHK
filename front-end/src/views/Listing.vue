<template>
    <div class="container">
        <div class="listing">
            <p class="intro">Product details</p>
        </div>
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
            <div class="form__group">
                <label for="condition">Condition:</label>
                <button class="condition">Used</button>
                <button class="condition">Brand New</button>
            </div>
            <div class="form__group">
                <label for="category">Category:</label>
                <button class="category">Keyboards</button>
                <button class="category">Headphones</button>
                <button class="category">Mice</button>
            </div>
            <div class="form__group">
                <label for="stock">Stock:</label>
                <input id="stock" class="form__element" type="number">
            </div>
        </form>
        <Footer/>
    </div>

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
</style>