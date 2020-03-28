<template>
  <div id="error-page">
    <!-- <h1 class="text-center">
      <p>{{ message }}</p>
      <nuxt-link to="/">Return to homepage</nuxt-link>
    </h1> -->
    <b-alert show variant="danger">
      <h4 class="alert-heading">{{ message }}</h4>
      <nuxt-link to="/">Return to homepage</nuxt-link>
    </b-alert>
  </div>
</template>

<script>
export default {
  name: "NuxtError",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message;
    }
  }
};
</script>

<style scoped>
#error-page {
  padding: 15px;
}
</style>
