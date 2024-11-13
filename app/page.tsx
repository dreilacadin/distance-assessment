import { paths } from "lib/paths";
import Link from "next/link";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <div className="p-8">
      <h2>Tasks:</h2>
      <ol className="list-decimal">
        <li className="list-inside">
          <Link href={paths.search}>Real-time search</Link>
        </li>
        <li className="list-inside">
          <Link href="#">Photo gallery</Link>
        </li>
      </ol>
    </div>
  );
}
