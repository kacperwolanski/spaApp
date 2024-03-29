import React from "react";
import Item from "./Item";
import { Box } from "@mui/material";
import { theme } from "../../app/theme";
import usePaginatedItems from "../../hooks/usePaginatedItems";
import { useAppStore } from "../../store";
import SearchResults from "./SearchResults";
import PaginationContent from "./pagination/PaginationContent";

const Table = () => {
  const { paginatedItemsList = [], isLoading } = usePaginatedItems();
  const { searchForId, errorMessage } = useAppStore();

  const containerStyle = {
    mt: "70px",
    display: "flex",
    flexDirection: "column",
    width: "100%",

    overFlow: "hidden",
    textAlign: "center",
  };

  const infoItemStyle = {
    background: theme.colors.light,
    color: theme.colors.neutralDark,
  };

  const infoItem = {
    id: "id",
    name: "name",
    year: "year",
    pantone_value: "",
    color: theme.colors.darkGrey,
  };
  return (
    <Box sx={containerStyle}>
      <Item itemProps={infoItem} sx={infoItemStyle} isInfoItem />
      {searchForId ? (
        <SearchResults />
      ) : (
        <PaginationContent
          paginatedItemsList={paginatedItemsList}
          isLoading={isLoading}
        />
      )}
      {errorMessage}
    </Box>
  );
};

export default Table;
