/** Filtering a list of dummy users given a query parameter */
import { users } from "@/app/search/_components/dummyUsers";

/** Renders this component if a non-empty query string is received as a prop */
function FilteredUsers({ query }: { query: string }) {
  return (
    <div role="searchbox">
      {users
        .filter((user) => {
          /** Fields to search for with the query string. Consider optimizing this if needed. */
          return (
            user.name.toLowerCase().includes(query.toLowerCase()) ||
            user.username.toLowerCase().includes(query.toLowerCase()) ||
            user.email.toLowerCase().includes(query.toLowerCase())
          );
        })
        .map((user) => (
          <div key={user.id}>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        ))}
    </div>
  );
}

export default function SearchResults({ query }: { query: string }) {
  if (query.trim().length > 0) {
    return <FilteredUsers query={query.trim()} />;
  }

  return (
    <div role="searchbox">
      {users.map((user) => (
        <div key={user.id}>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}
