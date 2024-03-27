import { Box } from "@mui/material";
import React from "react";

import PaginatedList from "../ui/paginatedList/PaginatedList";
import TopSection from "../ui/topSection/TopSection";
import FilterBar from "../ui/filter/FilterBar";

const AppContent = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Box padding="100px">
      <TopSection />
      <Box sx={containerStyle}>
        <FilterBar />
        <PaginatedList />
      </Box>
    </Box>
  );
};

export default AppContent;
