<template>
  <header class="header">
    <div class="heading">
      <div class="icons">
        <img src="./assets/nav-icons.svg" alt="icons">
      </div>
      <div class="logo">
        <img src="./assets/Logo.svg" alt="Logo">
      </div>
      <a href="/" type="button">Sign In</a>
    </div>
    <nav>
      <div class="nav--left">
        <RouterLink class="nav__item--home" to="/"><i class="fa-solid fa-house"></i></RouterLink>
        <RouterLink class="nav__item" to="/keyboards">Keyboards</RouterLink>
        <RouterLink class="nav__item" to="/headphones">Headphones</RouterLink>
        <RouterLink class="nav__item" to="/mice">Mice</RouterLink>
      </div>
      <div class="nav--right">
        <RouterLink class="listing" to="/listing">Create New Listing</RouterLink>
        <div class="line"></div>
        <p>+</p>
      </div>
    </nav>
  </header>
  <body>
    
  </body>
  <footer>
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
  </footer>
  <RouterView />
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.header {
  max-width :1400px;
  margin: 0 auto;
}
.heading {
  max-width :1400px;
  padding: 30px 0 30px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: white;
  align-items: center;
}
.heading a {
  padding: 10px 30px;
  font-size: 24px;
  color: white;
  text-decoration: none;
  background: #667eea;
  background: -webkit-linear-gradient(to right, #1095C9, #C51EED);
  background: linear-gradient(to right, #1095C9, #C51EED);
  border-radius: 10px;
}
nav {
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
}
.selected {
  color: #0A0635;
  background-color: white;
}
.nav--left {
  color: white;
  width: 40%;
  display: flex;
  justify-content: space-between;
}

.nav__item {
  color: white;
  text-decoration: none;
  font-size: 24px;
  padding: 10px 10px;
}
.nav__item:hover {
  background-color: rgba(225, 225, 225, 0.5);
  color: white ;
  border-radius: 5px;
}
.nav__item--home {
  color: white;
  text-decoration: none;
  font-size: 24px;
  padding: 10px 10px;
}
.nav__item--home:hover {
  background-color: rgba(225, 225, 225, 0.5);
  border-radius: 5px;
}

.nav--right {
  display: flex;
  color: #0A0635;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.708);
  border-radius: 5px;
}
.listing {
  font-size: 24px;
  text-decoration: none;
  color: #0A0635;
}
.line {
  height: 30px;
  width: 2px;
  background-color: #0A0635;
}
.nav--right p{
  font-size: 32px;
  margin: 0;
  color: #0A0635;
}
.nav--right:hover {
  background-color: rgba(225, 225, 225, 0.5)
}

/* FOOTER from here */
footer {
  background-color: rgba(255, 255, 255, 0.1);
}
.footer {
  margin: 0 auto;
  color: white;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  font-size: 16px;
  font-weight: 300;
  gap: 10%;
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