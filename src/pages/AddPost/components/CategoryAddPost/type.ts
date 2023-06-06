import { Dispatch, SetStateAction } from "react";

export enum Category {
  DAILY = "일상",
  GROUP = "모임",
  ADS = "광고",
  INFO = "정보",
  EVENT = "이벤트",
  PRESENT = "선물",
}

export interface OneCategoryType {
  id: Category;
  selected: boolean;
  fn_print: () => void;
}

export type CategoryArr = Array<OneCategoryType>;

export interface ShakingProp {
  shaking: boolean;
  setShaking: Dispatch<SetStateAction<boolean>>;
}
