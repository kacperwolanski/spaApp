import { useEffect, useState } from "react";

import { ItemObject } from "../types/Item";
import { useAppStore } from "../store";
import { elementsPerPageAmount } from "../appConstants";
import { useApiClient } from "../api/apiClient";

const usePaginatedItems = () => {
  const { paginationIndex, totalItemsAmount } = useAppStore();
  const [isLoading, setIsLoading] = useState(true);
  const { getItemById } = useApiClient();
  const [paginatedItemsList, setPaginatedItemsList] = useState<ItemObject[]>();

  const getItems = async (startIndex: number, endIndex: number) => {
    setIsLoading(true);
    try {
      const items: ItemObject[] = [];
      for (let i = startIndex; i <= endIndex; i++) {
        const response = await getItemById(i.toString());
        if (response) {
          items.push(response);
        }
      }
      setPaginatedItemsList(items);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const startIndex = (paginationIndex - 1) * elementsPerPageAmount + 1;
    let endIndex = startIndex + elementsPerPageAmount - 1;
    if (totalItemsAmount && endIndex > totalItemsAmount)
      endIndex = totalItemsAmount;
    getItems(startIndex, endIndex);
  }, [paginationIndex]);
  return { paginatedItemsList, isLoading };
};

export default usePaginatedItems;
