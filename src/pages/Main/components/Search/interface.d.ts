import { NavigateFunction } from "react-router-dom";
import { WooyeonsCategory } from "../../../../interface";
import { Dispatch } from "react";

export interface WooPos {
  x: number;
  y: number;
}
export interface Wooyeons {
  pos: WooPos;
  image: string;
  post_id: string;
}

export interface WooyeonItemProps {
  image: string;
  pos: { x: number; y: number };
  post_id?: string;
  onClick: () => void;
}

export interface SearchItemProps {
  open: boolean;
  searchItems: () => void;
  navigate: NavigateFunction;
  isLoading: boolean;
}

export interface SearchContextInterface {
  navigate: NavigateFunction;
}

export interface wooyeonPositionInterface {
  setWooyeons: (value: React.SetStateAction<Wooyeons[]>) => void;

  distance: number;
  image: string;
  post_id: string;
}

export interface addWooyeonInterface {
  pos: WooPos;
  post_id: string;
  image: string;
  setWooyeons: (value: React.SetStateAction<Wooyeons[]>) => void;
}

export interface positionType {
  latitude: number;
  longitude: number;
}

export interface setPositionType {
  setPosition: Dispatch<SetStateAction<positionType>>;
}

// export interface setPositionType {
//   setPosition: (value: React.SetStateAction<positionType | undefined>) => void;
// }

export interface imageObj {
  img_id: string;
  img_name: string;
  img_url: string;
}

export interface GetWooyeonsType {
  created_at: string;
  image: Array<imageObj>;
  post_id: string;
}

export interface beforeWooyeonType {
  data: GetWooyeonsType[];
  setWooyeons: (value: React.SetStateAction<Wooyeons[]>) => void;
  wooyeonsRef: MutableRefObject<Wooyeons[]>;
}

export interface CategoryFilterInterface {
  filter: FilterState;
  setFilter: SetterOrUpdater<FilterState>;
}

export interface GetWooyeonsInterface {
  position?: {
    latitude: number;
    longitude: number;
  };
  range: number;
  category: Array<WooyeonsCategory>;
  token: string | undefined;
}

export interface RangeDictionary {
  [key: number]: number;
}
