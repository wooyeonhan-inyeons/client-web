import { ReactNode } from "react";

//any는 지양하되, children의 타입은 ReactNode 같이 generic하게 지정하는게 좋다고 함

export interface DrawHeaderProps {
  drawerBleeding: number;
  children: ReactNode;
  open: boolean;
}

interface DrawerProps {
  children: ReactNode;
  headerChildren?: ReactNode;
  open: boolean;
  toggleDrawer: () => void;
  drawerBleeding?: number;
}
