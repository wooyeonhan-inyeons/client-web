import { ReactElement } from "react";

export interface CategoryItemProps {
  children: ReactElement | string;
  action: () => void;
  toggle?: boolean;
}
