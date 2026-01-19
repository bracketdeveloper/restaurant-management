<script>
export default {
  name: "PageNotFoundComponent",
}

</script>

<template>
  <section class="py-5 bg-dark text-light">
    <div class="container text-center">
      <h1 class="display-1 fw-bold mb-3">404</h1>

      <p class="fs-4 text-white mb-4">
        Page not found.
      </p>

      <p class="mb-5 text-white">
        The page you are trying to access does not exist or was removed.
      </p>

      <router-link to="/">
        <button class="btn btn-secondary">Go Home</button>
      </router-link>
    </div>
  </section>

</template>

<style scoped>

</style>