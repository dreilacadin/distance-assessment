/**
 * @jest-environment jsdom
 */
import Page from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("Tasks:");
});
