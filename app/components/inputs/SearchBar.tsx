/** An RSC Searchbar component which uses Nextjs' <Form> component to easily push the query string as URL params   */

export default function SearchBar() {
  return (
    <form className="flex flex-col space-y-2" action="/search">
      <label htmlFor="query">Search</label>
      <div className="flex items-center space-x-2">
        <input
          role="input"
          className="block border border-slate-700 rounded-lg p-2"
          type="text"
          name="query"
          id="query"
          placeholder="Search something here.."
        />
        <button
          className="text-blue-50 bg-blue-700 p-2 rounded-lg"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}
