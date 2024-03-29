import { apiEndpoint } from "../appConstants";
import axios from "axios";
import { ItemObject } from "../types/Item";
import { ItemInfo } from "../types/ItemInfo";
import { useState } from "react";

export const useApiClient = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const getItemById = async (itemId: string): Promise<ItemObject | null> => {
    try {
      const response = await axios.get(`${apiEndpoint}/${itemId}`);
      const apiItem = response.data;
      const apiItemData = apiItem.data;
      return apiItemData;
    } catch (error) {
      setErrorMessage("Error fetching item");
      return null;
    }
  };

  const getItemsInfo = async (): Promise<ItemInfo | null> => {
    try {
      const response = await axios.get(`${apiEndpoint}`);
      const responseData = response.data;
      return responseData;
    } catch (error) {
      setErrorMessage("Error fetching items info");
      return null;
    }
  };
  return {
    getItemById,
    getItemsInfo,
    errorMessage,
  };
};
