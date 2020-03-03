<template>
  <ValidationObserver v-slot="{ invalid }">
    <form class="form-authentication" @submit.prevent="onSubmit">
      <div class="form-group">
        <ValidationProvider
          v-slot="{ errors }"
          name="Username"
          rules="required"
        >
          <label for="username">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            name="username"
            class="form-control"
          />
          <!-- <b-form-input
            v-model="auth.username"
            type="text"
            :state="errors[0] ? false : valid ? true : null"
          ></b-form-input> -->
          <span> {{ errors[0] }} </span>
        </ValidationProvider>
      </div>
      <!-- <div class="form-group">
        <ValidationProvider
          v-slot="{ errors }"
          name="Password"
          rules="required"
        >
          <label for="username">Password</label>
          <input
            id="password"
            v-model="auth.password"
            type="password"
            name="password"
            class="form-control"
          />
          <span> {{ errors[0] }} </span>
        </ValidationProvider>
      </div> -->
      <button class="btn btn-primary" type="submit" :disabled="invalid">
        Login
      </button>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  data() {
    return {
      auth: {},
      username: ""
    };
  },
  methods: {
    onSubmit() {
      alert("Submit!");
    }
  }
};
</script>

<style lang="scss" scoped></style>
