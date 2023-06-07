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

export interface TodayWooyeonProp {
  todayWooyeons: GetWooyeonsType[];
}

export interface CalendarHeaderProp {
  displayDate: string;
  todayWooyeons: GetWooyeonsType[];
}
