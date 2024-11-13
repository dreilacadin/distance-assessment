/**
 * @jest-environment jsdom
 */
import SearchBar from "@/app/search/_components/SearchBar";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";

beforeAll(() => {
  window.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

describe("SearchBar unit tests", () => {
  it("Renders a Search bar with the label, input and button", () => {
    render(<SearchBar />);

    /** Search label should be rendered */
    expect(screen.getByLabelText("User Search")).toBeInTheDocument();
    /** Input should be rendered */
    expect(screen.getByRole("search")).toBeInTheDocument();
    /** Search button should be rendered */
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("Appends a query flag to the URLSearchParams on Enter", async () => {
    render(<SearchBar />);

    const input = screen.getByRole("search");

    // Type value hello in the input
    fireEvent.change(input, { target: { value: "Hello" } });
    await userEvent.click(screen.getByRole("button", { name: "Search" }));

    const searchParams = new URLSearchParams("?query='Hello'");
    const query = searchParams.get("query");

    expect(query).toBe(`'Hello'`);
  });
});
