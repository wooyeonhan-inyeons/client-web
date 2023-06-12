import { menuProps } from "../../interface";
import { Dispatch, SetStateAction } from "react";

export interface HeaderProp {
  isHeader: boolean;
}

export interface MenuContext {
  menus: MenuProps[];
  setMenus: React.Dispatch<React.SetStateAction<menuProps[]>>;
}

export interface WrapperOptInterface {
  isFullWidth?: boolean;
  isNoneHeadPadding?: boolean;
  noneFullHeight?: boolean;
  scrollable?: boolean;
  isBtn?: boolean;
}

export interface setInitPositionType {
  setInitPosition: React.Dispatch<React.SetStateAction<LocationProps>>;
}
