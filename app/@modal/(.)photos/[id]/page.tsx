import { Modal } from "@/app/photo-gallery/_components/Modal";
import { blurhashToBase64 } from "blurhash-base64";
import type { Image as ImageType } from "lib/types";
import Image from "next/image";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  let data = await fetch(
    `${process.env.BASE_URL}/photo-gallery/api/search?id=${id}`,
  );

  let image: ImageType = await data.json();

  if (!image) return <Modal>No Image found</Modal>;

  return (
    <Modal>
      <Image
        alt={image.alt_description ?? ""}
        style={{
          transform: "translate3d(0, 0, 0)",
          width: "auto",
          height: "60vh",
        }}
        className="transform rounded-lg brightness-90 transition group-hover:brightness-110"
        placeholder="blur"
        blurDataURL={blurhashToBase64(image.blur_hash)}
        src={image.urls.raw}
        width={image.width}
        height={image.height}
        loading={"lazy"}
      />
    </Modal>
  );
}
