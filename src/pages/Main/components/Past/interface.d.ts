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
