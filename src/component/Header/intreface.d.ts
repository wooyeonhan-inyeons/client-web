import { NavigateFunction } from "react-router-dom";
import { HeaderOptinterface } from "../../interface";

export interface menuProp {
  key: string;
  value: string;
}

export interface HeaderProp {
  headProp: HeaderOptinterface;
  navigate: NavigateFunction;

  setBtnText?: Dispatch<SetStateAction<string>>; // 현재 헤더바 태그 위치
}
