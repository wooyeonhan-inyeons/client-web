import React, { useLayoutEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import {
  ContextInterface,
  HEAD_TYPE,
  HeaderOptinterface,
} from "../../../../interface.d";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Box, Stack, Switch, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { envState } from "../../../../recoil";

export default function SettingPage() {
  const { setHeadOpt, navigate } = useOutletContext<ContextInterface>();
  const themeRef = useRef<HTMLButtonElement>(null);
  const [env, setEnv] = useRecoilState(envState);

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "설정", value: "/mypage/setting" }],
    icon_L: faAngleLeft,
    fn_L: () => navigate(-1),
    headerType: HEAD_TYPE.v3,
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
  }, []);

  return (
    <Stack>
      <Typography variant="h4">{env.theme ? "dark" : "light"} mode</Typography>
      <Box>
        다크모드 설정쓰 현재:
        <Switch
          ref={themeRef}
          onChange={() => {
            setEnv((prev) => {
              return { ...prev, theme: !env.theme };
            });
          }}
        />
      </Box>
    </Stack>
  );
}
