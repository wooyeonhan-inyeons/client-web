import React, { useLayoutEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { HeaderWrapper } from "./style";
import { useLocation } from "react-router-dom";
import { mainPrimary } from "../../common";
import { HeaderProp, menuProp } from "./intreface";
import HeaderV3 from "./components/HearderV3";
import HeaderV2 from "./components/HearderV2";

/**
 *
 * @param menu `{key:string, value:string}`을 가진 배열. 4개 이하 권장
 * @param fn_R `오른쪽에 들어갈 메인 함수
 * @param fn_L `왼쪽에 들어갈 메인 함수
 * @param isForward default=`true` 메뉴 이동의 이전 단계를 허용한다.
 * @param icon_L `Icon` phosphor꺼
 * @param icon_R `Icon` phosphor꺼
 * @param headerType default=`v1` (storybook 참고)
 */

function Header({ headProp, navigate }: HeaderProp) {
  const [idx, setIdx] = useState<number>(0);
  const location = useLocation();

  if (headProp.headerType === undefined) headProp.headerType = "V1";

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

  if (headProp.headerType === "V2") {
    return <HeaderV2 headProp={headProp} navigate={navigate} />;
  }
  if (headProp.headerType === "V3") {
    return <HeaderV3 headProp={headProp} navigate={navigate} />;
  }
  return (
    <HeaderWrapper>
      <AppBar sx={{ background: "none" }}>
        <Toolbar>
          <Box>
            {headProp.menus.map((item) => (
              <Button
                key={item.key}
                onClick={() => handleNavigate(item)}
                className={`header_nav_btn ${
                  item.value === location.pathname ? "active" : ""
                }`}
                sx={{
                  borderBottom:
                    item.value === location.pathname
                      ? `2px solid ${mainPrimary}`
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
                <headProp.icon_L />
              </IconButton>
            )}
            <IconButton onClick={headProp.fn_R} className="mainFn avatarIcon">
              {headProp.icon_R && <headProp.icon_R />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </HeaderWrapper>
  );
}

export default Header;
