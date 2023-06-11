import React, { useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { envState, filterState, userState } from "../../recoil";
import { enqueueSnackbar } from "notistack";
import { jwtDecode } from "jwt-js-decode";

export default function Auth() {
  const [searchParams] = useSearchParams();

  const access_token = searchParams.get("access_token");
  const [, setUser] = useRecoilState(userState);
  const [filter, setFilter] = useRecoilState(filterState);
  const [env, setEnv] = useRecoilState(envState);
  const resetFilter = useResetRecoilState(filterState);
  const resetEnv = useResetRecoilState(envState);

  useEffect(() => {
    if (access_token !== null) {
      const decodeed_token = jwtDecode(access_token);
      const exp = Number(decodeed_token.payload.exp) * 1000;

      //토큰 읽고 유효성 검사
      if (exp > Date.now()) {
        //토큰을 받아 기존에 있을 수 있는 전역 변수를 초기화함
        resetFilter();
        resetEnv();
        setUser((prev) => {
          return {
            ...prev,
            first: true,
            access_token: access_token as string,
          };
        });
        enqueueSnackbar({
          message: "로그인을 성공하였습니다.",
          variant: "success",
        });
      } else {
        enqueueSnackbar({
          message: "인증 정보가 옳바르지 않습니다.",
          variant: "warning",
        });
      }
    } else {
      enqueueSnackbar({
        message: "문제가 발생하였습니다.",
        variant: "warning",
      });
    }
    // localstorage에 저장하기 위해 기존의 값으로 업데이트
    setFilter(filter);
    setEnv(env);
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
