import React from "react";
import { Box, Button, CircularProgress, Fab } from "@mui/material";
import { SearchItemProps } from "../../interface";
import { useOutletContext } from "react-router-dom";
import { searchBtnStyle } from "./style";
import { onlyNavigateInterface } from "../../../../../../interface";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
import { mainPrimary } from "../../../../../../common";

const SearchItem = ({ open, searchItems, isLoading }: SearchItemProps) => {
  const { navigate } = useOutletContext<onlyNavigateInterface>();
  return (
    <Box sx={searchBtnStyle(open)}>
      <Box className="hide_btn" sx={{ width: "48px" }}></Box>

      <Button
        variant="contained"
        onClick={searchItems}
        className="search-btn"
        startIcon={!isLoading && <MagnifyingGlass />}
        disabled={isLoading}
        sx={{
          backgroundColor: mainPrimary + "!important",
        }}
      >
        {!isLoading ? (
          "우연 찾아보기"
        ) : (
          <CircularProgress sx={{ color: "#fff" }} size={20} />
        )}
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
