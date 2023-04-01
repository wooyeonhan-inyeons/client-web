import { Button, CssBaseline, createTheme } from "@mui/material";
import React from "react";
import { useDrawer } from "./page/radar";
import { ThemeProvider } from "@emotion/react";
import { green } from "@mui/material/colors";

const defaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: green[500],
    },
  },
});

function App() {
  const { Drawer, toggleDrawer } = useDrawer();
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* css 초기화 */}
      <CssBaseline />
      <div style={{ width: "300px", backgroundColor: "#ddd" }}>
        <Button onClick={toggleDrawer}>Drawer 나와라</Button>
        <Drawer />
      </div>
    </ThemeProvider>
  );
}

export default App;
