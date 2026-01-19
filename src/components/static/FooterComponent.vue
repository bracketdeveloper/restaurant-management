<script>

export default {
  name: "FooterComponent",
  data() {
    return {
      'currentYear': new Date().getFullYear()
    }
  }
}
</script>

<template>
  <div class="container bg-dark text-white">
    <footer class="py-3 my-4 text-white">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3 text-white">
        <li class="nav-item"><router-link to="/"  class="no-underline"><span class="nav-link px-2 text-white">Home</span></router-link></li>
        <li class="nav-item"><router-link to="/add-restaurant"  class="no-underline"><span class="nav-link px-2 text-white">Add Restaurant</span></router-link></li>
        <li class="nav-item"><router-link to="/users"  class="no-underline"><span class="nav-link px-2 text-white">Users</span></router-link></li>
        <li class="nav-item"><router-link to="/about-us"  class="no-underline"><span class="nav-link px-2 text-white">About Us</span></router-link></li>
        <li class="nav-item"><router-link to="/contact-us"  class="no-underline"><span class="nav-link px-2 text-white">Contact Us</span></router-link></li>
        <li class="nav-item"><router-link to="/faqs"  class="no-underline"><span class="nav-link px-2 text-white">FAQs</span></router-link></li>
      </ul>
      <p class="text-center text-white">© {{ currentYear }} Company, Inc</p></footer>
  </div>
</template>

<style scoped>

</style>