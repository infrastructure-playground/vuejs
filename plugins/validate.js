/* eslint-disable import/namespace */
import Vue from "vue";
// import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { ValidationObserver, ValidationProvider } from "vee-validate";
// import { ValidationObserver } from "vee-validate";
// import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";

// import * as rules from "vee-validate/dist/rules";
// import { messages } from "vee-validate/dist/locale/en.json";

// extend("required", {
//   message: "This {_field_} is required",
//   validate: value => !!value
// });

// Object.keys(rules).forEach(rule => {
//   extend(rule, {
//     ...rules[rule], // copies rule configuration
//     message: messages[rule] // assign message
//   });
// });

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
