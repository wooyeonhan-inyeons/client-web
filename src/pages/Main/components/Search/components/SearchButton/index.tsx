import React from "react";
import { Box, Button, Fab } from "@mui/material";
import { SearchItemProps } from "../../interface";
import { useOutletContext } from "react-router-dom";
import { searchBtnStyle } from "./style";
import { onlyNavigateInterface } from "../../../../../../interface";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react";

const SearchItem = ({ open, searchItems }: SearchItemProps) => {
  const { navigate } = useOutletContext<onlyNavigateInterface>();
  return (
    <Box sx={searchBtnStyle(open)}>
      <Box className="hide_btn" sx={{ width: "48px" }}></Box>
      <Button
        variant="contained"
        onClick={searchItems}
        className="search-btn"
        startIcon={<MagnifyingGlass />}
      >
        우연 찾아보기
      </Button>
      <Fab
        className="hide_btn"
        size="medium"
        onClick={() => navigate("/add-post")}
      >
        <Plus />
      </Fab>
    </Box>
  );
};

export default SearchItem;
