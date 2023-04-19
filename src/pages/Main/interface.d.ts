import { HeaderOptinterface } from "../../interface";

export interface WooPos {
  x: number;
  y: number;
}
export interface Wooyeons {
  pos: WooPos;
  name: string;
}

type SetHeadType = React.Dispatch<React.SetStateAction<HeaderOptinterface>>;
export interface ContextInterface {
  setHeadOpt: SetHeadType;
}

export interface WooyeonItemProps {
  name: string;
  pos: { x: number; y: number };
}

export interface SearchItemProps {
  open: boolean;
  searchItems: () => void;
}
