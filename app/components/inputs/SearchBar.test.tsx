/**
 * @jest-environment jsdom
 */
import SearchBar from "@/app/components/inputs/SearchBar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

it("Renders a Search bar with the label, input and button", () => {
  render(<SearchBar />);

  /** Search label should be rendered */
  expect(screen.getByLabelText("Search")).toBeInTheDocument();
  /** Input should be rendered */
  expect(screen.getByRole("input")).toBeInTheDocument();
  /** Search button should be rendered */
  expect(screen.getByRole("button")).toBeInTheDocument();
});
