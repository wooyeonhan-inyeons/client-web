import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface UserState {
  role: string;
  id: number;
  name: string;
  first: boolean;
}
export interface EnvState {
  theme: boolean | "system";
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
  icon_L?: IconDefinition;
  icon_R?: IconDefinition;
  isForward?: boolean;
  headerType?: "V1" | "V2" | "V3";
  bgColor?: string;
}

type SetHeadType = React.Dispatch<React.SetStateAction<HeaderOptinterface>>;
export interface ContextInterface {
  headOpt?: HeaderOptinterface;
  setHeadOpt: SetHeadType;
  navigate?: NavigateFunction;
}

export interface onlyNavigateInterface {
  navigate?: NavigateFunction;
}

export interface LocationProps {
  latitude: number | undefined;
  longitude: number | undefined;
  zoom: number;
}
