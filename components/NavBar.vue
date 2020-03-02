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
    <a class="navbar-brand" routerLink="/">Logo</a>

    <!-- Links -->
    <div id="nav-content" class="collapse navbar-collapse justify-content-end">
      <ul class="navbar-nav">
        <li v-if="!$auth.loggedIn" class="nav-item">
          <a class="nav-link" routerLinkActive="active" routerLink="/register">
            Register
          </a>
        </li>
        <li v-if="!$auth.loggedIn" class="nav-item">
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: true}"
            routerLink="/"
          >
            Login
          </a>
        </li>
        <li v-if="$auth.loggedIn" class="nav-item">
          <a
            class="nav-link"
            routerLinkActive="active"
            routerLink="/inventory/books"
          >
            Books
          </a>
        </li>
        <li v-if="$auth.loggedIn" class="nav-item">
          <a class="nav-link" skipLocationChange="true" routerLink="/logout">
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
