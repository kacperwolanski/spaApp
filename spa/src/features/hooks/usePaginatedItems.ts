import { useEffect, useState } from "react";
import { getGivenIdsItems } from "../getGivenIdsItems";
import { ItemObject } from "../../types/Item";

const usePaginatedItems = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [paginatedItemsList, setPaginatedItemsList] = useState<ItemObject[]>();
  const getItems = async () => {
    const paginatedItemsList = await getGivenIdsItems("1", "6");
    if (paginatedItemsList) {
      setIsLoading(false);
      setPaginatedItemsList(paginatedItemsList);
    }
  };

  useEffect(() => {
    getItems();
  }, []);
  return { paginatedItemsList, isLoading };
};

export default usePaginatedItems;
