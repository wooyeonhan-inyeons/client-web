import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import headerStyle from "../style";
import { HeaderProp } from "../intreface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 *
 * @param menus[0] 오직 하나만 들어갈 타이틀
 * @param fn_R `오른쪽에 들어갈 메인 함수
 * @param icon_R `FontAwesomeIconProps` awesomefont꺼
 */

export default function HeaderV2({ headProp }: HeaderProp) {
  return (
    <Box className="header_root" sx={headerStyle}>
      <AppBar position="static">
        <Toolbar>
          <Typography color="#000" variant="subtitle2">
            {headProp.menus[0].key}
          </Typography>
          <Box className="right_section">
            <IconButton onClick={headProp.fn_R} className="mainFn">
              {headProp.icon_R && (
                <FontAwesomeIcon icon={headProp.icon_R} size="xs" />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
