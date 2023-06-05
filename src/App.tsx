import React, { useEffect, useState } from "react";
import Router from "./Router";
import {
  Button,
  CssBaseline,
  GlobalStyles,
  Theme,
  ThemeProvider,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { envState } from "./recoil";
import { darkTheme, lightTheme } from "./common";
import { grey } from "@mui/material/colors";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "react-query";
import GlobalStyleWrapper from "./component/GlobalStyle";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const [env] = useRecoilState(envState);
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [systemTheme, setSystemTheme] = useState<Theme>(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? darkTheme
      : lightTheme;
  });
  const queryClient = new QueryClient();

  const handleChange = (): void => {
    if (mediaQuery.matches === true) setSystemTheme(darkTheme);
    else setSystemTheme(lightTheme);
  };

  useEffect(() => {
    if (env.theme !== "system") {
      if (env.theme === "dark") setSystemTheme(darkTheme);
      else setSystemTheme(lightTheme);
    } else {
      handleChange();
    }
  }, [env]);

  useEffect(() => {
    if (env.theme === "system") {
      //브라우저, 기기의 테마 변경 감지 등록
      mediaQuery.addEventListener("change", handleChange);
      return () => {
        //삭제
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, []);

  return (
    <ThemeProvider theme={systemTheme}>
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
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              onReset={reset}
              fallbackRender={({ resetErrorBoundary }) => (
                <div>
                  There was an error!
                  <Button onClick={() => resetErrorBoundary()}>
                    Try again
                  </Button>
                </div>
              )}
            >
              <QueryClientProvider client={queryClient}>
                <Router />
              </QueryClientProvider>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </GlobalStyleWrapper>
    </ThemeProvider>
  );
}

export default App;
