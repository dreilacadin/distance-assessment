/**
 * @jest-environment jsdom
 */
import SearchResults from "@/app/search/_components/SearchResults";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("SearchResult component unit tests", () => {
  it("Returns a result given a search query string", () => {
    const { container } = render(<SearchResults query="Kurtis" />);

    /** Should return an object of a user */
    expect(screen.getByRole("searchbox")).toHaveTextContent("Kurtis Weissnat");
    expect(container).toMatchSnapshot();
  });
});
