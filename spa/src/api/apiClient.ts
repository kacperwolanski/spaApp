import { apiEndpoint } from "../appConstants";
import axios from "axios";
export const getItemById = async (itemId: string) => {
  try {
    const response = await axios.get(`${apiEndpoint}/${itemId}`);
    const apiItem = response.data;
    const apiItemData = apiItem.data;
    return apiItemData;
  } catch (error) {
    console.error("Error fetching item:", error);
    throw error;
  }
};
