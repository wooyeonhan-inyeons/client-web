import { WrapperOptInterface } from "./component/MainWrapper/interface";

export interface UserState {
  role: "GUEST" | "USER" | "ADMIN";
  id: number;
  name: string;
  first: boolean;
}

export type themeType = "system" | "light" | "dark";
export interface EnvState {
  theme: themeType;
  distance?: number;
}

export interface menuProps {
  key: string;
  value: string;
}

export interface ThemeProps {
  theme?: Theme;
}

export interface HeaderOptinterface {
  menus: menuProps[];
  fn_L?: () => void;
  fn_R?: () => void;
  icon_L?: Icon;
  icon_R?: Icon | AvatarComponent;
  isForward?: boolean;
  headerType?: "V1" | "V2" | "V3";
  bgColor?: string;
  contentColor?: string;
}

type SetHeadType = React.Dispatch<React.SetStateAction<HeaderOptinterface>>;

type SetWrapperType = React.Dispatch<React.SetStateAction<WrapperOptInterface>>;

export interface ContextInterface {
  headOpt?: HeaderOptinterface;
  setHeadOpt: SetHeadType;
  navigate?: NavigateFunction;
  setWrapperOpt: SetWrapperType;
}

export interface onlyNavigateInterface {
  navigate?: NavigateFunction;
}

export interface LocationProps {
  latitude: number | undefined;
  longitude: number | undefined;
  zoom: number;
}
