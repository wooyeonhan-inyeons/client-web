import { ReactElement } from "react";

export interface CategoryItemProps {
  children: { value: ReactElement | string; id: string };

  setFilter: SetterOrUpdater<FilterState>;
  checked: boolean;
}
