import React from "react";
import Router from "./Router";
import { CssBaseline, createTheme } from "@mui/material";
import { Global, ThemeProvider } from "@emotion/react";

const defaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00A651",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* css 초기화 */}
      <CssBaseline />
      <Global
        styles={{
          body: {
            userSelect: "none",
            backgroundColor: "#f9f9f9",
            touchAction: "pan-y",
          },
          touchAction: "none",
        }}
      />
      <Router />
    </ThemeProvider>
  );
}

export default App;
