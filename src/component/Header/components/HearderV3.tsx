import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import headerStyle from "../style";
import { HeaderProp } from "../intreface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 *
 * @param menus[0] 오직 하나만 들어갈 타이틀
 * @param fn_R `오른쪽에 들어갈 메인 함수
 * @param icon_R `FontAwesomeIconProps` awesomefont꺼*
 * @param fn_L `오른쪽에 들어갈 메인 함수
 * @param icon_L `FontAwesomeIconProps` awesomefont꺼
 */

function HeaderV3({ headProp }: HeaderProp) {
  return (
    <Box className="header_root" sx={headerStyle}>
      <AppBar position="fixed" sx={{ backgroundColor: headProp.bgColor }}>
        <Toolbar className="centerToolbar">
          <IconButton onClick={headProp.fn_R} className="mainFn">
            {headProp.icon_R && (
              <FontAwesomeIcon icon={headProp.icon_R} size="xs" />
            )}
          </IconButton>
          <Typography color="#000" variant="subtitle2">
            {headProp.menus[0].key}
          </Typography>
          <Box width={34} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default React.memo(HeaderV3);
