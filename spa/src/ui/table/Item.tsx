import { Box, SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../app/theme";
import { ItemObject } from "../../types/Item";
import { useAppStore } from "../../store";

interface Props {
  itemProps: ItemObject;
  sx?: SxProps<Theme>;
}

const Item = ({ itemProps, sx }: Props) => {
  const { setModalItem } = useAppStore();
  const { id, name, year, color } = itemProps;
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px",
    background: color,
    borderBottom: "1px solid grey",
    padding: "15px 10px",
    color: theme.colors.light,
    transition: "background-color 0.3s",
    ":hover":
      id !== "id"
        ? {
            backgroundColor: theme.colors.secondary,
            cursor: "pointer",
          }
        : {},
    ...sx,
  };
  const handleClick = () => {
    if (id !== "id") setModalItem(itemProps);
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
