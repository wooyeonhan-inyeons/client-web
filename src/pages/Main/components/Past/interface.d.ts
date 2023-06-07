import { LocationProps } from "../../../../interface";
import { GetWooyeonsType } from "../Search/interface";

export interface SearchDateType {
  year: number;
  month: number;
  date: number;
}

export interface PreviewProp {
  image: string;
  post_id: string;
  onClick: () => void;
}

export interface CalendarHeaderProp {
  displayDate: string;
  todayWooyeons: WooyeonsType[];
  setPreview: Dispatch<SetStateAction<WooyeonsType>>;
}

export interface WooyeonsType {
  created_at: string;
  image: Array<imageObj>;
  post_id: string;
  latitude: number;
  longitude: number;
}

export interface TodayWooyeonProp {
  todayWooyeons: WooyeonsType[];
  setPreview: Dispatch<SetStateAction<WooyeonsType>>;
}
