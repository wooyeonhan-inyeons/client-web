import React, { useEffect, useRef, useState } from "react";
import { useDrawer } from "../../../../hook/useDrawer";
import { Box, Typography, Zoom, useTheme } from "@mui/material";
import WooyeonItem from "./components/WooyeonItem";
import Categories from "./components/Categories";
import RangeBar from "./components/RangeBar";
import { Global } from "@emotion/react";
import radarPageStyle from "./style";
import {
  SearchContextInterface,
  Wooyeons,
  addWooyeonInterface,
} from "./interface";
import { StyledBox } from "../../../../common";
import SearchItem from "./components/SearchButton";
import { useOutletContext } from "react-router-dom";
import { tempWooyeons, wooyeonPositioning } from "./utils";

const Search = () => {
  const { open, Drawer, toggleDrawer } = useDrawer();
  const [wooyeons, setWooyeons] = useState<Wooyeons[]>([]);
  const wooyeonsRef = useRef<Wooyeons[]>([]); //매 업데이트를 추적하기 위해 ref 사용
  const theme = useTheme();
  const { navigate } = useOutletContext<SearchContextInterface>();

  const searchItems = () => {
    if (wooyeonsRef.current.length > 5) setWooyeons([]);
    if (open) toggleDrawer();

    tempWooyeons.map((item, index) => {
      setTimeout(() => {
        wooyeonPositioning({
          addWooyeon,
          wooyeonsRef,
          distance: item.id,
          img: item.img,
        });
      }, 100 * index + 50 * Math.random());
    });
  };

  function addWooyeon({ pos, img }: addWooyeonInterface) {
    const newWooyeon = {
      pos: pos,
      name: img,
    };
    setWooyeons((prevWooyeons) => [...prevWooyeons, newWooyeon]);
  }

  useEffect(() => {
    wooyeonsRef.current = wooyeons;
  }, [wooyeons]);

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <>
      {/* 꽉찬 화면을 위한 padding */}
      <Global
        styles={{
          ".globalContainer>.MuiBox-root": { padding: 0 },
          ".use_drawer > .MuiPaper-root": {
            paddingBottom: "6rem",
          },
        }}
      />
      <Box sx={radarPageStyle}>
        <div className="radar_circle">
          <div>
            <div />
          </div>
        </div>
        <Typography variant="h5">🍀</Typography>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            aspectRatio: "1 / 1",
          }}
        >
          {wooyeons.map((item) => (
            <Zoom
              key={item.name}
              in={true}
              timeout={transitionDuration}
              unmountOnExit
            >
              <WooyeonItem name={item.name} pos={item.pos} />
            </Zoom>
          ))}
        </Box>
      </Box>
      <SearchItem open={open} searchItems={searchItems} navigate={navigate} />
      <Drawer open={open} toggleDrawer={toggleDrawer}>
        <StyledBox>
          <Typography variant="h6">카테고리 선택</Typography>
          <Categories />
          <Typography variant="h6">범위 설정</Typography>
          <RangeBar />
        </StyledBox>
      </Drawer>
    </>
  );
};

export default Search;
