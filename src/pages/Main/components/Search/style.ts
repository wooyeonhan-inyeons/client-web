export const searchPageStyle = {
  display: "flex",
  width: "100%",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  touchAction: "auto",
  maxWidth: "444px",
  overflow: "hidden",

  "& .lf-player-container": {
    position: "absolute",
    width: "100vh",
  },
  "& .wooyeonArea": {
    position: "absolute",
    top: "calc(50% - 20px)",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "110%",
    aspectRatio: "1 / 1",
  },
  "& .radar_circle, & .radar_circle *": {
    border: "1px solid #c6c6c661",
    borderRadius: "50%",
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: "1 / 1",
  },
  "& > .radar_circle": {
    width: "110%",
    marginBottom: "40px",
    animation: "1.5s linear 1s infinite alternate a1",
  },
  "& .radar_circle > div": {
    width: "70%",
    animation: "1.5s linear 2s infinite alternate a1",
  },
  "& .radar_circle > div > div": {
    width: "50%",
    animation: "1.5s linear 3s infinite alternate a1",
  },
  "@keyframes a1": {
    from: { borderColor: "#c6c6c661" },
    to: { borderColor: "#4646467a" },
  },
  "& .loadingWooyeon": {
    minWidth: "120vw",
    aspectRatio: "1/1",
    // backgroundColor: "inherit",
    // marginBottom: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: 9,
  },
  "& .loadingWooyeon .lottie": {
    // padding: "28%",
    width: "50%",
    margin: "0 auto",
  },
  "& .loadingWooyeon .MuiTypography-root": {
    padding: "0 20vw",
    textAlign: "center",
  },
};

export const forUntouchableStyle = {
  height: "65px",
  width: "100%",
  position: "fixed",
  bottom: 0,
  cursor: "pointer",
  zIndex: 99999,
};
