import { getItemById } from "../api/apiClient";
import { ItemObject } from "../types/Item";

export const getGivenIdsItems = async (startId: string, endId: string) => {
  const items: ItemObject[] = [];
  const listLen = parseInt(endId) - parseInt(startId);
  for (let i = parseInt(startId); i <= listLen; i++) {
    const apiItem = await getItemById(i.toString());
    if (apiItem) items.push(apiItem);
  }

  return items;
};
