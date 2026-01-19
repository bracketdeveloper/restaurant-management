<script>
import {checkUserLoginStatus, getRestaurantForThisUser, deleteRestaurant} from "@/components/functions";

export default {
  name: "HomeComponent",
  data() {
    return {
      restaurants: [],
    }
  },
  methods: {
    async deleteRestaurantHandler(id) {
      const success = await deleteRestaurant(id)
      if (!success) return

      this.restaurants = this.restaurants.filter(
          r => r.id !== id
      )
    }
  },
  async mounted() {
    checkUserLoginStatus(this);
    this.restaurants = await getRestaurantForThisUser();
  }
}
</script>

<template>
  <section class="py-5 bg-dark text-light">
    <div class="container">
      <div class="row mb-5 text-center">
        <div class="col">
          <h2 class="fw-bold mb-2">Your Restaurants</h2>
          <p class="text-muted">
            Quickly view, edit, or remove your listings.
          </p>
        </div>
      </div>

      <div v-if="restaurants && restaurants.length" class="row g-4 mb-5">
        <!-- Example Restaurant Card -->

        <div v-for="restaurant in restaurants" v-bind:key="restaurant.id" class="col-md-4">
          <div class="card bg-secondary text-light h-100 shadow-sm border-0">
            <img src="../../src/assets/restaurant.png" class="card-img-top" alt="Restaurant Image">
            <div class="card-body">
              <h5 class="card-title">{{ restaurant.name }}</h5>
              <p class="card-text text-muted mb-3">
                {{ restaurant.category }} | Rating: {{ restaurant.rating }}
              </p>
              <div class="d-flex justify-content-between">
                <a class="btn btn-sm btn-success" v-on:click="$router.push(`/edit-restaurant/${restaurant.id}`)">Edit</a>
                <a v-on:click="deleteRestaurantHandler(restaurant.id)" class="btn btn-sm btn-danger">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-5 text-white">
        <h4>No restaurants found</h4>
        <p>Add your first restaurant to get started.</p>
      </div>

      <div class="row text-center">
        <div class="col">
          <a href="/add-restaurant" class="btn btn-primary px-5">
            Add New Restaurant
          </a>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>