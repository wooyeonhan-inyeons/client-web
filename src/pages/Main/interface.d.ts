import { menuProps } from "../../interface";

export interface WooPos {
  x: number;
  y: number;
}
export interface Wooyeons {
  pos: WooPos;
  name: string;
}

type SetMenuType = React.Dispatch<React.SetStateAction<menuProps[]>>;
export interface ContextInterface {
  setMenus: SetMenuType;
}

export interface WooyeonItemProps {
  name: string;
  pos: { x: number; y: number };
}

export interface SearchItemProps {
  open: boolean;
  searchItems: () => void;
}
