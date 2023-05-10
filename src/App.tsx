import React from "react";
import Router from "./Router";
import { CssBaseline, createTheme } from "@mui/material";
import { Global, ThemeProvider } from "@emotion/react";
import { useRecoilState } from "recoil";
import { envState } from "./recoil";
import { darkTheme, lightTheme } from "./common";

function App() {
  const [env] = useRecoilState(envState);
  return (
    <ThemeProvider theme={env.theme ? lightTheme : darkTheme}>
      {/* css 초기화 */}
      <CssBaseline />
      <Global
        styles={{
          body: {
            userSelect: "none",
            backgroundColor: "#f9f9f9",
            touchAction: "pan-x",
          },
          touchAction: "none",
        }}
      />
      <Router />
    </ThemeProvider>
  );
}

export default App;
