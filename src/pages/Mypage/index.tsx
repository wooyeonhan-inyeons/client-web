import React, { useLayoutEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { envState, filterState, userState } from "../../recoil";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";
import { ContextInterface, HeaderOptinterface } from "../../interface.d";
import { useOutletContext } from "react-router-dom";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import { CaretLeft, CaretRight, GearSix } from "@phosphor-icons/react";
import Header from "../../component/Header";
import { avatarColors } from "../../common";
import StyledAvatar from "../../component/StyledAvatar";
import { buttonStyle, logoutStyle } from "./style";

export default function Mypage() {
  const { setHeadOpt, navigate, setWrapperOpt } =
    useOutletContext<ContextInterface>();
  const resetUser = useResetRecoilState(userState);
  const resetFilter = useResetRecoilState(filterState);
  const resetEnv = useResetRecoilState(envState);
  const theme = useTheme();
  const headerOption: HeaderOptinterface = {
    menus: [{ key: "마이페이지", value: "/mypage" }],
    icon_L: CaretLeft,
    fn_L: () => navigate(-1),
    icon_R: GearSix,
    fn_R: () => navigate("/mypage/setting"),
    headerType: "V3",
  };
  const wrapperOpt: WrapperOptInterface = {
    isNoneHeadPadding: false,
    isFullWidth: true,
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
    setWrapperOpt(wrapperOpt);
  }, []);

  const handleLogout = () => {
    resetUser();
    resetFilter();
    resetEnv();
  };
  const [user] = useRecoilState(userState);

  const buttonColorTheme = createTheme({
    palette: {
      primary: {
        main: "#ecececc8", // 사용자 정의 색상
        // theme.palette.mode === "light" ? : "#333333"
      },
    },
  });

  return (
    <>
      <Header headProp={headerOption} navigate={navigate} />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: "2rem",
        }}
      >
        <StyledAvatar
          name={user.user_id}
          variant="beam"
          size={120}
          colors={avatarColors}
        />

        {/* <Typography variant="h3">{user.name}</Typography> */}
        <Typography variant="h5" sx={{ fontWeight: "bold", pt: "2rem" }}>
          {user.name ? user.name : "초록초록 매실님"}
        </Typography>
        <Typography variant="body1" sx={{ color: "#B3B3B3" }}>
          {user.email ? user.email : "anon42@gmail.com"}
        </Typography>
        <ThemeProvider theme={buttonColorTheme}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              height: "50vh",
            }}
          >
            <Button
              sx={buttonStyle(theme)}
              variant="contained"
              onClick={() => navigate("/mypage/history")}
            >
              <Typography variant="subtitle2">나의 우연들</Typography>
              <Typography variant="subtitle2">
                00건
                <CaretRight
                  size={15}
                  style={{ position: "relative", top: "2px" }}
                />
              </Typography>
            </Button>
            <Button
              sx={buttonStyle(theme)}
              variant="contained"
              onClick={() => navigate("/previous")}
            >
              <Typography variant="subtitle2">내가 발견한 우연들</Typography>
              <Typography variant="subtitle2">
                00건
                <CaretRight
                  size={15}
                  style={{ position: "relative", top: "2px" }}
                />
              </Typography>
            </Button>
            <Button
              sx={buttonStyle(theme)}
              variant="contained"
              // onClick={}
            >
              <Typography variant="subtitle2">모임 채팅</Typography>
              <Typography variant="subtitle2">
                00건
                <CaretRight
                  size={15}
                  style={{ position: "relative", top: "2px" }}
                />
              </Typography>
            </Button>
            <Button sx={logoutStyle} variant="contained" onClick={handleLogout}>
              로그아웃
            </Button>
          </Box>
        </ThemeProvider>
      </Box>
    </>
  );
}
