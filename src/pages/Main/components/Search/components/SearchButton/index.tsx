import React from "react";
import { Box, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchItemProps } from "../../interface";

export const SearchItem1 = ({ open, searchItems }: SearchItemProps) => {
  return (
    <Box
      sx={{
        "& .MuiButton-startIcon svg": {
          fontSize: "15px",
        },
      }}
    >
      <Button
        variant="contained"
        onClick={searchItems}
        startIcon={<FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />}
        style={{
          height: open ? "3.5rem" : "3rem",
          width: open ? "100%" : "11rem",
          minWidth: "10rem",
          maxWidth: "444px",
          borderRadius: open ? "0" : "1.5rem",
          position: "fixed",
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
    </Box>
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
