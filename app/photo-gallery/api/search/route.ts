import { NextRequest, NextResponse } from "next/server";

/** Gets only 1 photo object using id */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  let data = await fetch(`https://api.unsplash.com/photos/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  });

  let image = await data.json();

  return NextResponse.json(image);
}
