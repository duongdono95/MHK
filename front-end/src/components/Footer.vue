<template>
<div class="footer">
      <div class="brand__container">
      <p class="footer__title">Brand</p>
      <div class="brands">
        <div class="brand__list">
        <p class="brand__item">B-TECH</p>
        <p class="brand__item">BC TECH</p>
      </div>
      <div class="brand__list">
        <p class="brand__item">ALIEN</p>
        <p class="brand__item">TECHNOLOGY</p>
      </div>
      <div class="brand__list">
        <p class="brand__item">Apple</p>
        <p class="brand__item">Samsung</p>
      </div>
      </div>
    </div>
    <div class="contactUs__container">
      <p class="footer__title">Contact Us</p>
      <div class="contactUs__list">
        <div class="contactUs__item">
        <p class="title">Address</p>
        <p class="info">7107 Juniper Road Fairview, TN 37062</p>
      </div>
      <div class="contactUs__item">
        <p class="title">Phone</p>
        <p class="info">022 507 584xx</p>
      </div>
      <div class="contactUs__item">
        <p class="title">Email</p>
        <p class="info">mhk@gmail.com</p>
      </div>
      </div>
    </div>
    <div class="socialMedia__container">
      <p class="footer__title">Social Media</p>
      <ul>
        <li class="socialMedia__item"><i class="fa-brands fa-facebook"></i></li>
        <li class="socialMedia__item"><i class="fa-brands fa-square-instagram"></i></li>
        <li class="socialMedia__item"><i class="fa-brands fa-square-twitter"></i></li>
        <li class="socialMedia__item"><i class="fa-brands fa-square-youtube"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
footer {
  background-color: rgba(255, 255, 255, 0.1);
}

.footer {
  padding: 0 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  font-size: 16px;
  font-weight: 300;
  gap: 10%;
  margin: 0 auto;
}
.footer__title {
  font-size: 24px;
  font-weight: 700;
}
.brand__container {
  flex-grow: 1;
}
.brands {
  display: flex;
  justify-content: space-between;
}
.contactUs__container {
  flex-grow: 2;
}
.contactUs__list{
  display: flex;
  justify-content: space-between;
}
.title {
  font-size : 12px;
  
}
.socialMedia__container {
  flex-grow: 1;
}
.socialMedia__container ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0
}
.socialMedia__item {
  font-size: 32px;
}
</style>