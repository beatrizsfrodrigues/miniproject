import axios from "axios";
import { addLike, getPosts } from "../src/services/strapiService.js";

jest.mock("axios");

describe("strapiService", () => {
  describe("getPosts", () => {
    it("fetches successfully data from an API", async () => {
      const data = { data: [{ id: 1, likes: 5 }] };
      axios.get.mockResolvedValue(data);

      const result = await getPosts();
      expect(result).toEqual(data.data);
    });
  });

  describe("addLike", () => {
    it("updates likes successfully", async () => {
      const documentId = "j72dlzz8xhqf4szya5j3gtv4";
      const currentLikes = 5;
      const updatedData = { data: { documentId: documentId, likes: 6 } };

      axios.put.mockResolvedValue(updatedData);

      const result = await addLike(documentId, currentLikes);
      expect({ data: result }).toEqual(updatedData);
    });
  });
});
