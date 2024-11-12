import { paths } from "lib/paths";
import Link from "next/link";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <div>
      <h2>Tasks:</h2>
      <ol>
        <li>
          <Link href={paths.search}>Real-time search</Link>
        </li>
        <li>
          <Link href="#">Photo gallery</Link>
        </li>
      </ol>
    </div>
  );
}
