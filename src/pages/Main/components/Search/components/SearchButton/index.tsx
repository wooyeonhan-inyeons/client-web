import React from "react";
import { Box, Button, Fab } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { SearchContextInterface, SearchItemProps } from "../../interface";
import { useOutletContext } from "react-router-dom";
import { searchBtnStyle } from "./style";

const SearchItem = ({ open, searchItems }: SearchItemProps) => {
  const { navigate } = useOutletContext<SearchContextInterface>();
  return (
    <Box sx={searchBtnStyle(open)}>
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
        onClick={() => navigate("/add-post")}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Fab>
    </Box>
  );
};

export default SearchItem;
