import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../app/theme";

const MainHeader = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  };
  const headerStyle = {
    fontSize: "100px",
    fontWeight: "700",
    textAlign: "center",
    color: theme.colors.light,
    letterSpacing: "-5px",
  };
  const subtitleStyle = {
    mt: "-30px",
    ml: "495px",

    color: theme.colors.light,
  };
  return (
    <Box sx={containerStyle}>
      <Typography sx={headerStyle}>Trending Colors</Typography>
      <Typography sx={subtitleStyle}>for Your website</Typography>
    </Box>
  );
};

export default MainHeader;
