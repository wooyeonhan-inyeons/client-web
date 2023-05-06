import React, { useState } from "react";
import { useDrawer } from "../../../../hook/useDrawer";
import { Box, Typography } from "@mui/material";
import WooyeonItem from "./components/WooyeonItem";
import Categories from "./components/Categories";
import RangeBar from "./components/RangeBar";
import { Global } from "@emotion/react";
import radarPageStyle from "./style";
import { WooPos, Wooyeons } from "./interface";
import { StyledBox } from "../../../../common";
import SearchItem from "./components/SearchButton";
import { useOutletContext } from "react-router-dom";
import { onlyNavigateInterface } from "../../../../interface";

const Search = () => {
  const { open, Drawer, toggleDrawer } = useDrawer();
  const [wooyeons, setWooyeons] = useState<Wooyeons[]>([]);
  const { navigate } = useOutletContext<onlyNavigateInterface>();

  const searchItems = () => {
    // if (open)
    toggleDrawer();
    console.log("[임시] 우연찾아보기");
    wooyeonPositioning();
  };

  function addWooyeon(pos: WooPos) {
    const random = Date.now();
    const newWooyeon = {
      pos: pos,
      name: random.toString(),
    };
    setWooyeons((prevWooyeons) => [...prevWooyeons, newWooyeon]);
  }

  //14.5, 31, 45
  function getRandomCircleEdgeCoordinates(distance: number): WooPos {
    let radius = 14.5;
    if (distance <= 30) radius = 31;
    else if (distance <= 10) radius = 14.5;

    const angle = Math.random() * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  }

  function wooyeonPositioning() {
    const pos = getRandomCircleEdgeCoordinates(500);

    if (wooyeons.length === 0) {
      addWooyeon(pos);
    } else {
      const isInRange = wooyeons.some(function (item) {
        const distance = Math.sqrt(
          (pos.x - item.pos.x) * (pos.x - item.pos.x) +
            (pos.y - item.pos.y) * (pos.y - item.pos.y)
        );

        console.log("다른거 찾는 중");
        return distance < 10;
      });

      if (!isInRange) {
        addWooyeon(pos);
      } else {
        // 겹치면 다른 값으로 재귀 호출
        wooyeonPositioning();
      }
    }
  }
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
        <Typography variant="h5">🍅</Typography>
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
            <WooyeonItem key={item.name} name={item.name} pos={item.pos} />
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
