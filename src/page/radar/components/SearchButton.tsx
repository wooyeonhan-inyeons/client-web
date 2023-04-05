import React from "react";
import { Button } from "@mui/material";

interface SearchItemProps {
  open: boolean;
  searchItems: () => void;
}

export const SearchItem1 = ({ open, searchItems }: SearchItemProps) => {
  return (
    <Button
      variant="contained"
      onClick={searchItems}
      startIcon={"🔍"}
      style={{
        height: open ? "3.5rem" : "3rem",
        width: open ? "100%" : "15rem",
        minWidth: "10rem",
        borderRadius: open ? "0" : "1.5rem",
        position: "absolute",
        bottom: open ? 0 : 50,
        padding: open ? "2rem 0 4rem" : "0 2rem",
        left: "50%",
        transform: "translate(-50%, 0)",
        transition: "all 0.5s cubic-bezier(0, 0.85, 0.58, 1) 0s",
        zIndex: open ? 2000 : "initial",
      }}
    >
      우연 찾아보기
    </Button>
  );
};

export const SearchItem2 = ({ open, searchItems }: SearchItemProps) => {
  return (
    <Button
      variant="contained"
      onClick={searchItems}
      startIcon={"🔍"}
      style={{
        height: "3rem",
        borderRadius: "1.5rem",
        position: "absolute",
        bottom: open ? 10 : 50,
        padding: `0 3rem`,
        left: "50%",
        transform: "translate(-50%, 0)",
        transition: "all 0.3s ease-out",
        zIndex: open ? 2000 : "initial",
      }}
    >
      우연 찾아보기
    </Button>
  );
};
