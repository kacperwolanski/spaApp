import React from "react";
import PaginatedItemsList from "./PaginatedItemsList";
import PaginationArrows from "./ PaginationArrows";
import { ItemObject } from "../../../types/Item";
import { Typography } from "@mui/material";
interface Props {
  paginatedItemsList: ItemObject[];
  isLoading: boolean;
}
const PaginationContent = ({ paginatedItemsList, isLoading }: Props) => (
  <>
    {isLoading && !paginatedItemsList && <Typography>loading...</Typography>}
    {!isLoading && (
      <>
        <PaginatedItemsList items={paginatedItemsList} />
        <PaginationArrows />
      </>
    )}
  </>
);

export default PaginationContent;
