<script>
import {checkUserLoginStatus, getUsers, getTotalRestaurantByUserId} from "@/components/functions";
export default {
  name: "UsersComponent",
  data(){
    return {
      users:[]
    }
  },
 async mounted() {
    checkUserLoginStatus(this);
    const users = await getUsers();
    let serial = 0;

   for (let user of users) {
     serial++;
     user.totalRestaurants = await getTotalRestaurantByUserId(user.id)
     user.serial = serial;
   }
   this.users = users
  }
}
</script>

<template>
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row mb-3 justify-content-center">
        <div class="col-lg-8 col-md-10">
          <h4 class="fw-bold mb-3">Users</h4>

          <div class="table-responsive">
            <table class="table table-striped table-hover align-middle mb-0">
              <thead class="table-dark">
              <tr>
                <th scope="col" style="width: 20px;">#</th>
                <th scope="col" style="width: 40%;">Name</th>
                <th scope="col" style="width: 60%;">Email</th>
                <th scope="col" style="width: 60%;">Restaurants</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="user in users" v-bind:key="user.id"><td>{{user.serial}}</td><td>{{user.name}}</td><td>{{user.email}}</td><td>{{(user.totalRestaurants)}}</td></tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  </section>


</template>

<style scoped>

</style>