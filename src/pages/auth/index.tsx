import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { envState, filterState, userState } from "../../recoil";

export default function Auth() {
  const [searchParams] = useSearchParams();

  const access_token = searchParams.get("access_token");
  const [, setUser] = useRecoilState(userState);
  const [filter, setFilter] = useRecoilState(filterState);
  const [env, setEnv] = useRecoilState(envState);
  const resetFilter = useResetRecoilState(filterState);
  const resetEnv = useResetRecoilState(envState);

  const location = useLocation();

  useEffect(() => {
    console.log("test token: ", access_token);
    console.log(location);
    if (access_token !== null) {
      //토큰을 받아 기존에 있을 수 있는 전역 변수를 초기화함
      resetFilter();
      resetEnv();
      // localstorage에 저장하기 위해 기존의 값으로 업데이트
      setFilter(filter);
      setEnv(env);
      setUser((prev) => {
        return {
          ...prev,
          first: true,
          access_token: access_token as string,
        };
      });
    } else {
      setFilter(filter);
      setEnv(env);
    }
  }, []);

  return (
    <Box
      sx={{
        height: "calc(100vh - 4rem)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "5rem",
      }}
    >
      <Typography variant="h4">로그인 시도 중...</Typography>
      <Box sx={{ py: 7 }}>
        <CircularProgress size={64} thickness={2} />
      </Box>
    </Box>
  );
}
