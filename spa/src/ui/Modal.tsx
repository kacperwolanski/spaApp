import React from "react";
import { Box } from "@mui/material";

interface Props {
  children: JSX.Element;
}
const CustomModal = ({ children }: Props) => {
  const modalStyle = {
    position: "fixed",
    zIndex: 1000,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    overflow: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <Box sx={modalStyle}>{children}</Box>;
};

export default CustomModal;
