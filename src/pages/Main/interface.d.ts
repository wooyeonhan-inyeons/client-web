import { menuProps } from "../../interface";

export interface WooPos {
  x: number;
  y: number;
}
export interface Wooyeons {
  pos: WooPos;
  name: string;
}

export interface ContextInterface {
  setMenus: React.Dispatch<React.SetStateAction<menuProps[]>>;
}

export interface WooyeonItemProps {
  name: string;
  pos: { x: number; y: number };
}

export interface SearchItemProps {
  open: boolean;
  searchItems: () => void;
}
