import React, { useEffect, useState } from "react";
import { useAppStore } from "../../store";
import { ItemObject } from "../../types/Item";
import Item from "./Item";
import ItemSkeleton from "../skeletons/ItemSkeleton";
import { useApiClient } from "../../api/apiClient";

const SearchResults = () => {
  const { searchForId, errorMessage } = useAppStore();
  const { getItemById } = useApiClient();
  const [searchResults, setSearchResults] = useState<ItemObject | null>(null);

  useEffect(() => {
    getResults();
  }, [searchForId]);

  const getResults = async () => {
    if (searchForId) {
      const itemObject = await getItemById(searchForId?.toString());
      setSearchResults(itemObject);
    }
  };

  if (searchResults) {
    return <Item itemProps={searchResults} />;
  } else if (!errorMessage.length) {
    return <ItemSkeleton />;
  }
  return <></>;
};

export default SearchResults;
