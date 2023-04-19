import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface menuProp {
  key: string;
  value: string;
}
export interface HeaderProp {
  mainFn: () => void;
  menu: menuProp[];
  isForward?: boolean;
  icon: IconDefinition;
}
