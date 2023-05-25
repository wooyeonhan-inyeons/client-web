import React, { useLayoutEffect } from "react";
import { useOutletContext } from "react-router-dom";
import {
  ContextInterface,
  EnvState,
  HeaderOptinterface,
  themeType,
} from "../../../../interface.d";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
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
        //flutter에서만 setItem을 사용하여 web에서 관련 코드 없음
        if (localStorage.getItem("isFlutter") === "1") {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          Theming.postMessage(e.target.value);
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        Theming.postMessage(e.target.value);
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
