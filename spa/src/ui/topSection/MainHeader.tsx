import { Box } from "@mui/material";
import React from "react";
import { theme } from "../../app/theme";

const MainHeader = () => {
  const headerStyle = {
    fontSize: "80px",
    textAlign: "center",
    color: theme.colors.light,
  };
  return <Box sx={headerStyle}>Main Header for page</Box>;
};

export default MainHeader;
