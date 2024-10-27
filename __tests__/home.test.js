import { shallowMount } from "@vue/test-utils";
import App from "../src/App.vue";
import Home from "../src/components/Home.vue";

describe("App.vue", () => {
  it("renders Home component", () => {
    const wrapper = shallowMount(App);
    const homeComponent = wrapper.findComponent(Home);
    expect(homeComponent.exists()).toBe(true);
  });
});
