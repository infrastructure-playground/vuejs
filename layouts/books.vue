<template>
  <div>
    <nav-bar />
    <notifications group="books" position="top center" />
    <h1 class="text-center">
      Books Inventory
      <nuxt-link to="/inventory/books/add"
        ><font-awesome-icon
          class="clickable-hover"
          icon="plus"
        ></font-awesome-icon
      ></nuxt-link>
    </h1>
    <nuxt />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
export default {
  middleware: "auth",
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped></style>
