import { ReactElement } from "react";

export interface CategoryItemProps {
  children: { value: ReactElement | string; id: string };
  filter: FilterState;
  setFilter: SetterOrUpdater<FilterState>;
  checked: boolean;
}
