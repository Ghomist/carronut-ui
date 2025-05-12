import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CrButton from "../cr-button.vue";
import CrToggleButton from "../cr-toggle-button.vue";

describe("CrButton", () => {
  const wrapper = mount(CrButton, { slots: { default: "Carronut UI" } });
  it("renders properly", () => {
    expect(wrapper.text()).toContain("Carronut UI");
  });
});

describe("CrToggleButton", () => {
  const wrapper = mount(CrToggleButton, { slots: { default: "Carronut UI" } });
  it("renders properly", () => {
    expect(wrapper.text()).toContain("Carronut UI");
  });
});
