import React from "react";
import Router from "./Router";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { useRecoilState } from "recoil";
import { envState } from "./recoil";
import { darkTheme, lightTheme } from "./common";
import { EnvState } from "./interface";
import { grey } from "@mui/material/colors";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyleWrapper from "./component/GlobalStyle";

function App() {
  const [env] = useRecoilState(envState);
  const queryClient = new QueryClient();

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
    <ThemeProvider theme={themeSelector(env)}>
      {/* css 초기화 */}
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            userSelect: "none",
            touchAction: "pan-x",
            backgroundColor:
              env.theme === "system"
                ? window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "#262626"
                  : grey[100]
                : env.theme === "dark"
                ? "#262626"
                : grey[100],
          },
          touchAction: "none",
        }}
      />
      <GlobalStyleWrapper>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </GlobalStyleWrapper>
    </ThemeProvider>
  );
}

export default App;
