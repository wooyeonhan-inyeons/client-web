import { WrapperOptInterface } from "./component/MainWrapper/interface";

export interface UserState {
  role: "GUEST" | "USER" | "ADMIN";
  user_id: string;
  name: string;
  first: boolean;
  create_at: string;
  access_token?: string;
}

export type themeType = "system" | "light" | "dark";
export interface EnvState {
  theme: themeType;
  backNoti: boolean;
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
  setCategory?: Dispatch<SetStateAction<string>>;
  shaking: boolean;
  setShaking: Dispatch<SetStateAction<boolean>>;
  post: UploadPostType | null;
  setPost: React.Dispatch<React.SetStateAction<UploadPostType | null>>;
}

export interface onlyNavigateInterface {
  navigate?: NavigateFunction;
}

export interface LocationProps {
  latitude: number | undefined;
  longitude: number | undefined;
  zoom: number;
}

// INFO, PRESENT, GROUP, EVENT, DAILY, ADS
export type WooyeonsCategory =
  | "DAILY"
  | "GROUP"
  | "ADS"
  | "INFO"
  | "EVENT"
  | "PRESENT";

export type RangeType = 1 | 50 | 100;

export interface FilterState {
  searchRange: RangeType;
  preferCategory: Array<WooyeonsCategory>;
}
