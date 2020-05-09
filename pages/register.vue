<template>
  <ValidationObserver v-slot="{ invalid }">
    <notifications group="registration" position="top center" />
    <b-form class="form-authentication" @submit.prevent="register">
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
          <b-form-invalid-feedback> {{ errors[0] }} </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ valid, errors }"
        name="Password"
        vid="password"
        rules="required"
      >
        <b-form-group label="Password: " label-for="password">
          <b-form-input
            id="password"
            v-model="auth.password"
            name="password"
            type="password"
            :state="errors[0] ? false : valid ? true : null"
          ></b-form-input>
          <b-form-invalid-feedback> {{ errors[0] }} </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ valid, errors }"
        name="Confirm Password"
        rules="required|confirmed:password"
      >
        <b-form-group label="Confirm Password: " label-for="confirm_password">
          <b-form-input
            id="confirm_password"
            v-model="auth.confirm_password"
            type="password"
            :state="errors[0] ? false : valid ? true : null"
          ></b-form-input>
          <b-form-invalid-feedback> {{ errors[0] }} </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ valid, dirty, errors }"
        name="Email"
        rules="email"
      >
        <b-form-group label="Email: " label-for="email">
          <b-form-input
            id="email"
            v-model="auth.email"
            type="email"
            :state="errors[0] ? false : valid && dirty ? true : null"
          ></b-form-input>
          <b-form-invalid-feedback> {{ errors[0] }} </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <b-form-group label="First Name: " label-for="first_name">
        <b-form-input
          id="first_name"
          v-model="auth.first_name"
          type="text"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Last Name: " label-for="last_name">
        <b-form-input
          id="last_name"
          v-model="auth.last_name"
          type="text"
        ></b-form-input>
      </b-form-group>
      <b-button
        id="register-button"
        variant="primary"
        type="submit"
        :disabled="invalid"
      >
        Register
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
  methods: {
    async register() {
      const self = this;
      await this.$axios
        .post("/v1/authentication/register/", this.auth)
        .then(function(response) {
          self.$auth
            .setUserToken(response.data.token)
            .then(() => console.log("Success"));
        })
        .catch(error => {
          for (const key in error.response.data) {
            this.$notify({
              group: "registration",
              type: "error",
              title: `<b class="text-capitalize">${key}<b>: `,
              text: error.response.data[key][0]
            });
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
