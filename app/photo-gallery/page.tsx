import { getImages } from "lib/queries";
import Image from "next/image";
import Link from "next/link";
import { blurhashToBase64 } from "blurhash-base64";

export default async function PhotoGallery() {
  const images = await getImages();

  return (
    <div className="min-h-screen bg-white p-8 dark:bg-slate-800">
      <h1 className="pb-8 text-center text-4xl text-gray-800 dark:text-white">
        Photo Gallery
      </h1>
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center">
        <h2 className="sr-only">Image Gallery</h2>
        <ul className="columns-3 gap-8">
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
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-zinc-900 px-5 py-4 transition-opacity lg:opacity-0 lg:group-hover:opacity-100">
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
