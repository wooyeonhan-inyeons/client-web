const radarPageStyle = {
  display: "flex",
  width: "100%",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  touchAction: "auto",
  // overflow: "hidden",

  "& .lf-player-container": {
    position: "absolute",
    width: "100vh",
  },
  "& .radar_circle, & .radar_circle *": {
    border: "1px solid #b5b5b533",
    borderRadius: "50%",
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: "1 / 1",
  },
  "& > .radar_circle": {
    width: "90%",
    animation: "1s linear 1s infinite alternate a1",
  },
  "& .radar_circle > div": {
    width: "70%",
    animation: "1s linear 2s infinite alternate a1",
  },
  "& .radar_circle > div > div": {
    width: "50%",
    animation: "1s linear 3s infinite alternate a1",
  },
  "@keyframes a1": {
    from: { borderColor: "#b5b5b533" },
    to: { borderColor: "#4a4a4a33" },
  },
};

export default radarPageStyle;
