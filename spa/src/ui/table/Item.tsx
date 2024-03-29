import { Box, SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../app/theme";
import { ItemObject } from "../../types/Item";
import { useAppStore } from "../../store";

interface Props {
  itemProps: ItemObject;
  isInfoItem?: boolean;
  sx?: SxProps<Theme>;
}

const Item = ({ itemProps, sx, isInfoItem }: Props) => {
  const { setModalItem } = useAppStore();
  const { id, name, year, color } = itemProps;
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px",
    mt: "1px",
    background: color,
    padding: "15px 10px",
    color: theme.colors.light,
    transition: "background-color 0.3s",
    ":hover": !isInfoItem
      ? {
          backgroundColor: theme.colors.secondary,
          cursor: "pointer",
        }
      : {},
    ...sx,
  };
  const handleClick = () => {
    if (!isInfoItem) setModalItem(itemProps);
  };
  return (
    <Box sx={containerStyle} onClick={handleClick}>
      <Typography>{id}</Typography>
      <Typography>{name}</Typography>
      <Typography>{year}</Typography>
    </Box>
  );
};

export default Item;
