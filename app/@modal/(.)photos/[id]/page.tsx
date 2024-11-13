import { Modal } from "@/app/photo-gallery/_components/Modal";
import { blurhashToBase64 } from "blurhash-base64";
import { getImages } from "lib/queries";
import Image from "next/image";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const images = await getImages();
  const image = images.find((image) => image.id === id);
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
