import React, { useState } from "react";
import { useDrawer } from "../../hook/useDrawer";
import { StyledBox } from "../../hook/components/common";
import { Box, Typography } from "@mui/material";

import WooyeonItem from "./components/WooyeonItem";
import { SearchItem1 } from "./components/SearchButton";
import Category from "./components/Category";
import RangeBar from "./components/RangeBar";
import { radarPage } from "./style";

interface WooPos {
  x: number;
  y: number;
}
interface Wooyeons {
  pos: WooPos;
  name: string;
}

const Radar = () => {
  const { open, Drawer, toggleDrawer } = useDrawer();
  const [wooyeons, setWooyeons] = useState<Wooyeons[]>([]);

  const searchItems = () => {
    if (open) toggleDrawer();
    console.log("우연찾아보기");
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

  //130, 255, 370
  function getRandomCircleEdgeCoordinates(radius: number): WooPos {
    const angle = Math.random() * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  }

  function wooyeonPositioning() {
    const pos = getRandomCircleEdgeCoordinates(255);

    if (wooyeons.length === 0) {
      addWooyeon(pos);
    } else {
      const isInRange = wooyeons.some(function (item) {
        const distance = Math.sqrt(
          (pos.x - item.pos.x) * (pos.x - item.pos.x) +
            (pos.y - item.pos.y) * (pos.y - item.pos.y)
        );

        return distance < 100;
      });

      if (!isInRange) {
        addWooyeon(pos);
      }
    }
  }

  return (
    <>
      <Box sx={radarPage}>
        <div className="radar_circle">
          <div>
            <div />
          </div>
        </div>
        <Typography variant="h5">🍅</Typography>
        {wooyeons.map((item) => (
          <WooyeonItem key={item.name} name={item.name} pos={item.pos} />
        ))}
      </Box>
      <SearchItem1 open={open} searchItems={searchItems} />
      {/* <SearchItem2 open={open} searchItems={searchItems} /> */}
      <Drawer open={open} toggleDrawer={toggleDrawer}>
        <StyledBox>
          <Typography variant="h6">카테고리 선택</Typography>
          <Category />
          <Typography variant="h6">범위 설정</Typography>
          <RangeBar />
        </StyledBox>
      </Drawer>
    </>
  );
};

export default Radar;
