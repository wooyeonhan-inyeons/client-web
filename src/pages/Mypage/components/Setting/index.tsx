import React, { memo, useLayoutEffect } from "react";
import { useOutletContext } from "react-router-dom";
import {
  ContextInterface,
  EnvState,
  FilterState,
  HeaderOptinterface,
  WooyeonsCategory,
  themeType,
} from "../../../../interface.d";
import {
  Box,
  Button,
  Divider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { envState, filterState, userState } from "../../../../recoil";
import { CircleHalf, Moon, Sun, X } from "@phosphor-icons/react";
import { StyledSwitch } from "../../../../component/StyledSwitch";
import { SettingStyle } from "./style";
import { useMutation } from "react-query";
import { PatchUser } from "../../../../api";

const wooyeonCategory: Array<{ id: WooyeonsCategory; value: string }> = [
  { id: "DAILY", value: "일상" },
  { id: "GROUP", value: "모임" },
  { id: "INFO", value: "정보" },
  { id: "EVENT", value: "이벤트" },
  { id: "ADS", value: "광고" },
  { id: "PRESENT", value: "선물" },
];

const SettingPage = () => {
  const { setHeadOpt, navigate } = useOutletContext<ContextInterface>();
  const [filter, setFilter] = useRecoilState(filterState);
  const [user] = useRecoilState(userState);
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
    if (value === null) return;
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

  const handleFilter = (
    e: React.MouseEvent<HTMLElement>,
    value: string | null
  ) => {
    //value = category value
    if (value !== null) mutateUser(value);
  };

  const { mutate: mutateUser } = useMutation(
    "updateCategory",
    (arg: string) =>
      PatchUser({
        name: user.name,
        message: "hello",
        category: filter.preferCategory,
      }),
    {
      onSuccess: (data, arg) => {
        // console.log(data);
        setFilter((prev: FilterState) => {
          let newCategory = prev.preferCategory;
          const index = newCategory.indexOf(arg as WooyeonsCategory);

          if (index === -1) {
            newCategory = [...newCategory, arg as WooyeonsCategory];
          } else if (index !== -1) {
            if (prev.preferCategory.length === 1)
              return {
                ...prev,
                preferCategory: newCategory,
              };
            newCategory = prev.preferCategory.filter(
              (item) => item !== (arg as WooyeonsCategory)
            );
          }
          return {
            ...prev,
            preferCategory: newCategory,
          };
        });
      },
    }
  );

  return (
    <Stack
      spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
      sx={SettingStyle}
    >
      <Box className="themeSetting">
        <Typography variant="h5">밝기 테마</Typography>
        <ToggleButtonGroup
          value={env.theme}
          exclusive
          onChange={handleBrightTheme}
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
      <Box className="backgroundNotification">
        <Typography variant="h5">알람 수신 여부</Typography>
        <Box>
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
      <Box className="NofificationCategory">
        <Typography variant="h5">수신 받을 카테고리</Typography>
        <Box>
          {wooyeonCategory.map((item) => {
            const varianted = filter.preferCategory.includes(item.id);
            return (
              <Button
                key={item.id}
                variant={varianted ? "contained" : "outlined"}
                onClick={(e) => handleFilter(e, item.id)}
              >
                {item.value}
              </Button>
            );
          })}
        </Box>
        <Typography variant="body2" sx={{ px: "0.5rem" }}>
          최소 한 개의 카테고리는 선택되어야 합니다.
        </Typography>
      </Box>
    </Stack>
  );
};

export default memo(SettingPage);
