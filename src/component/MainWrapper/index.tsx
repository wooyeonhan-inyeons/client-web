import React, { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { HeaderOptinterface, LocationProps } from "../../interface";
import { HeaderProp, WrapperOptInterface } from "./interface";
import Header from "../Header";
import { StyledContainer } from "./style";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import { getCurrentGeocode, getCurrentLocation } from "./utils";

export const defaultPosition = {
  longitude: 127.9068,
  latitude: 35.6699,
  zoom: 6,
};
function MainWrapper({ isHeader }: HeaderProp) {
  const [user] = useRecoilState(userState);
  const [headOpt, setHeadOpt] = useState<HeaderOptinterface>({
    menus: [{ key: "", value: "" }],
    isForward: true,
  });
  const navigate = useNavigate();

  const [wrapperOpt, setWrapperOpt] = useState<WrapperOptInterface>({
    isFullWidth: false,
    isNoneHeadPadding: false,
    noneFullHeight: false,
    scrollable: false,
    isBtn: false,
  });

  const positionRef = useRef<LocationProps | undefined>(defaultPosition);
  const [initPosition, setInitPosition] =
    useState<LocationProps>(defaultPosition);
  const [initGeocode, setInitGeocode] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (positionRef.current === defaultPosition)
      getCurrentLocation({ setInitPosition });
  }, []);

  useEffect(() => {
    if (initPosition !== defaultPosition) {
      getCurrentGeocode(initPosition).then((e) => {
        setInitGeocode(e.reverse().join(" "));
      });
    }
    console.log("역지오코드");
  }, [initPosition]);

  return (
    <>
      {isHeader && <Header headProp={headOpt} navigate={navigate} />}
      <StyledContainer
        className="globalContainer"
        maxWidth="xs"
        sx={{
          pl: wrapperOpt.isFullWidth ? 0 : 2,
          pr: wrapperOpt.isFullWidth ? 0 : 2,
          "@media (min-width: 600px)": {
            pl: wrapperOpt.isFullWidth ? 0 : 2,
            pr: wrapperOpt.isFullWidth ? 0 : 2,
          },
        }}
      >
        <Box
          sx={{
            maxHeight: "100vh",
            touchAction: "none",
            overflowX: wrapperOpt.scrollable ? "scroll" : "hidden",
            height: wrapperOpt.noneFullHeight ? "auto" : "100vh",
            pt: wrapperOpt.isNoneHeadPadding ? 0 : 7,
            "@media (min-width: 600px)": {
              pt: wrapperOpt.isNoneHeadPadding ? 0 : 8,
            },
            pb: wrapperOpt.isBtn ? 8 : 0,
          }}
        >
          <Outlet
            context={{
              headOpt,
              setHeadOpt,
              navigate,
              setWrapperOpt,
              user,
              initPosition,
              initGeocode,
            }}
          />
        </Box>
      </StyledContainer>
    </>
  );
}

export default MainWrapper;
