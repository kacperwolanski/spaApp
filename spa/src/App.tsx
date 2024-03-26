import { Box } from "@mui/material";
import React from "react";
import FilterBar from "./ui/filter/FilterBar";
import PaginatedList from "./ui/paginatedList/PaginatedList";

function App() {
  return (
    <Box>
      <FilterBar />
      <PaginatedList />
    </Box>
  );
}

export default App;
