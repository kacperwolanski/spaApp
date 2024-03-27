import { Box } from "@mui/material";
import React from "react";

const FilterBar = () => {
  const containerStyle = {
    height: "40px",
    width: "40%",
    borderRadius: "20px",
    border: "1px solid",
  };
  return <Box sx={containerStyle}></Box>;
};

export default FilterBar;
