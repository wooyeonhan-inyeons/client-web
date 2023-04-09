import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StyledEngineProvider } from "@mui/material";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      {/* StyledEngineProvider를 사용해야 styled-components 문법을 사용할 수 있음 */}
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </RecoilRoot>
  </React.StrictMode>
);
