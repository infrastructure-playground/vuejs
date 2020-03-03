<template>
  <nav class="navbar navbar-expand-sm navbar-light navbar-bg">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#nav-content"
      aria-controls="nav-content"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Brand -->
    <nuxt-link class="navbar-brand" to="/">Logo</nuxt-link>

    <!-- Links -->
    <div id="nav-content" class="collapse navbar-collapse justify-content-end">
      <ul class="navbar-nav">
        <li v-if="!$auth.loggedIn" class="nav-item">
          <nuxt-link class="nav-link" to="/register">
            Register
          </nuxt-link>
        </li>
        <li v-if="!$auth.loggedIn" class="nav-item">
          <nuxt-link class="nav-link" to="/login">
            Login
          </nuxt-link>
        </li>
        <li v-if="$auth.loggedIn" class="nav-item">
          <nuxt-link class="nav-link" to="/inventory/books">
            Books
          </nuxt-link>
        </li>
        <li v-if="$auth.loggedIn" class="nav-item">
          <a href="#" class="nav-link" @click="logout">
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
    }
  }
};
</script>

<style scoped>
.navbar-bg {
  background-color: #c6c8ca;
}
</style>
