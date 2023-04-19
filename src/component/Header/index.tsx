import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headerStyle } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { colorSet } from "../../common";
import { HeaderProp, menuProp } from "./intreface";

/**
 *
 * @param menu `{key:string, value:string}`을 가진 배열. 4개 이하 권장
 * @param mainFn `오른쪽에 들어갈 메인 함수
 * @param isForward default=`true` 메뉴 이동의 이전 단계를 허용한다.
 * @param icon `string` awesomefont꺼
 */

function Header({ headProp }: HeaderProp) {
  const [idx, setIdx] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (prop: menuProp) => {
    const handleIdx = headProp.menus.findIndex(
      (item) => item.value === prop.value
    );

    if (!headProp.isForward) {
      if (idx < handleIdx) return;
    }
    //동일한 주소로의 이동 방지
    if (location.pathname != prop.value) navigate(prop.value);
  };

  useEffect(() => {
    //menus에 현재의 위치가 포함되어 있을테니 index 찾아 설정
    setIdx(
      headProp.menus.findIndex((item) => item.value === location.pathname)
    );
  }, [location]);

  return (
    <Box className="header_root" sx={headerStyle}>
      <AppBar position="static">
        <Toolbar>
          <Box>
            {headProp.menus.map((item) => (
              <Button
                key={item.key}
                onClick={() => handleNavigate(item)}
                sx={{
                  borderBottom:
                    item.value === location.pathname
                      ? `2px solid ${colorSet.light.primary}`
                      : "2px solid #0000",
                }}
              >
                <Typography variant="subtitle2">{item.key}</Typography>
              </Button>
            ))}
          </Box>
          <IconButton onClick={headProp.mainFn} className="mainFn">
            {headProp.icon && (
              <FontAwesomeIcon icon={headProp.icon} size="xs" />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
