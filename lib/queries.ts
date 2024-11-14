/** This houses all the most commonly used fetch queries.
 * e.g.: Get all photos - getImages() function
 */

import { Image, Images } from "lib/types";

export async function getImages(): Promise<Image[]> {
  let data = await fetch(`http:localhost:3000/photo-gallery/api/all`);
  let { images }: Images = await data.json();
  return images;
}

export async function getImage(id: string): Promise<Image> {
  let data = await fetch(
    `http:localhost:3000/photo-gallery/api/search?id=${id}`,
  );

  let image: Image = await data.json();

  return image;
}
