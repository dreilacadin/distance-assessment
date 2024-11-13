import { NextResponse } from "next/server";

/** This is where all the Route Handlers for the Photo Gallery application will live will live
 *  Route handlers are App router's API routes equivalent.
 */
export async function GET() {
  /** This  fetches a list of image objects from [Unsplash API](https://unsplash.com/documentation#list-photos)  */
  let data = await fetch(
    "https://api.unsplash.com/collections/3802332/photos",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    },
  );

  let images = await data.json();

  return NextResponse.json({ images });
}
