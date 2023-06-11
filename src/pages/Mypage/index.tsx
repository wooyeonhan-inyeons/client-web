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
import { useNavigate, useOutletContext } from "react-router-dom";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import { CaretLeft, CaretRight, GearSix } from "@phosphor-icons/react";
import Header from "../../component/Header";
import Avatar from "boring-avatars";
import { avatarColors, secondary } from "../../common";

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
        main: "#333333", // 사용자 정의 색상
      },
    },
  });

  return (
    <>
      <Header headProp={headerOption} navigate={navigate} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: "5rem",
        }}
      >
        <Avatar
          name={user.user_id}
          variant="beam"
          size={120}
          colors={avatarColors}
        />

        {/* <Typography variant="h3">{user.name}</Typography> */}
        <Typography variant="h5" sx={{ fontWeight: "bold", pt: "2rem" }}>
          초록초록 매실님
        </Typography>
        <Typography variant="body1" sx={{ color: "#B3B3B3" }}>
          {user.email ? user.email : "anon42@gmail.com"}
        </Typography>
        {/* <Button fullWidth onClick={() => navigate("/mypage/edit")}>
            프로필 수정
          </Button> */}
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
              sx={{
                width: "100%",
                py: "0.8rem",
                px: "1.4rem",
                mb: "0.5rem",
                borderRadius: "10px",
                backgroundColor:
                  theme.palette.mode == "light" ? "#EDF1EE" : "#444444",
                color: theme.palette.mode == "light" ? "black" : "white",
                display: "flex",
                justifyContent: "space-between",
                boxShadow: `1px 2px 5px ${
                  theme.palette.mode == "light" ? "#ababab85" : "#222222"
                }`,
              }}
              variant="contained"
              // color=
              // onClick={}
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
              sx={{
                width: "100%",
                py: "0.8rem",
                px: "1.4rem",
                mb: "0.5rem",
                borderRadius: "10px",
                backgroundColor:
                  theme.palette.mode == "light" ? "#EDF1EE" : "#444444",
                color: theme.palette.mode == "light" ? "black" : "white",
                display: "flex",
                justifyContent: "space-between",
                boxShadow: `1px 2px 5px ${
                  theme.palette.mode == "light" ? "#ababab85" : "#222222"
                }`,
              }}
              variant="contained"
              // color=
              onClick={() => navigate("/previous")}
            >
              <Typography variant="subtitle2">남이 발견한 우연들</Typography>
              <Typography variant="subtitle2">
                00건
                <CaretRight
                  size={15}
                  style={{ position: "relative", top: "2px" }}
                />
              </Typography>
            </Button>
            <Button
              sx={{
                width: "100%",
                py: "0.8rem",
                px: "1.4rem",
                mb: "0.5rem",
                borderRadius: "10px",
                backgroundColor:
                  theme.palette.mode == "light" ? "#EDF1EE" : "#444444",
                color: theme.palette.mode == "light" ? "black" : "white",
                display: "flex",
                justifyContent: "space-between",
                boxShadow: `1px 2px 5px ${
                  theme.palette.mode == "light" ? "#ababab85" : "#222222"
                }`,
              }}
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
            <Button
              sx={{
                width: "100%",
                borderRadius: "10px",
                my: "1rem",
                backgroundColor: secondary,
              }}
              variant="contained"
              onClick={handleLogout}
            >
              로그아웃
            </Button>
          </Box>
        </ThemeProvider>
      </Box>
    </>
  );
}
