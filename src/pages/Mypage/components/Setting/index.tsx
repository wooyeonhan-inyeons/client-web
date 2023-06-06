import React, { memo, useLayoutEffect } from "react";
import { useOutletContext } from "react-router-dom";
import {
  ContextInterface,
  EnvState,
  HeaderOptinterface,
  themeType,
} from "../../../../interface.d";
import {
  Box,
  Divider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { envState } from "../../../../recoil";
import { CircleHalf, Moon, Sun, X } from "@phosphor-icons/react";
import { mainPrimary } from "../../../../common";
import { StyledSwitch } from "../../../../component/StyledSwitch";

const SettingPage = () => {
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

  const handleBrightTheme = (
    e: React.MouseEvent<HTMLElement>,
    value: string | null
  ) => {
    setEnv((prev: EnvState) => {
      return {
        ...prev,
        theme: value as themeType,
      };
    });
    //flutter에서만 setItem을 사용하여 web에서 관련 코드 없음
    if (localStorage.getItem("isFlutter") === "1") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      Theming.postMessage(value);
    }
  };

  const handleBackNoti = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnv((prev: EnvState) => {
      return {
        ...prev,
        backNoti: !prev.backNoti,
      };
    });
    //flutter에서만 setItem을 사용하여 web에서 관련 코드 없음
    if (localStorage.getItem("isFlutter") === "1") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      Notifing.postMessage(e.target.checked);
    }
  };

  return (
    <Stack spacing={1} divider={<Divider orientation="horizontal" flexItem />}>
      <Box>
        <Typography variant="h5">밝기 모드</Typography>
        <ToggleButtonGroup
          value={env.theme}
          onChange={handleBrightTheme}
          exclusive
          sx={{
            width: "100%",
            py: "1rem",
            "& .MuiButtonBase-root": {
              width: "100%",
              py: "1rem",
            },
            "& .MuiButtonBase-root.Mui-selected": {
              color: mainPrimary,
            },
            "& .MuiButtonBase-root .MuiTypography-root": {
              pl: "0.5rem",
            },
          }}
        >
          <ToggleButton value="light">
            <Sun size={24} />
            <Typography variant="button">라이트</Typography>
          </ToggleButton>
          <ToggleButton value="system">
            <CircleHalf size={24} />
            <Typography variant="button">시스템</Typography>
          </ToggleButton>
          <ToggleButton value="dark">
            <Moon size={24} />
            <Typography variant="button">다크</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box>
        <Typography variant="h5">알람 수신 여부</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: "0.5rem",
            py: "0.2rem",
          }}
        >
          <Typography variant="body1">백그라운드 알림</Typography>
          <StyledSwitch
            checked={env.backNoti}
            value="backgroundNotification"
            onChange={handleBackNoti}
          />
        </Box>
        <Typography variant="body2" sx={{ px: "0.5rem" }}>
          어플을 실행하지 않았을 때, 내 주변의 새로운 우연을 알려드립니다.
        </Typography>
      </Box>
    </Stack>
  );
};

export default memo(SettingPage);
