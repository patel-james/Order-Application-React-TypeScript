import { MenuItem } from "./MenuItem";

export type Order = {
  id: number;
  items: MenuItem[];
  total: number;
  createdAt: string;
};
