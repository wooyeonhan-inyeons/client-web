import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ContextInterface, HeaderOptinterface } from "../../../../interface.d";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { envState } from "../../../../recoil";

export default function SettingPage() {
  const { setHeadOpt, navigate } = useOutletContext<ContextInterface>();
  const themeRef = useRef<HTMLButtonElement>(null);
  const [isLight, setIsLight] = useState(true);
  const [env, setEnv] = useRecoilState(envState);

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "설정", value: "/mypage/setting" }],
    icon_L: faAngleLeft,
    fn_L: () => navigate(-1),
    headerType: "V3",
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
  }, []);

  useEffect(() => {
    console.log("switch!");

    // setEnv((prev) => {
    //   return { ...prev, theme: !env.theme };
    // });
  }, [isLight]);

  return (
    <RadioGroup defaultValue="system">
      <Stack>
        <Typography variant="h4">
          {env.theme ? "dark" : "light"} mode
        </Typography>
        <Box>
          다크모드 설정쓰 현재:
          <Switch
            ref={themeRef}
            value={env.theme}
            onChange={() => {
              setIsLight((prev) => {
                return !prev;
              });
              setEnv((prev) => {
                return { ...prev, theme: !env.theme };
              });
            }}
          />
        </Box>
        <FormControlLabel
          value="system"
          control={<Radio />}
          label="시스템 설정 모드"
        />
        <FormControlLabel
          value="light"
          control={<Radio />}
          label="라이트 모드"
        />
        <FormControlLabel value="dark" control={<Radio />} label="다크 모드" />
      </Stack>
    </RadioGroup>
  );
}
