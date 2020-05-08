import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";
import NavBar from "@/components/NavBar.vue";

const loggedOut = { $auth: { loggedIn: false } };
const loggedIn = { $auth: { loggedIn: true } };
const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe("NavBar", () => {
  test("if user logged in, do not show login link", () => {
    const wrapper = shallowMount(NavBar, {
      mocks: loggedIn,
      localVue
    });
    expect(wrapper.find("#login").exists()).toBe(false);
  });
  test("if user logged in, do not show registration link", () => {
    const wrapper = shallowMount(NavBar, {
      mocks: loggedIn,
      localVue
    });
    expect(wrapper.find("#login").exists()).toBe(false);
  });
  test("if user not logged in, do not show logout link", () => {
    const wrapper = shallowMount(NavBar, {
      mocks: loggedOut,
      localVue
    });
    expect(wrapper.find("#logout").exists()).toBe(false);
  });
  test("if user not logged in,  show login link", () => {
    const wrapper = shallowMount(NavBar, {
      mocks: loggedOut,
      localVue
    });
    expect(wrapper.find("#login").exists()).toBe(true);
  });
  test("if user not logged in,  show registration link", () => {
    const wrapper = shallowMount(NavBar, {
      mocks: loggedOut,
      localVue
    });
    expect(wrapper.find("#register").exists()).toBe(true);
  });
});
