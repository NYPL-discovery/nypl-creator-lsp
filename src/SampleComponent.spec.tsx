import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import SampleComponent from "./SampleComponent";

describe("Testin <SampleComponent/>", () => {
   it("renders an h2 and hello world", () => {
      const wrapper = mount(<SampleComponent />);

      console.debug(wrapper.html());
      expect(wrapper.find('h2').text()).to.equal("Hello World!")
   });
});