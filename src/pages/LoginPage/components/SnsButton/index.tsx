import React from "react";
import Button from "@mui/material/Button";
import { SnsProps } from "../../types";
import { userState } from "../../../../recoil";
import { useRecoilState } from "recoil";
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#EEF1EE",
    },
  },
});
const SnsButton = ({ sns, text, imgSrc }: SnsProps) => {
  const [, setUser] = useRecoilState(userState);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          disableElevation
          sx={{
            boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
            backgroundColor: sns ? "#F7E600" : "#FFFFFF",
            color: sns ? "#3A1D1D" : "black",
            width: "21rem",
            borderRadius: "10px",
            p: "0.6rem",
            display: "flex",
            justifyContent: "space-around",
            fontSize: "1rem",
            fontWeight: 500,
            margin: "0.6rem",
          }}
          onClick={() =>
            setUser((prev) => {
              return { ...prev, first: true };
            })
          }
        >
          <img src={imgSrc} />
          {text}
        </Button>
      </ThemeProvider>
    </>
  );
};

export default SnsButton;
