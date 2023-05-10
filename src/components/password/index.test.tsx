import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import "@testing-library/jest-dom";

import { Password } from "./index";

it("Should render correctly", () => {
  render(<Password password={"P4$5WOrD!"} />);
  expect(screen.getByText("P4$5WOrD!")).toBeInTheDocument();
});
