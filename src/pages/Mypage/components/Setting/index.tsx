import React, { useLayoutEffect } from "react";
import { useOutletContext } from "react-router-dom";
import {
  ContextInterface,
  EnvState,
  HeaderOptinterface,
  themeType,
} from "../../../../interface.d";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { envState } from "../../../../recoil";

export default function SettingPage() {
  const { setHeadOpt, navigate } = useOutletContext<ContextInterface>();

  const [env, setEnv] = useRecoilState(envState);

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "설정", value: "/mypage/setting" }],
    icon_R: faXmark,
    fn_R: () => navigate(-1),
    headerType: "V2",
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
  }, []);

  return (
    <RadioGroup
      defaultValue="system"
      value={env.theme}
      onChange={(e) => {
        setEnv((prev: EnvState) => {
          return {
            ...prev,
            theme: e.target.value as themeType,
          };
        });
      }}
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
      </Stack>
    </RadioGroup>
  );
}
