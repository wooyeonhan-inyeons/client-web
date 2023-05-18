import { NavigateFunction } from "react-router-dom";

export interface WooPos {
  x: number;
  y: number;
}
export interface Wooyeons {
  pos: WooPos;
  image: string;
}

export interface WooyeonItemProps {
  image: string;
  pos: { x: number; y: number };
  index?: number;
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
  setWooyeons: (value: React.SetStateAction<Wooyeons[]>) => void;

  distance: number;
  image: string;
  id?: number;
}
export interface tempWooyeonsInterface {
  id: number;
  img: string;
}

export interface addWooyeonInterface {
  pos: WooPos;
  post_id?: string;
  image: string;
  setWooyeons: (value: React.SetStateAction<Wooyeons[]>) => void;
}

export interface positionType {
  latitude: number;
  longitude: number;
}

export interface setPositionType {
  setPosition: (value: React.SetStateAction<positionType | undefined>) => void;
}

export interface PostWooyeonType {
  create_at: string;
  image: Array<{ img_url: string }>;
  post_id: string;
}

export interface beforeWooyeonType {
  data: PostWooyeonType[];
  setWooyeons: (value: React.SetStateAction<Wooyeons[]>) => void;
  wooyeonsRef: MutableRefObject<Wooyeons[]>;
}
