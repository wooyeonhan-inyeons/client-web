import React from "react";
import {
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Modal,
  alpha,
  useTheme,
} from "@mui/material";
import { UseMutateFunction } from "react-query";

export default function DetailMenu({
  open,
  handleClose,
  deletePost,
}: {
  open: boolean;
  handleClose: () => void;
  deletePost: UseMutateFunction<void, unknown, void, unknown>;
}) {
  const theme = useTheme();

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: alpha(theme.palette.background.default, 0.2),
              backdropFilter: "blur(2px)",
            },
          },
        }}
        sx={{ p: "1rem", display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            p: "1rem",
            borderRadius: "1rem",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: theme.palette.background.default,
          }}
        >
          <CardHeader title="우연을 삭제하시겠습니까?" />
          <CardContent>삭제한 우연은 되돌릴 수 없어요!</CardContent>
          <CardActions>
            <Button onClick={handleClose}>취소</Button>
            <Button color="error" onClick={() => deletePost()}>
              삭제
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </>
  );
}
