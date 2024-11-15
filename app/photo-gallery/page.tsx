export const dynamic = "force-dynamic";

import ThemeToggle from "@/app/photo-gallery/_components/ThemeToggle";
import { HomeIcon } from "@heroicons/react/24/solid";
import { blurhashToBase64 } from "blurhash-base64";
import { paths } from "lib/paths";
import { getImages } from "lib/queries";
import Image from "next/image";
import Link from "next/link";

/** This component renders a Photo Gallery grid using Unsplash Image API as a data source.
 *  Data model for the image object found in lib/types.ts
 *  Features:
 *  - API route handlers are found in app/photo-gallery/api/*routes.ts
 *  - Images are optimized using next js <Image /> component to allow Lazy Loading, blurhash, size optimizations etc.
 *  - This also leverages 'Parallel routing' of NextJS to launch photo modals on first photo click, then if the page is refreshed, it takes you to a photo page that renders the full resolution Image
 *    Advantage of this is, photo urls can be bookmarked, shared, cached etc.
 *  - Dark mode toggle for easier viewing at night. 😎
 *
 *  Improvements that can be done:
 *  - I wish I had more time to add Modal controls and thumbnail selector for the PhotoModal component so that Images can be swipeable and act like a carousel on desktop
 *  - Infinite loading / scrolling more images
 *  - Ability to upload own images
 *  - More tests for PhotoGallery component as I was unable to test async Server components as of now as a limitation of NextJS and Jest
 */

export default async function PhotoGallery() {
  let images = await getImages();

  return (
    <div className="min-h-screen bg-white p-8 dark:bg-slate-800">
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between">
        <h1 className="flex items-center gap-4 pb-8 text-center text-2xl text-gray-800 md:text-4xl dark:text-white">
          Photo Gallery
          <span>|</span>
          <Link className="flex items-center gap-2" href={paths.home}>
            <HomeIcon className="size-6 md:size-9" />
            Home
          </Link>
        </h1>
        <ThemeToggle />
      </div>
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center">
        <h2 className="sr-only">Image Gallery</h2>
        <ul className="columns-1 gap-8 md:columns-2 lg:columns-3">
          {images.map((image) => {
            return (
              <li className="mb-8" key={image.id}>
                <Link
                  className="group relative"
                  key={image.id}
                  href={`/photos/${image.id}`}
                  passHref
                >
                  <Image
                    alt={image.alt_description ?? "image"}
                    style={{ transform: "translate3d(0, 0, 0)" }}
                    className="transform rounded-lg brightness-90 transition group-hover:brightness-110"
                    placeholder="blur"
                    blurDataURL={blurhashToBase64(image.blur_hash)}
                    src={image.urls.small}
                    width={image.width}
                    height={image.height}
                    loading={"lazy"}
                    sizes="(max-width: 640px) 100vw,
                          (max-width: 1280px) 50vw,
                          (max-width: 1536px) 33vw,
                          25vw"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-zinc-900 px-5 py-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <h3 className="text-lg text-white transition-transform lg:translate-y-2 lg:group-hover:translate-y-0">
                      {image.description}
                    </h3>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
