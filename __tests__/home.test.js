// __tests__/Home.spec.js
import { mount } from "@vue/test-utils";
import Home from "../src/components/Home.vue"; // Adjust the path to Home.vue if needed

describe("Home Component", () => {
  it("renders without crashing", () => {
    const wrapper = mount(Home);
    expect(wrapper.exists()).toBe(true); // Assert that the component is rendered
  });

  it("contains a like button", () => {
    const wrapper = mount(Home);

    // Find the first .like button (adjust this selector based on your component structure)
    const buttonElement = wrapper.find(".like");
    expect(buttonElement.exists()).toBe(true); // Assert that the like button is present

    // Optional: If the like button has inner content (e.g., icon), you can check its existence or content here
  });
});
