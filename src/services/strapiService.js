import axios from "axios";

const API_URL = "https://skilled-desk-bda231d19c.strapiapp.com/api";

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts?populate=img`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    throw error;
  }
};

export const addLike = async (id, currentLikes) => {
  try {
    const response = await axios.put(`${API_URL}/posts/${id}`, {
      data: {
        likes: currentLikes + 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating like in Strapi:", error);
    throw error;
  }
};
