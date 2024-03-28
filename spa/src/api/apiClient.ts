import { apiEndpoint } from "../appConstants";
import axios from "axios";
import { ItemObject } from "../types/Item";
export const getItemById = async (
  itemId: string
): Promise<ItemObject | null> => {
  try {
    const response = await axios.get(`${apiEndpoint}/${itemId}`);
    const apiItem = response.data;
    const apiItemData = apiItem.data;
    return apiItemData;
  } catch (error) {
    console.error("Error fetching item:", error);
    return null;
  }
};
