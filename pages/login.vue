<template>
  <ValidationObserver v-slot="{ invalid }">
    <notifications group="login" position="top center" />
    <b-form class="form-authentication" @submit.prevent="login">
      <ValidationProvider
        v-slot="{ valid, errors }"
        name="Username"
        rules="required"
      >
        <b-form-group label="Username: " label-for="username">
          <b-form-input
            id="username"
            v-model="auth.username"
            type="text"
            :state="errors[0] ? false : valid ? true : null"
          ></b-form-input>
          <b-form-invalid-feedback id="username-error">
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ valid, errors }"
        name="Password"
        rules="required"
      >
        <b-form-group label="Password: " label-for="password">
          <b-form-input
            id="password"
            v-model="auth.password"
            type="password"
            :state="errors[0] ? false : valid ? true : null"
          ></b-form-input>
          <b-form-invalid-feedback> {{ errors[0] }} </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <b-button
        id="login-button"
        variant="primary"
        type="submit"
        :disabled="invalid"
      >
        Login
      </b-button>
    </b-form>
  </ValidationObserver>
</template>

<script>
export default {
  middleware: "auth",
  auth: "guest",
  data() {
    return {
      auth: {}
    };
  },
  // mounted() {
  //   if (this.$cookies.get("redirect")) {
  //     this.$notify({
  //       group: "login",
  //       type: "warn",
  //       title: "You are currently not logged in"
  //     });
  //   }
  // },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: this.auth
        });
      } catch (e) {
        this.$notify({
          group: "login",
          type: "error",
          title: "ERROR:",
          text: e.response.data.error
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
