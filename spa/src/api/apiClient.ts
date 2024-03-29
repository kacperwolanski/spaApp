import { apiEndpoint } from "../appConstants";
import axios from "axios";
import { ItemObject } from "../types/Item";
import { ItemInfo } from "../types/ItemInfo";
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

export const getItemsInfo = async (): Promise<ItemInfo | null> => {
  try {
    const response = await axios.get(`${apiEndpoint}`);
    const responseData = response.data;
    return responseData;
  } catch (error) {
    console.error("Error fetching items info:", error);
    return null;
  }
};
