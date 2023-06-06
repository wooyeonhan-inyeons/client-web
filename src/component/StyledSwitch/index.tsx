import { Switch } from "@mui/material";
import styled from "styled-components";

export const StyledSwitch = styled(Switch)(() => ({
  height: "55px",
  width: "75px",

  "& .MuiButtonBase-root": {
    padding: "14px",
  },
  "& .Mui-checked+.MuiSwitch-track": {
    opacity: "1 !important",
  },
  "& .MuiSwitch-track": {
    borderRadius: "30px",
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#fff",
    width: "27px",
    height: "27px",
  },
}));
