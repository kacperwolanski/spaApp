import { Box } from "@mui/material";
import React from "react";
import MainHeader from "./MainHeader";
import Signature from "./signature/Signature";

const TopSection = () => (
  <Box>
    <Signature />
    <MainHeader />
  </Box>
);

export default TopSection;
