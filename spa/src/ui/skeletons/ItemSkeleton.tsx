import { Skeleton } from "@mui/material";
import React from "react";
import { theme } from "../../app/theme";

const ItemSkeleton = () => (
  <Skeleton
    variant="rectangular"
    animation="wave"
    sx={{
      borderRadius: "10px",
      background: theme.colors.neutralDark,
      maxHeight: "50px",
      width: "100%",
      height: "100vh",
    }}
  />
);

export default ItemSkeleton;
