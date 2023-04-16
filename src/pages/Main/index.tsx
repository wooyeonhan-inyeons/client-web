import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../../component/Header";

import { Box, Container } from "@mui/material";
interface HeaderProp {
  isHeader: boolean;
}

function Main({ isHeader }: HeaderProp) {
  return (
    <>
      <Container
        className="globalContainer"
        maxWidth="xs"
        sx={{ backgroundColor: "#fff" }}
      >
        {isHeader && <Header />}
        <Box
          sx={{
            paddingTop: 7,
            // height: "calc(100vh - 56px)",
            height: "100vh",
          }}
        >
          <Outlet />
        </Box>
      </Container>
    </>
  );
}

export default Main;
