/**
 * @jest-environment node
 */
import { GET } from "@/app/photo-gallery/api/all/route";
import PhotoGallery from "@/app/photo-gallery/page";

describe("Photo Gallery API Route handler unit tests", () => {
  describe("/photo-gallery/api/all API Route handler", () => {
    it("should return a list of images as a response response", async () => {
      const res = await GET();

      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body).toBeDefined();
      expect(body).toHaveProperty("images");
    });
  });
});
