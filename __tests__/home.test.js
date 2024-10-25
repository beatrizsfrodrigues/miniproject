import { shallowMount } from "@vue/test-utils";
import App from "../src/App.vue";
import Home from "../src/components/Home.vue";

describe("App.vue", () => {
  it("renders Home component", () => {
    // Mount the App.vue component
    const wrapper = shallowMount(App);

    // Check if the Home component is rendered
    const homeComponent = wrapper.findComponent(Home);
    expect(homeComponent.exists()).toBe(true);
  });
});
