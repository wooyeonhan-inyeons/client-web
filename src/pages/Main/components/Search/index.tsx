import React, { useEffect, useState } from "react";
import { useDrawer } from "../../../../hook/useDrawer";
import { Box, Typography } from "@mui/material";
import WooyeonItem from "./components/WooyeonItem";
import Categories from "./components/Categories";
import RangeBar from "./components/RangeBar";
import { Global } from "@emotion/react";
import { forUntouchableStyle, searchPageStyle } from "./style";
import { Wooyeons, positionType } from "./interface";
import SearchItem from "./components/SearchButton";
import { useOutletContext } from "react-router-dom";
import { getCurrentLocation, wooyeonPositioning } from "./utils";
import { ContextInterface } from "../../../../interface";
import { getPost } from "./api";
import { useMutation } from "react-query";
import { filterState } from "../../../../recoil";
import { useRecoilState } from "recoil";
import Lottie from "lottie-react";
import thinkingAnimation from "../../../../asset/thinking.json";

const Search = () => {
  const { navigate } = useOutletContext<ContextInterface>();
  const { open, Drawer, toggleDrawer } = useDrawer();
  const [wooyeons, setWooyeons] = useState<Wooyeons[]>([]);
  const [position, setPosition] = useState<positionType | undefined>(undefined);
  const [filter, setFilter] = useRecoilState(filterState);

  //drawer를 올릴 떄 터치 이벤트를 사용할 수 없는 환경을 위함
  const isTouchDevice = "ontouchstart" in window;

  const searchItems = () => {
    if (wooyeons.length > 5) setWooyeons([]);
    if (open) toggleDrawer();

    getWooyeons();
  };

  useEffect(() => {
    if (position !== undefined) getWooyeons();
    else console.log("위치 찾는 중...");
  }, [position]);

  useEffect(() => {
    if (position === undefined) getCurrentLocation({ setPosition });
  }, [navigator]);

  const { mutate: getWooyeons, isLoading } = useMutation(
    "get",
    () =>
      getPost({
        // position: { latitude: 35.8527, longitude: 128.4971 },
        position: position,
        range: filter.searchRange,
        category: filter.preferCategory,
      }),
    {
      onMutate() {
        //기존 우연들 초기화와 함께 시작
        setWooyeons([]);
      },
      onSuccess: (data) => {
        console.log(data);
        if (data !== undefined)
          data.forEach((item, index) => {
            setTimeout(() => {
              wooyeonPositioning({
                setWooyeons,
                post_id: item.post_id,
                distance: 70 * Math.random(),
                image: item.image[0].img_url,
              });
            }, 100 * index + 50 * Math.random());
          });
      },
    }
  );

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
        {position !== undefined && !isLoading && wooyeons.length === 0 ? (
          //우연이 없을 떄
          <Box className="loadingWooyeon">
            <Lottie
              className="lottie"
              animationData={thinkingAnimation}
              loop={true}
            />
            <Typography variant="body1" sx={{ marginBottom: "40px" }}>
              근처에 확인할 수 있는 <br />
              우연이 존재하지 않아요.
            </Typography>
          </Box>
        ) : (
          <>
            <Typography variant="h5" sx={{ marginBottom: "40px" }}>
              🍀
            </Typography>
            <Box className="wooyeonArea">
              {wooyeons.map((item, index) => (
                <WooyeonItem
                  post_id={item.post_id}
                  key={item.image + index.toString()}
                  image={item.image}
                  pos={item.pos}
                  onClick={() => navigate(`detail/${item.post_id}`)}
                />
              ))}
            </Box>
          </>
        )}
      </Box>
      <SearchItem
        open={open}
        searchItems={searchItems}
        navigate={navigate}
        isLoading={isLoading === true || position === undefined}
      />
      {
        //터치 이벤트를 사용할 수 없는 환경을 위함
        !isTouchDevice && (
          <Box onClick={toggleDrawer} sx={forUntouchableStyle} />
        )
      }
      <Drawer open={open} toggleDrawer={toggleDrawer} drawerBleeding={65}>
        <Box>
          <Typography variant="h6">카테고리 선택</Typography>
          <Categories filter={filter} setFilter={setFilter} />
          <Typography variant="h6">범위 설정</Typography>
          <RangeBar />
        </Box>
      </Drawer>
    </>
  );
};

export default Search;
