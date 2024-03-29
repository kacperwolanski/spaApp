import React from "react";
import { ItemObject } from "../../../types/Item";
import Item from "../Item";
import { Box } from "@mui/material";

interface Props {
  items: ItemObject[];
}
const PaginatedItemsList = ({ items }: Props) => {
  const itemsToDisplay = items.map((item: ItemObject, key: number) => (
    <Item itemProps={item} key={key} />
  ));
  return <Box>{itemsToDisplay}</Box>;
};

export default PaginatedItemsList;
