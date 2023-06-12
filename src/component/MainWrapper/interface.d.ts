import { menuProps } from "../../interface";

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
export interface Address_components {
  long_name: string;
  short_name: string;
  types: string[];
}
