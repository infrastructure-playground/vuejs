import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";
import NavBar from "@/components/NavBar.vue";

const loggedOut = { $auth: { loggedIn: false } };
const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe("NavBar", () => {
  test("if user not logged in, do not show logout link", () => {
    const wrapper = shallowMount(NavBar, {
      mocks: loggedOut,
      localVue
    });
    expect(wrapper.find("#logout").exists()).toBe(false);
  });
});
