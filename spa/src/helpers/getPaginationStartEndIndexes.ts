import { elementsPerPageAmount } from "../appConstants";

export const getStartEndIndexes = (
  paginationIndex: number,
  totalItemsAmount: number | null
) => {
  const startIndex = (paginationIndex - 1) * elementsPerPageAmount + 1;
  let endIndex = startIndex + elementsPerPageAmount - 1;
  if (totalItemsAmount && endIndex > totalItemsAmount)
    endIndex = totalItemsAmount;
  return { startIndex, endIndex };
};
