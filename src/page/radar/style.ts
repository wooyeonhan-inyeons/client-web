export const radarPage = {
  display: "flex",
  width: "100%",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  touchAction: "auto",
  "& .lf-player-container": {
    position: "absolute",
    width: "100vh",
  },
  "& .radar_circle, & .radar_circle *": {
    border: "1px solid #dadada",
    borderRadius: "50%",
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  "& > .radar_circle": {
    width: "80vw",
    height: "80vw",
    animation: "1s linear 1s infinite alternate a1",
  },
  "& .radar_circle > div": {
    width: "55vw",
    height: "55vw",
    animation: "1s linear 2s infinite alternate a1",
  },
  "& .radar_circle > div > div": {
    width: "30vw",
    height: "30vw",
    animation: "1s linear 3s infinite alternate a1",
  },
  "@keyframes a1": {
    from: { borderColor: "#dadada" },
    to: { borderColor: "#6d6d6d" },
  },
};
