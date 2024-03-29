import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppStore } from "../store";
import CustomModal from "./Modal";
import { theme } from "../app/theme";

const ModalItem = () => {
  const { setModalItem, modalItem } = useAppStore();
  const { id, name, year, pantone_value, color } = modalItem ?? {};
  const containerStyle = {
    position: "relative",
    background: color || "transparent",
    zIndex: 20,
    height: "450px",
    width: "450px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
  };

  const idStyle = {
    position: "absolute",
    color: theme.colors.light,
    ml: "-40px",
    fontSize: "340px",
    fontWeight: "900",
    opacity: "0.2",
    letterSpacing: "-44px",
  };

  const yearStyle = {
    position: "absolute",
    color: theme.colors.light,
    mt: "300px",
    fontSize: "20px",
    letterSpacing: "5px",
  };

  const nameStyle = {
    position: "absolute",
    top: "25px",
    fontWeight: 900,
    letterSpacing: "-2px",
    color: theme.colors.light,
    fontSize: "40px",
  };

  const pantoneStyle = {
    color: theme.colors.light,
    fontSize: "40px",
  };
  const handleCloseModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <CustomModal>
      <Box sx={containerStyle} onClick={handleCloseModalClick}>
        <Typography sx={idStyle}>{id}</Typography>
        <Typography sx={yearStyle}>{year}</Typography>
        <Typography sx={nameStyle}>{name}</Typography>
        <Typography sx={pantoneStyle}>{pantone_value}</Typography>
      </Box>
    </CustomModal>
  );
};

export default ModalItem;
