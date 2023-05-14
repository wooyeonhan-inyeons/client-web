import { NavigateFunction } from "react-router-dom";

export interface WooPos {
  x: number;
  y: number;
}
export interface Wooyeons {
  pos: WooPos;
  name: string;
}

export interface WooyeonItemProps {
  name: string;
  pos: { x: number; y: number };
  onClick: () => void;
}

export interface SearchItemProps {
  open: boolean;
  searchItems: () => void;
  navigate: NavigateFunction;
}

export interface SearchContextInterface {
  navigate: NavigateFunction;
}

export interface wooyeonPositionInterface {
  addWooyeon: ({ pos, name, img }: addWooyeonInterface) => void;
  wooyeonsRef: React.MutableRefObject<Wooyeons[]>;
  distance: number;
  img: string;
}
export interface tempWooyeonsInterface {
  id: number;
  img: string;
}

export interface addWooyeonInterface {
  pos: WooPos;
  name?: string;
  img: string;
}

export interface positionType {
  latitude: number;
  longitude: number;
}

export interface setPositionType {
  setPosition: (value: React.SetStateAction<positionType | undefined>) => void;
}
