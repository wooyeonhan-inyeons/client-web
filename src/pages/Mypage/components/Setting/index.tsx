import React, { useLayoutEffect } from "react";
import { useOutletContext } from "react-router-dom";
import {
  ContextInterface,
  EnvState,
  HeaderOptinterface,
  themeType,
} from "../../../../interface.d";
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
import { X } from "@phosphor-icons/react";

export default function SettingPage() {
  const { setHeadOpt, navigate } = useOutletContext<ContextInterface>();

  const [env, setEnv] = useRecoilState(envState);

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "설정", value: "/mypage/setting" }],
    icon_R: X,
    fn_R: () => navigate(-1),
    headerType: "V2",
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
  }, []);

  const handleBrightTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnv((prev: EnvState) => {
      return {
        ...prev,
        theme: e.target.value as themeType,
      };
    });
    //flutter에서만 setItem을 사용하여 web에서 관련 코드 없음
    if (localStorage.getItem("isFlutter") === "1") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      Theming.postMessage(e.target.value);
    }
  };

  const handleBackNoti = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setEnv((prev: EnvState) => {
      console.log("prev", prev);
      return {
        ...prev,
        backNoti: !prev.backNoti,
      };
    });
  };

  return (
    <RadioGroup
      defaultValue="system"
      value={env.theme}
      onChange={handleBrightTheme}
    >
      <Stack spacing={1}>
        <Typography variant="h5">테마 변경</Typography>
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
        <Typography variant="h5">알람 수신 여부</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: "1rem",
          }}
        >
          <Typography variant="body1">백그라운드 알림</Typography>
          <Switch
            checked={env.backNoti}
            value="backgroundNotification"
            onChange={handleBackNoti}
          />
        </Box>
        <Typography variant="body2" sx={{ px: "1rem" }}>
          일정한 간격으로 내 주변에 있는 우연들을 알려드립니다.
        </Typography>
      </Stack>
    </RadioGroup>
  );
}
