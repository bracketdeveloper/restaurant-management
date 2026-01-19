<template>
  <div>
    <teleport to="#header">
      <HeaderComponent></HeaderComponent>
    </teleport>
    <router-view></router-view>
    <teleport to="#footer">
      <FooterComponent></FooterComponent>
    </teleport>
  </div>
</template>

<script>
import HeaderComponent from "@/components/static/HeaderComponent.vue";
import FooterComponent from "@/components/static/FooterComponent.vue";
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav-item a:hover {
  color: #D0D0D0 !important;
}
.no-underline {
  text-decoration: none;
}
</style>
