import React from "react";
import { CssBaseline, createTheme } from "@mui/material";
import { Global, ThemeProvider } from "@emotion/react";
import Radar from "./page/radar";

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
          },
          touchAction: "none",
        }}
      />
      <Radar />
    </ThemeProvider>
  );
}

export default App;
