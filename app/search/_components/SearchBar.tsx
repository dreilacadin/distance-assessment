/** An RSC Searchbar component which uses Nextjs' <Form> component to easily push the query string as URL params   */

import SearchInput from "@/app/search/_components/SearchInput";
import { HomeIcon } from "@heroicons/react/24/solid";
import { paths } from "lib/paths";
import Link from "next/link";

export default function SearchBar() {
  return (
    <form className="flex flex-col space-y-4 bg-white" action="/search">
      <div className="flex items-baseline justify-between">
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold uppercase" htmlFor="query">
            User Search
          </label>
          <span>|</span>
          <Link
            className="flex items-center gap-1 text-sm font-semibold uppercase hover:underline"
            href={paths.home}
          >
            <HomeIcon className="size-4" />
            Home
          </Link>
        </div>
        <Link className="px-4 text-blue-600 underline" href={paths.search}>
          Reset
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <SearchInput />
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
