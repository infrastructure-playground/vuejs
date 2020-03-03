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
            v-model="auth.username"
            type="text"
            :state="errors[0] ? false : valid ? true : null"
          ></b-form-input>
          <b-form-invalid-feedback> {{ errors[0] }} </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ valid, errors }"
        name="Password"
        rules="required"
      >
        <b-form-group label="Password: " label-for="password">
          <b-form-input
            v-model="auth.password"
            type="password"
            :state="errors[0] ? false : valid ? true : null"
          ></b-form-input>
          <b-form-invalid-feedback> {{ errors[0] }} </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <b-button variant="primary" type="submit" :disabled="invalid">
        Login
      </b-button>
    </b-form>
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
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: this.auth
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        // console.log("Error: " + JSON.stringify(e.response.data.error));
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
