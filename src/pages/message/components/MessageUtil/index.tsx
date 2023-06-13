import React from "react";
import { Typography } from "@mui/material";

export const DateItem = ({ createAt }: { createAt: string }) => (
  <Typography variant="body2" sx={{ textAlign: "center", padding: "0.7rem 0" }}>
    {new Date(createAt).getFullYear() +
      "-" +
      new Date(createAt).getMonth() +
      "-" +
      new Date(createAt).getDate()}
  </Typography>
);
