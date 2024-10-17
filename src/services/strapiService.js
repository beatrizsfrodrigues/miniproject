// src/services/strapiService.js
import axios from "axios";

const API_URL = "https://skilled-desk-bda231d19c.strapiapp.com/api"; // Update this if your Strapi server runs on a different port

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts?populate=img`); // Replace 'posts' with your content type
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    throw error;
  }
};
