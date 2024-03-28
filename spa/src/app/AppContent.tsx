import { Box } from "@mui/material";
import React from "react";

import Table from "../ui/table/Table";
import TopSection from "../ui/topSection/TopSection";
import FilterBar from "../ui/filter/FilterBar";
import { useAppStore } from "../store";
import ModalItem from "../ui/ModalItem";

const AppContent = () => {
  const { modalItem } = useAppStore();
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "900px",
  };
  return (
    <Box padding="100px">
      {modalItem && <ModalItem />}
      <TopSection />
      <Box sx={containerStyle}>
        <FilterBar />
        <Table />
      </Box>
    </Box>
  );
};

export default AppContent;
