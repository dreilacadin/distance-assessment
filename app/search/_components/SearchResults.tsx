/** Filtering a list of dummy users given a query parameter */
import UserCard from "@/app/search/_components/UserCard";
import { users } from "@/app/search/dummyUsers";

/** Renders this component if a non-empty query string is received as a prop */
function FilteredUsers({ query }: { query: string }) {
  return (
    <div className="flex flex-col space-y-4" role="searchbox">
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
          <UserCard key={user.id} user={user} />
        ))}
    </div>
  );
}

export default function SearchResults({ query }: { query: string }) {
  if (query?.trim().length > 0) {
    return <FilteredUsers query={query.trim()} />;
  }

  return (
    <div className="flex flex-col space-y-4" role="searchbox">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
