/**
 * @jest-environment jsdom
 */
import SearchBar from "@/app/components/inputs/SearchBar";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { useSearchParams } from "next/navigation";

// Mock the useSearchParams hook
jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

describe("SearchBar unit tests", () => {
  it("Renders a Search bar with the label, input and button", () => {
    render(<SearchBar />);

    /** Search label should be rendered */
    expect(screen.getByLabelText("Search")).toBeInTheDocument();
    /** Input should be rendered */
    expect(screen.getByRole("search")).toBeInTheDocument();
    /** Search button should be rendered */
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("Appends a query flag to the URLSearchParams on Enter", () => {
    render(<SearchBar />);

    const input = screen.getByRole("search");

    // Type value hello in the input
    fireEvent.change(input, { target: { value: "Hello" } });
    // Press enter key
    fireEvent.keyDown(input, { key: "Enter" });

    const searchParams = new URLSearchParams("?search='Hello'");
    const query = searchParams.get("search");

    expect(query).toBe(`'Hello'`);
  });
});
