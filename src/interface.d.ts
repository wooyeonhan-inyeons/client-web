import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface UserState {
  role: string;
  id: number;
  name: string;
  first: boolean;
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
  mainFn?: () => void;
  icon?: IconDefinition;
  isForward: boolean;
}
