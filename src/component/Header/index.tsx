import React, { useLayoutEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  createTheme,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headerStyle } from "./style";
import { useLocation } from "react-router-dom";
import { colorSet } from "../../common";
import { HeaderProp, menuProp } from "./intreface";
import { HEAD_TYPE } from "../../interface.d";
import HeaderV3 from "./components/HearderV3";
import HeaderV2 from "./components/HearderV2";

/**
 *
 * @param menu `{key:string, value:string}`을 가진 배열. 4개 이하 권장
 * @param fn_R `오른쪽에 들어갈 메인 함수
 * @param fn_L `왼쪽에 들어갈 메인 함수
 * @param isForward default=`true` 메뉴 이동의 이전 단계를 허용한다.
 * @param icon_L `FontAwesomeIconProps` awesomefont꺼
 * @param icon_R `FontAwesomeIconProps` awesomefont꺼
 * @param headerType default=`v1` (storybook 참고)
 */

const theme = createTheme({
  palette: {
    primary: {
      main: "#D9D9D9",
    },
    secondary: {
      main: "#00A651",
    },
  },
});

function Header({ headProp, navigate }: HeaderProp) {
  const [idx, setIdx] = useState<number>(0);
  const location = useLocation();

  headProp.bgColor = "#fff";
  if (headProp.headerType === undefined) headProp.headerType = HEAD_TYPE.v1;

  const handleNavigate = (prop: menuProp) => {
    const handleIdx = headProp.menus.findIndex(
      (item) => item.value === prop.value
    );

    if (headProp.isForward === false) if (idx < handleIdx) return;
    //동일한 주소로의 이동 방지
    if (location.pathname != prop.value) navigate(prop.value);
  };

  useLayoutEffect(() => {
    //menus[]에 현재의 위치가 포함되어 있을테니 index 찾아 설정
    setIdx(
      headProp.menus.findIndex((item) => item.value === location.pathname)
    );
  }, [location, headProp]);

  if (headProp.headerType === HEAD_TYPE.v2) {
    return <HeaderV2 headProp={headProp} navigate={navigate} />;
  }
  if (headProp.headerType === HEAD_TYPE.v3) {
    return <HeaderV3 headProp={headProp} navigate={navigate} />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Box className="header_root" sx={headerStyle}>
        <AppBar sx={{ background: "none" }}>
          <Toolbar>
            <Box>
              {headProp.menus.map((item) => (
                <Button
                  key={item.key}
                  onClick={() => handleNavigate(item)}
                  className="header_nav_btn"
                  sx={{
                    borderBottom:
                      item.value === location.pathname
                        ? `2px solid ${colorSet.light.primary}`
                        : "2px solid #0000",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    color={
                      item.value === location.pathname ? "secondary" : "primary"
                    }
                  >
                    {item.key}
                  </Typography>
                </Button>
              ))}
            </Box>
            <Box className="right_section">
              {headProp.icon_L && (
                <IconButton onClick={headProp.fn_L} className="mainFn">
                  <FontAwesomeIcon icon={headProp.icon_L} size="xs" />
                </IconButton>
              )}
              <IconButton onClick={headProp.fn_R} className="mainFn">
                {headProp.icon_R && (
                  <FontAwesomeIcon icon={headProp.icon_R} size="xs" />
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
