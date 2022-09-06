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
  <div class="body">

  </div>


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

.nav--left .active-link {
  color: #0A0635;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 0 0  50px 10px rgba(225, 225, 225, 0.2) ;
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
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
}
.nav--right .active-link {
  color: #0A0635;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 0 0  50px 10px rgba(225, 225, 225, 0.2) ;
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


</style>