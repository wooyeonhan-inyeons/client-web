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
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { headerStyle } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { colorSet } from "../../common";

interface menuProp {
  key: string;
  value: string;
}
interface HeaderProp {
  mainFn: () => void;
  menu: menuProp[];
  isForward?: boolean;
  icon: IconDefinition;
}
/**
 *
 * @param menu `{key:string, value:string}`을 가진 배열. 4개 이하 권장
 * @param mainFn `오른쪽에 들어갈 메인 함수
 * @param isForward default=`true` 메뉴 이동의 이전 단계를 허용한다.
 * @param icon `string` awesomefont꺼
 */

function Header({
  menu = [{ key: "", value: "" }],
  mainFn,
  icon,
  isForward = true,
}: HeaderProp) {
  const [idx, setIdx] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (prop: menuProp) => {
    const handleIdx = menu.findIndex((item) => item.value === prop.value);
    console.log(idx >= handleIdx);
    if (idx >= handleIdx && isForward) navigate(prop.value);
  };

  useEffect(() => {
    setIdx(menu.findIndex((item) => item.value === location.pathname));
  }, [location]);

  return (
    <Box className="header_root" sx={headerStyle}>
      <AppBar position="static">
        <Toolbar>
          <Box>
            {menu.map((item) => (
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
          <IconButton onClick={mainFn} className="mainFn">
            <FontAwesomeIcon icon={icon} size="xs" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
