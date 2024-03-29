import { ItemObject } from "./Item";

interface Support {
  text: string;
  url: string;
}
export interface ItemInfo {
  data: ItemObject[];
  page: number;
  per_page: number;
  support: Support;
  total: number;
  total_pages: number;
}
