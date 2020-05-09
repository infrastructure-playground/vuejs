// import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { BootstrapVue } from "bootstrap-vue";
// import Notifications from "vue-notification";
import Login from "@/pages/login.vue";

const localVue = createLocalVue();
localVue.component("ValidationObserver", ValidationObserver);
localVue.component("ValidationProvider", ValidationProvider);
localVue.use(BootstrapVue);

jest.useFakeTimers();

describe("Login", () => {
  test("if username is not entered", () => {
    const wrapper = mount(Login, { localVue });
    const username = wrapper.find("#username");
    const password = wrapper.find("#password");
    const login = wrapper.find("#login");
    jest.advanceTimersByTime(50);
    username.element.value = "test";
    password.element.value = "test";
    expect(login.attributes("disabled")).toBe(true);
  });
});
