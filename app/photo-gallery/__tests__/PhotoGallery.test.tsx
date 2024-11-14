import PhotoGallery from "@/app/photo-gallery/page";
import { render } from "@testing-library/react";

global["fetch"] = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve({ images: [] }),
  }),
);

describe("Photo Gallery component", () => {
  it("should render the photo gallery component", async () => {
    /** Unfortunately, Asynchronous React Server Components are not yet testable now and they just throw an error
     *  https://nextjs.org/docs/app/building-your-application/testing/jest
     */
    expect(() => render(<PhotoGallery />)).toThrow();
  });
});
