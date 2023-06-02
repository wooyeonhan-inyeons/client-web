import React from "react";
import Button from "@mui/material/Button";
import { SnsProps } from "../../types";
import { userState } from "../../../../../recoil";
import { useRecoilState } from "recoil";
import { createTheme, ThemeProvider } from "@mui/material";
import { BACK_URL } from "../../../../../common";
const theme = createTheme({
  palette: {
    primary: {
      main: "#EEF1EE",
    },
  },
});
const SnsButton = ({ sns, text, imgSrc }: SnsProps) => {
  const [, setUser] = useRecoilState(userState);

  const getSnsBackground = (sns: string) => {
    const defalutStyle = {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
      backgroundColor: "#FFFFFF",
      color: "black",
      width: "21rem",
      borderRadius: "10px",
      p: "0.6rem",
      display: "flex",
      justifyContent: "space-around",
      fontSize: "1rem",
      fontWeight: 500,
      margin: "0.6rem",
    };
    if (sns === "KAKAO") {
      defalutStyle.backgroundColor = "#F7E600";
      defalutStyle.color = "#3A1D1D";
      return defalutStyle;
    }
    return defalutStyle;
  };

  const getLogin = () => {
    if (sns === "GOOGLE") {
      setUser((prev) => {
        return { ...prev, first: true };
      });
      return;
    }
    location.replace(`${BACK_URL}/auth/${sns}`);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          disableElevation
          sx={getSnsBackground(sns)}
          // onClick={() =>
          //   setUser((prev) => {
          //     return { ...prev, first: true };
          //   })
          // }
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
