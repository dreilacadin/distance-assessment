import SearchBar from "@/app/components/inputs/SearchBar";
import SearchResults from "@/app/search/_components/SearchResults";

/**
 * Search Page which is handled by passing a search query using URL params
 *
 * Why URL Params?
 * 1. Bookmarkable and Shareable URs: Since the search parameters are in the URL, users can bookmark the current state of the application, including their search queries and filters, for future reference or sharing.
 * 2. Server-Side Rendering and Initial Load: URL parameters can be directly consumed on the server to render the initial state, making it easier to handle server rendering.
 * 3. Analytics and Tracking: Having search queries and filters directly in the URL makes it easier to track user behavior without requiring additional client-side logic.
 *  */
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const { query } = await searchParams;
  return (
    <>
      <SearchBar />
      <SearchResults query={query} />
    </>
  );
}
