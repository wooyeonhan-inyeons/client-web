import { Box, CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "5rem",
      }}
    >
      <Box sx={{ py: 7 }}>
        <CircularProgress size={64} thickness={2} />
      </Box>
    </Box>
  );
}
