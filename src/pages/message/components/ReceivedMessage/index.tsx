import React from "react";
import { ReceivedMessageStyle } from "../../style";
import { Box, Paper, Typography } from "@mui/material";

export default function ReceivedMessage({
  content,
  createAt,
}: {
  content: string;
  createAt: Date;
}) {
  return (
    <Box sx={ReceivedMessageStyle}>
      <Paper elevation={0}>
        <Box>{content}</Box>
      </Paper>
      <Typography variant="caption">
        {createAt.getHours() + ":" + createAt.getMinutes()}
      </Typography>
    </Box>
  );
}
