import { apiEndpoint } from "../appConstants";
import axios from "axios";
import { ItemObject } from "../types/Item";
import { ItemInfo } from "../types/ItemInfo";
import { useAppStore } from "../store";

export const useApiClient = () => {
  const { setErrorMessage } = useAppStore();
  const getItemById = async (itemId: string): Promise<ItemObject | null> => {
    try {
      const response = await axios.get(`${apiEndpoint}/${itemId}`);
      const apiItem = response.data;
      const apiItemData = apiItem.data;
      if (apiItemData) setErrorMessage("");
      return apiItemData;
    } catch (error) {
      setErrorMessage("No items to fetch");
      return null;
    }
  };

  const getItemsInfo = async (): Promise<ItemInfo | null> => {
    try {
      const response = await axios.get(`${apiEndpoint}`);
      const responseData = response.data;
      if (responseData) setErrorMessage("");
      return responseData;
    } catch (error) {
      setErrorMessage("Error fetching items info");
      return null;
    }
  };
  return {
    getItemById,
    getItemsInfo,
  };
};
