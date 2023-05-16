import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDrawer } from "../../../../hook/useDrawer";
import { Box, Typography } from "@mui/material";
import WooyeonItem from "./components/WooyeonItem";
import Categories from "./components/Categories";
import RangeBar from "./components/RangeBar";
import { Global } from "@emotion/react";
import searchPageStyle from "./style";
import { Wooyeons, positionType } from "./interface";
import SearchItem from "./components/SearchButton";
import { useOutletContext } from "react-router-dom";
import { afterFetchWoo, getCurrentLocation } from "./utils";
import { ContextInterface } from "../../../../interface";
import { getPost } from "./api";
import { useMutation } from "react-query";

const initPosition = {
  latitude: 35.8527,
  longitude: 128.4971,
};

const Search = () => {
  const { navigate } = useOutletContext<ContextInterface>();
  const { open, Drawer, toggleDrawer } = useDrawer();
  const [wooyeons, setWooyeons] = useState<Wooyeons[]>([]);
  const wooyeonsRef = useRef<Wooyeons[]>([]); //매 업데이트를 추적하기 위해 ref 사용
  const [position, setPosition] = useState<positionType | undefined>(undefined);
  const positionRef = useRef<positionType | undefined>(initPosition);

  const searchItems = () => {
    if (wooyeonsRef.current.length > 5) setWooyeons([]);
    if (open) toggleDrawer();

    getWoo();
  };

  useEffect(() => {
    if (positionRef.current === initPosition) {
      getCurrentLocation({ setPosition });
    }
    getWoo();
  }, [navigator]);

  useLayoutEffect(() => {
    wooyeonsRef.current = wooyeons;
  }, []);

  const { mutate: getWoo } = useMutation("get", () => getPost({ position }), {
    // suspense: true,
    // refetchOnWindowFocus: false,
    onSuccess: (data) => {
      afterFetchWoo({ data, setWooyeons, wooyeonsRef });
    },
  });

  return (
    <>
      <Global
        styles={{
          ".use_drawer > .MuiPaper-root": {
            paddingBottom: "6rem",
          },
        }}
      />
      <Box sx={searchPageStyle}>
        <div className="radar_circle">
          <div>
            <div />
          </div>
        </div>
        <Typography variant="h5" sx={{ marginBottom: "40px" }}>
          🍀
        </Typography>
        <Box className="wooyeonArea">
          {wooyeons.map((item) => (
            <WooyeonItem
              key={item.image}
              image={item.image}
              pos={item.pos}
              onClick={() => navigate(`detail/0`)}
            />
          ))}
        </Box>
      </Box>
      <SearchItem open={open} searchItems={searchItems} navigate={navigate} />
      <Drawer open={open} toggleDrawer={toggleDrawer}>
        <Box>
          <Typography variant="h6">카테고리 선택</Typography>
          <Categories />
          <Typography variant="h6">범위 설정</Typography>
          <RangeBar />
        </Box>
      </Drawer>
    </>
  );
};

export default Search;
