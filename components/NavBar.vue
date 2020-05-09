<template>
  <b-navbar toggleable="lg" type="light" class="navbar-bg">
    <!-- Brand -->
    <b-navbar-brand to="/">
      Logo
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <!-- Links -->
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="!$auth.loggedIn" id="register" to="/register">
          Register
        </b-nav-item>
        <b-nav-item v-if="!$auth.loggedIn" id="login" to="/login">
          Login
        </b-nav-item>
        <b-nav-item
          v-if="$auth.loggedIn"
          id="inventory-books"
          to="/inventory/books"
        >
          Books
        </b-nav-item>
        <b-nav-item v-if="$auth.loggedIn" id="logout" @click="logout">
          Logout
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
