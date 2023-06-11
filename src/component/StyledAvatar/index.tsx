import { styled } from "@mui/material";
import Avatar from "boring-avatars";

export const CutyAvatar = styled(Avatar)(() => ({
  "&": {
    borderRadius: "50%",
    border: "3px soild #f00 !important",
  },
}));
