<template>
  <form @submit.prevent="submit">
    <!-- <div class="form-group">
      <label for="username">Username</label>
      <input
        id="username"
        #username="ngModel"
        type="text"
        name="username"
        class="form-control"
        required
        ngModel
      />
      <span
        class="help-block alert-warning"
        *ngIf="!username.valid && username.touched"
        >* Please enter a username</span
      >
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        id="password"
        #password="ngModel"
        type="password"
        name="password"
        class="form-control"
        required
        ngModel
      />
      <span
        class="help-block alert-warning"
        *ngIf="!password.valid && password.touched"
        >* Please enter a password</span
      >
    </div>
    <button class="btn btn-primary" type="submit" [disabled]="!f.valid">
      Login
    </button> -->
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
