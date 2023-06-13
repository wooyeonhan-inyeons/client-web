import React from "react";
import { Box, Typography } from "@mui/material";

export const DateItem = ({ createAt }: { createAt: Date }) => (
  <Typography variant="body2" sx={{ textAlign: "center", padding: "0.7rem 0" }}>
    {createAt.getFullYear() +
      "-" +
      createAt.getMonth() +
      "-" +
      createAt.getDate()}
  </Typography>
);
