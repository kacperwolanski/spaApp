import { Box } from "@mui/material";
import React from "react";
import { theme } from "../../app/theme";

const MainHeader = () => {
  const headerStyle = {
    fontSize: "80px",
    textAlign: "center",
    color: theme.colors.light,
  };
  return <Box sx={headerStyle}>My single page app</Box>;
};

export default MainHeader;
