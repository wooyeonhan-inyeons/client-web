export interface setViewStateType {
  setViewState: (
    value: React.SetStateAction<LocationProps | undefined>
  ) => void;
}

export interface Asddress_components {
  long_name: string;
  short_name: string;
  types: string[];
}
