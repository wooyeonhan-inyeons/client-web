import React from "react";
import { ReceivedMessageStyle } from "../../style";
import { Box, Paper, Typography } from "@mui/material";

export default function ReceivedMessage({
  content,
  createAt,
}: {
  content: string;
  createAt: string;
}) {
  return (
    <Box sx={ReceivedMessageStyle}>
      <Paper elevation={0}>
        <Box>{content}</Box>
      </Paper>
      <Typography variant="caption">
        {new Date(createAt).getHours() + ":" + new Date(createAt).getMinutes()}
      </Typography>
    </Box>
  );
}
