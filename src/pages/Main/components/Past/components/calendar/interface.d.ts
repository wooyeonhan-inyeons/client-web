import { SearchDateType } from "../../interface";

export interface CalenderInterface {
  setDisplayDate: Dispatch<SetStateAction<string>>;
}

export interface SetSearchDateType {
  setSearchDate: Dispatch<SetStateAction<SearchDateType>>;
}

export interface CalendarProps {
  setDisplayDate: Dispatch<SetStateAction<string>>;
  setSearchDate: Dispatch<SetStateAction<SearchDateType>>;
  existDays: Array<number>;
}
