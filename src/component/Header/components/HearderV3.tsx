import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { HeaderProp } from "../intreface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderWrapper } from "../style";

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
    <HeaderWrapper>
      <AppBar position="fixed" sx={{ backgroundColor: headProp.bgColor }}>
        <Toolbar className="centerToolbar">
          {headProp.icon_L ? (
            <IconButton onClick={headProp.fn_L} className="mainFn">
              <FontAwesomeIcon icon={headProp.icon_L} size="xs" />
            </IconButton>
          ) : (
            <Box width={34} />
          )}
          <Typography variant="subtitle2">{headProp.menus[0].key}</Typography>
          {headProp.fn_R ? (
            <IconButton onClick={headProp.fn_R} className="mainFn">
              {headProp.icon_R && (
                <FontAwesomeIcon icon={headProp.icon_R} size="xs" />
              )}
            </IconButton>
          ) : (
            <Box width={34} />
          )}
        </Toolbar>
      </AppBar>
    </HeaderWrapper>
  );
}

export default React.memo(HeaderV3);
