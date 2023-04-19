import { menuProps } from "../../interface";

export interface HeaderProp {
  isHeader: boolean;
}

export interface MenuContext {
  menus: MenuProps[];
  setMenus: React.Dispatch<React.SetStateAction<menuProps[]>>;
}
