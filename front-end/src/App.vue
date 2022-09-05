<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/keyboards">Keyboards</RouterLink>
      <RouterLink to="/headphones">Headphones</RouterLink>
      <RouterLink to="/mice">Mice</RouterLink>
      <RouterLink to="/listing">Listing</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>