<script>
import {signOut} from "@/components/functions";

export default {
  name: "HeaderComponent",
  data(){
    return {
      isLogin: false
    }
  },
  methods:{
    signInHandler() {
      signOut(this)
    }
  },
  mounted() {
    this.isLogin = !!localStorage.getItem("user-info")
    let isStop = true
    if(isStop) {
      setInterval(() => {
        this.isLogin = !!localStorage.getItem("user-info")
      }, 500) // checks every 0.5s
    }
  }
}
</script>

<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li class="nav-item"><router-link to="/"  class="no-underline"><span class="nav-link px-2 text-white">Home</span></router-link></li>
          <li class="nav-item"><router-link to="/add-restaurant"  class="no-underline"><span class="nav-link px-2 text-white">Add Restaurant</span></router-link></li>
          <li class="nav-item"><router-link to="/users"  class="no-underline"><span class="nav-link px-2 text-white">Users</span></router-link></li>
          <li class="nav-item"><router-link to="/about-us"  class="no-underline"><span class="nav-link px-2 text-white">About Us</span></router-link></li>
          <li class="nav-item"><router-link to="/contact-us"  class="no-underline"><span class="nav-link px-2 text-white">Contact Us</span></router-link></li>
          <li class="nav-item"><router-link to="/faqs"  class="no-underline"><span class="nav-link px-2 text-white">FAQs</span></router-link></li>
        </ul>
        <div v-if="isLogin" class="text-end">
          <button type="button" class="btn btn-danger" v-on:click="signInHandler()">Sign out</button>
        </div>

        <div v-else  class="text-end">
          <router-link to="/sign-in"><button type="button" class="btn btn-outline-light me-2">Sign In</button></router-link>
          <router-link to="/sign-up"><button type="button" class="btn btn-warning">Sign Up</button></router-link>
        </div>

      </div>
    </div>
  </header>
</template>

<style scoped>

</style>