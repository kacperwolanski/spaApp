import React from "react";
import Item from "./Item";
import { Box, Typography } from "@mui/material";

import { theme } from "../../app/theme";
import usePaginatedItems from "../../hooks/usePaginatedItems";
import PaginatedItemsList from "./PaginatedItemsList";
import { useAppStore } from "../../store";
import SearchResults from "./SearchResults";
import PaginationArrows from "./ PaginationArrows";

const Table = () => {
  const { paginatedItemsList, isLoading } = usePaginatedItems();

  const { searchForId, errorMessage } = useAppStore();

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
    padding: "80px 20px",
    textAlign: "center",
  };

  const style = { fontWeight: "800", fontSize: "20px" };

  const infoItem = {
    id: "id",
    name: "name",
    year: "year",
    pantone_value: "",
    color: theme.colors.darkGray,
  };
  return (
    <Box sx={containerStyle}>
      <Item itemProps={infoItem} sx={style} />
      {searchForId ? (
        <SearchResults />
      ) : (
        <>
          {isLoading && !paginatedItemsList && (
            <Typography>loading...</Typography>
          )}
          {!isLoading && paginatedItemsList && (
            <>
              <PaginatedItemsList items={paginatedItemsList} />
              <PaginationArrows />
            </>
          )}
        </>
      )}

      {errorMessage}
    </Box>
  );
};

export default Table;
