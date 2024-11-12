/** An RSC Searchbar component which uses Nextjs' <Form> component to easily push the query string as URL params   */

export default function SearchBar() {
  return (
    <form className="flex flex-col space-y-2" action="/search">
      <label htmlFor="query">Search</label>
      <div className="flex items-center space-x-2">
        <input
          role="search"
          className="block rounded-lg border border-slate-700 p-2"
          type="text"
          name="query"
          id="query"
          placeholder="Search something here.."
        />
        <button
          className="rounded-lg bg-blue-700 p-2 text-blue-50"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}
