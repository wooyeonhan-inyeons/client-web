export interface SearchDateType {
  year: number;
  month: number;
  date: number;
}

export interface WooyeonsType {
  created_at: string;
  image: Array<imageObj>;
  post_id: string;
  latitude: number;
  longitude: number;
}

export interface LocationProps {
  latitude: number;
  longitude: number;
  zoom: number;
}
