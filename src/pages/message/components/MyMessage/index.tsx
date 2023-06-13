import React from "react";
import { MyMessageStyle } from "../../style";
import { Box, Paper, Typography } from "@mui/material";

export default function MyMessage({
  content,
  createAt,
}: {
  content: string;
  createAt: string;
}) {
  return (
    <Box sx={MyMessageStyle}>
      <Typography variant="caption">
        {new Date(createAt).getHours() + ":" + new Date(createAt).getMinutes()}
      </Typography>
      <Paper elevation={0}>
        <Box>{content}</Box>
      </Paper>
    </Box>
  );
}
