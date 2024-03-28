import React from "react";

import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppStore } from "../store";
import CustomModal from "./Modal";

const ModalItem = () => {
  const { setModalItem, modalItem } = useAppStore();
  const { id, name, year, pantone_value, color } = modalItem ?? {};
  const containerStyle = {
    background: color,
    height: "200px",
    width: "200px",
  };

  const handleCloseModalClick = () => {
    setModalItem(null);
  };
  console.log(open);
  return (
    <CustomModal>
      <Box sx={containerStyle}>
        <Typography>{id}</Typography>
        <Typography>{name}</Typography>
        <Typography>{year}</Typography>
        <Typography>{pantone_value}</Typography>
        <Box onClick={handleCloseModalClick}>
          <CloseIcon />
        </Box>
      </Box>
    </CustomModal>
  );
};

export default ModalItem;
