export enum Category {
  Daily = "일상",
  Metting = "모임",
  Commercial = "광고",
  Information = "정보",
  Event = "이벤트",
  Gift = "선물",
}

export interface OneCategoryType {
  id: Category;
  selected: boolean;
  fn_print: () => void;
}

export type CategoryArr = Array<OneCategoryType>;
