import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { blurhashToBase64 } from "blurhash-base64";
import { paths } from "lib/paths";
import { Image as ImageType } from "lib/types";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/photo-gallery/api/search?id=${id}`,
  );

  let image: ImageType = await data.json();

  if (!image) return <div>No Image found</div>;

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-800 p-8">
      <div className="flex justify-start py-8">
        <Link
          href={paths.gallery}
          className="flex items-center gap-2 dark:text-white"
        >
          <ArrowLeftIcon className="size-5" />
          Back
        </Link>
      </div>
      <Image
        alt={image.alt_description ?? ""}
        style={{
          transform: "translate3d(0, 0, 0)",
          width: "auto",
          height: "80vh",
        }}
        className="transform rounded-lg brightness-90 transition group-hover:brightness-110"
        placeholder="blur"
        blurDataURL={blurhashToBase64(image.blur_hash)}
        src={image.urls.full}
        width={image.width}
        height={image.height}
        loading={"lazy"}
      />
    </div>
  );
}
