import React from "react";
import GithubLink from "./GithubLink";
import MyLogo from "./MyLogo";
import { Box } from "@mui/material";

const Signature = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <Box sx={containerStyle}>
      <GithubLink />
      <MyLogo />
    </Box>
  );
};

export default Signature;
