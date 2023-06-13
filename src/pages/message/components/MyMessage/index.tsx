import React from "react";
import { MyMessageStyle } from "../../style";
import { Box, Paper, Typography } from "@mui/material";

export default function MyMessage({
  content,
  createAt,
}: {
  content: string;
  createAt: Date;
}) {
  return (
    <Box sx={MyMessageStyle}>
      <Typography variant="caption">
        {createAt.getHours() + ":" + createAt.getMinutes()}
      </Typography>
      <Paper elevation={0}>
        <Box>{content}</Box>
      </Paper>
    </Box>
  );
}
