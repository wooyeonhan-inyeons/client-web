import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { HeaderProp } from "../intreface";
import { HeaderWrapper } from "../style";

/**
 *
 * @param menus[0] 오직 하나만 들어갈 타이틀
 * @param fn_R `오른쪽에 들어갈 메인 함수
 * @param icon_R `Icon` phosphor꺼
 * @param fn_L `오른쪽에 들어갈 메인 함수
 * @param icon_L `Icon` phosphor꺼
 */

export default function HeaderV3({ headProp }: HeaderProp) {
  return (
    <HeaderWrapper style={{ backgroundColor: headProp.bgColor }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "inherit !important",
        }}
      >
        <Toolbar
          className="centerToolbar"
          sx={{
            backgroundColor: "inherit !important",
            "& *": {
              color: headProp.contentColor
                ? headProp.contentColor + " !important"
                : "inherit",
            },
          }}
        >
          {headProp.fn_L ? (
            <IconButton onClick={headProp.fn_L} className="mainFn">
              {headProp.icon_L && <headProp.icon_L />}
            </IconButton>
          ) : (
            <Box width={34} />
          )}
          <Typography variant="subtitle2">{headProp.menus[0].key}</Typography>
          {headProp.fn_R ? (
            <IconButton onClick={headProp.fn_R} className="mainFn">
              {headProp.icon_R && <headProp.icon_R />}
            </IconButton>
          ) : (
            <Box width={34} />
          )}
        </Toolbar>
      </AppBar>
    </HeaderWrapper>
  );
}
