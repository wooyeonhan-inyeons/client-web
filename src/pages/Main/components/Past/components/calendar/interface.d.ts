import { SearchDateType } from "../../interface";

export interface CalenderInterface {
  setDisplayDate: Dispatch<SetStateAction<string>>;
}

export interface SetSearchDateType {
  setSearchDate: Dispatch<SetStateAction<SearchDateType>>;
}
