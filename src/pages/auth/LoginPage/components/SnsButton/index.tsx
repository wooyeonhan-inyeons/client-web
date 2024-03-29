import React from "react";
import Button from "@mui/material/Button";
import { SnsProps } from "../../types";
import { createTheme, ThemeProvider } from "@mui/material";
import { BACK_URL } from "../../../../../common";
import { getSnsBackground } from "./style";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EEF1EE",
    },
  },
});

const SnsButton = ({ sns, text, imgSrc }: SnsProps) => {
  const navigate = useNavigate();
  const getLogin = () => {
    if (import.meta.env.DEV) {
      navigate(
        `/auth/kakao/redirect?access_token=${import.meta.env.VITE_AUTH_TOKEN}`
      );
    } else {
      location.replace(`${BACK_URL}/auth/${sns}`);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          disableElevation
          sx={getSnsBackground(sns)}
          onClick={getLogin}
        >
          <img src={imgSrc} />
          {text}
        </Button>
      </ThemeProvider>
    </>
  );
};

export default SnsButton;
