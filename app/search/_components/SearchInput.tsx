"use client";

import ReactFocusLock from "react-focus-lock";

/** Refactored in a separate component so that I can use [react-focus-lock](https://www.npmjs.com/package/react-focus-lock) here
 *  RFL only works on client components as of now
 *  This still works with NextJS server actions as the 'name="query"' attribute is still present in the input
 */
export default function SearchInput() {
  return (
    <ReactFocusLock className="w-full">
      <input
        role="search"
        className="w-full rounded-lg border border-slate-500 px-4 py-2"
        type="text"
        name="query"
        id="query"
        placeholder="Search something here.."
      />
    </ReactFocusLock>
  );
}
