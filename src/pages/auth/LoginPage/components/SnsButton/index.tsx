import React from "react";
import Button from "@mui/material/Button";
import { SnsProps } from "../../types";
import { userState } from "../../../../../recoil";
import { useRecoilState } from "recoil";
import { createTheme, ThemeProvider } from "@mui/material";
import { BACK_URL } from "../../../../../common";
import { getSnsBackground } from "./style";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EEF1EE",
    },
  },
});

const SnsButton = ({ sns, text, imgSrc }: SnsProps) => {
  const [, setUser] = useRecoilState(userState);

  const getLogin = () => {
    if (import.meta.env.DEV) {
      setUser((prev) => {
        return {
          ...prev,
          first: true,
          access_token: import.meta.env.VITE_AUTH_TOKEN,
        };
      });
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
