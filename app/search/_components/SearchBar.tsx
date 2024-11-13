/** An RSC Searchbar component which uses Nextjs' <Form> component to easily push the query string as URL params   */

import { paths } from "lib/paths";
import Link from "next/link";

export default function SearchBar() {
  return (
    <form className="flex flex-col space-y-4 bg-white" action="/search">
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-semibold uppercase" htmlFor="query">
          User Search
        </label>
        <Link className="px-4 text-blue-600 underline" href={paths.search}>
          Reset
        </Link>
      </div>
      <div className="flex items-center space-x-3">
        <input
          role="search"
          className="block w-full rounded-lg border border-slate-500 px-4 py-2"
          type="text"
          name="query"
          id="query"
          placeholder="Search something here.."
        />
        <button
          className="rounded-lg bg-blue-700 px-4 py-2 font-medium tracking-wide text-blue-50"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}
