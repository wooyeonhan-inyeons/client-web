import React, { useMemo } from "react";
import Router from "./Router";
import { CssBaseline } from "@mui/material";
import { Global, ThemeProvider } from "@emotion/react";
import { useRecoilState } from "recoil";
import { envState } from "./recoil";
import { darkTheme, lightTheme } from "./common";
import { EnvState } from "./interface";

function App() {
  const [env] = useRecoilState(envState);

  const themeMemo = useMemo(() => themeSelector(env), [env]);

  function themeSelector(env: EnvState) {
    if (env.theme == "system") {
      //브라우저의 컬러 테마
      const mediaTheme = window.matchMedia("(prefers-color-scheme: dark)");
      return mediaTheme.matches ? darkTheme : lightTheme;
    } else if (env.theme == "light") {
      return lightTheme;
    } else {
      return darkTheme;
    }
  }

  return (
    <ThemeProvider theme={themeMemo}>
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
