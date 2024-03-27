import { Box, SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../app/theme";
import { ItemObject } from "../../types/Item";

interface Props {
  itemProps: ItemObject;
  sx?: SxProps<Theme>;
}

const Item = ({ itemProps, sx }: Props) => {
  const { id, name, year, color, pantone_value } = itemProps;
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px",
    background: color,
    borderBottom: "1px solid grey",
    padding: "15px 10px",
    color: theme.colors.light,
    ...sx,
  };
  const handleClick = () => {
    console.log(pantone_value);
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
