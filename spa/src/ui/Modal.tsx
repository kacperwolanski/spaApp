import React from "react";
import { Box } from "@mui/material";
import { useAppStore } from "../store";

interface Props {
  children: JSX.Element;
}
const CustomModal = ({ children }: Props) => {
  const { setModalItem } = useAppStore();
  const modalStyle = {
    position: "fixed",
    zIndex: 10,
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

  const handleCloseModalClick = () => {
    setModalItem(null);
  };

  return (
    <Box onClick={handleCloseModalClick} sx={modalStyle}>
      {children}
    </Box>
  );
};

export default CustomModal;
