import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Typography } from "@mui/material";
import { useAppStore } from "../../../store";
import useItemsTotalAmount from "../../../hooks/useItemsTotalAmount";
import { elementsPerPageAmount } from "../../../appConstants";

const PaginationArrows = () => {
  const { paginationIndex, setPaginationIndex, totalItemsAmount } =
    useAppStore();
  useItemsTotalAmount();
  const containerStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    mt: "20px",
    gap: "10px",
  };

  const arrowStyle = {
    color: "white",
    "&:hover": {
      color: "darkgrey",
      cursor: "pointer",
    },
  };
  const pageCountStyle = {
    mt: "5x",
    color: "white",
  };

  const arrowDisabledStyle = {
    color: "darkgrey",
  };

  const disabledForwardArrow = totalItemsAmount
    ? paginationIndex >= Math.ceil(totalItemsAmount / elementsPerPageAmount)
    : false;

  const disabledBackArrow = paginationIndex == 1;

  const handleBackArrowClick = () => {
    const destinationIndex = paginationIndex - 1;
    if (destinationIndex > 0) setPaginationIndex(destinationIndex);
  };

  const handleForwardArrowClick = () => {
    const destinationIndex = paginationIndex + 1;
    if (
      totalItemsAmount &&
      destinationIndex <= Math.ceil(totalItemsAmount / elementsPerPageAmount)
    ) {
      setPaginationIndex(destinationIndex);
    }
  };
  return (
    <Box sx={containerStyle}>
      <ArrowBackIosNewIcon
        sx={disabledBackArrow ? arrowDisabledStyle : arrowStyle}
        onClick={handleBackArrowClick}
      />
      <Typography sx={pageCountStyle}>{paginationIndex}</Typography>
      <ArrowForwardIosIcon
        sx={disabledForwardArrow ? arrowDisabledStyle : arrowStyle}
        onClick={handleForwardArrowClick}
      />
    </Box>
  );
};

export default PaginationArrows;
