<script>
import {checkUserLoginStatus} from "@/components/functions";
export default {
  name: "ContactUsComponent",
  mounted() {
    checkUserLoginStatus(this);
  }
}
</script>

<template>
<div>
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 text-center">
          <h3 class="fw-bold mb-3">Contact Us</h3>

          <p class="text-muted">
            You can reach us anytime.
            We respond with clarity and focus.
          </p>
        </div>
      </div>

      <div class="row g-4 justify-content-center">
        <div class="col-md-4">
          <div class="card border-0 shadow-sm h-100 text-center">
            <div class="card-body">
              <h5 class="fw-semibold mb-2">Email</h5>
              <p class="text-muted mb-0">
                support@restaurantapp.com
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card border-0 shadow-sm h-100 text-center">
            <div class="card-body">
              <h5 class="fw-semibold mb-2">Phone</h5>
              <p class="text-muted mb-0">
                +44 7000 000000
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card border-0 shadow-sm h-100 text-center">
            <div class="card-body">
              <h5 class="fw-semibold mb-2">Location</h5>
              <p class="text-muted mb-0">
                Sheffield, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<style scoped>

</style>