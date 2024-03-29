import { useEffect, useState } from "react";
import { ItemObject } from "../types/Item";
import { useAppStore } from "../store";
import { useApiClient } from "../api/apiClient";
import { getStartEndIndexes } from "../helpers/getPaginationStartEndIndexes";
import { fetchingItemsError } from "../appConstants";

const usePaginatedItems = () => {
  const { paginationIndex, totalItemsAmount, setErrorMessage } = useAppStore();
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
      setErrorMessage(fetchingItemsError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const { startIndex, endIndex } = getStartEndIndexes(
      paginationIndex,
      totalItemsAmount
    );
    getItems(startIndex, endIndex);
  }, [paginationIndex]);
  return { paginatedItemsList, isLoading };
};

export default usePaginatedItems;
