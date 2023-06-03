import { Box, Button, Typography } from "@mui/material";
import { CloudWarning } from "@phosphor-icons/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "2.5rem 1rem",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <CloudWarning size={64} />
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          에러가 발생 하였습니다.
          <br />
          잠시 후 다시 시도해 주세요.
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{ width: "100%", borderRadius: "0.5rem" }}
          onClick={() => navigate("/")}
        >
          돌아가기
        </Button>
      </Box>
    </Box>
  );
}
