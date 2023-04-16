import React, { useState } from "react";
import { AppBar, Box, Button, SwipeableDrawer, Toolbar } from "@mui/material";

import { useResetRecoilState } from "recoil";
import userState from "../../recoil";
import { Global } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightFromBracket,
  faClover,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { headerStyle } from "./style";

function Header() {
  const resetUser = useResetRecoilState(userState);
  const [sidebar, SetSidebar] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <Global
        styles={{
          ".header_side_nav": {
            zIndex: "1500 !important",
          },
          ".header_side_nav .MuiPaper-root": {
            width: "33%",
            minWidth: "200px",
          },
          ".header_side_nav .MuiButton-text": {
            padding: "1rem 2rem",
            justifyContent: "start",
            color: "#222",
          },
        }}
      />
      <Box className="header_root" sx={headerStyle}>
        <AppBar position="static">
          <Toolbar>
            <Button onClick={() => SetSidebar(true)}>
              <FontAwesomeIcon icon={faUser} size="xl" />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <SwipeableDrawer
        anchor="right"
        open={sidebar}
        onClose={() => SetSidebar(false)}
        onOpen={() => SetSidebar(true)}
        className="header_side_nav"
      >
        <Button
          startIcon={<FontAwesomeIcon icon={faHome} />}
          onClick={() => navigate("/")}
        >
          홈
        </Button>
        <Button
          startIcon={<FontAwesomeIcon icon={faClover} />}
          onClick={() => navigate("/search")}
        >
          레이더
        </Button>
        <Button
          startIcon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
          onClick={resetUser}
        >
          로그아웃
        </Button>
      </SwipeableDrawer>
    </>
  );
}

export default Header;
