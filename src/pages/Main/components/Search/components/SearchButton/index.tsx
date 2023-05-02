import React from "react";
import { Box, Button, Fab } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { SearchItemProps } from "../../interface";
import { useNavigate } from "react-router-dom";

export const SearchItem1 = ({ open, searchItems }: SearchItemProps) => {
  const navegate = useNavigate();
  return (
    <Box
      sx={{
        transform: "translate(-50%, 0)",
        left: "50%",
        bottom: open ? 0 : 76,
        zIndex: open ? 2000 : "initial",
        transition: "all 0.5s cubic-bezier(0, 0.85, 0.58, 1) 0s",
        position: "fixed",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        gap: 3,

        "& .search-btn": {
          transition: "all 0.5s cubic-bezier(0, 0.85, 0.58, 1) 0s",
          height: open ? "3.5rem" : "3rem",
          width: open ? "100%" : "11rem",
          minWidth: "10rem",
          maxWidth: "444px",
          borderRadius: open ? "0" : "1.5rem",
          padding: open ? "2rem 0 3.3rem" : "0 2rem",
        },
        "& .MuiButton-startIcon svg": {
          fontSize: "15px",
        },
        "& .MuiFab-root": {
          backgroundColor: "#ED6729",
          color: "#fff",
        },
        "& .MuiFab-root:hover": {
          backgroundColor: "#ED6729",
          opacity: 0.8,
        },
        "& .hide_btn": {
          display: open ? "none" : "block",
        },
      }}
    >
      <Box className="hide_btn" sx={{ width: "48px" }}></Box>
      <Button
        variant="contained"
        onClick={searchItems}
        className="search-btn"
        startIcon={<FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />}
      >
        우연 찾아보기
      </Button>
      <Fab
        className="hide_btn"
        size="medium"
        onClick={() => navegate("/add-post")}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Fab>
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
