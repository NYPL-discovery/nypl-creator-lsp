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

  test("renders names, age, email, and newsletter fields", () => {
    const h2 = screen.getByRole("heading", { level: 2 });
    const helloWorld = screen.getByText("Hello World!");

    expect(h2).toBeInTheDocument();
    expect(helloWorld).toBeInTheDocument();
  });
});
