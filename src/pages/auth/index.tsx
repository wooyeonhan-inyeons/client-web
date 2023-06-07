import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { envState, filterState, userState } from "../../recoil";

export default function Auth() {
  const [searchParams] = useSearchParams();

  const access_token = searchParams.get("access_token");
  const [, setUser] = useRecoilState(userState);
  const resetFilter = useResetRecoilState(filterState);
  const resetEnv = useResetRecoilState(envState);

  const location = useLocation();

  useEffect(() => {
    console.log("test token: ", access_token);
    console.log(location);
    if (access_token !== null) {
      resetFilter();
      resetEnv();
      setUser((prev) => {
        return {
          ...prev,
          first: true,
          access_token: access_token as string,
        };
      });
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
