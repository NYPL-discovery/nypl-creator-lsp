// This uses jest and react-testing-library.

import React from "react";
import { render, screen } from "@testing-library/react";
import SampleComponent from "./SampleComponent";

describe("SampleComponent", () => {
  beforeEach(() => {
    render(
      <SampleComponent />
    );
  });

  test("renders an h2 and hello world", () => {
    const h2 = screen.getByRole("heading", { level: 2 });
    const helloWorld = screen.getByText("Hello World!");

    // In case you need to see the output of the component:
    // screen.debug();

    expect(h2).toBeInTheDocument();
    expect(helloWorld).toBeInTheDocument();
  });
});
