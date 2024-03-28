import React, { useEffect, useState } from "react";
import { useAppStore } from "../../store";
import { getItemById } from "../../api/apiClient";
import { ItemObject } from "../../types/Item";
import Item from "./Item";
import ItemSkeleton from "../skeletons/ItemSkeleton";

const SearchResults = () => {
  const { searchForId } = useAppStore();
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
  } else {
    return <ItemSkeleton />;
  }
};

export default SearchResults;
