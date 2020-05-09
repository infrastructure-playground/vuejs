import { mount, createLocalVue } from "@vue/test-utils";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { BootstrapVue } from "bootstrap-vue";
import Notifications from "vue-notification";
// import flushPromises from "flush-promises";
import Login from "@/pages/login.vue";
// import { delay } from "@/test/setup.js";

const localVue = createLocalVue();
localVue.component("ValidationObserver", ValidationObserver);
localVue.component("ValidationProvider", ValidationProvider);
localVue.use(BootstrapVue);
localVue.use(Notifications);

jest.useFakeTimers();

describe("Login", () => {
  test("if username is not entered", async () => {
    const wrapper = mount(Login, { localVue, sync: false });
    const username = wrapper.find("#username");
    // const usernameError = wrapper.find("#username-error");
    // const login = wrapper.find("#login");
    username.setValue(" ");
    // await flushPromises();
    // expect(usernameError.text()).toBeTruthy();
    // jest.advanceTimersByTime(50);
    // expect(login.attributes("disabled")).toBe(true);
  });
});
