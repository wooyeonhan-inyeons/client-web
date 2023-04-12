export const headerStyle = {
  "&": {
    width: "100%",
    maxWidth: "444px",
    position: "fixed",
    zIndex: 1,
    left: "50%",
    transform: "translateX(-50%)",
  },
  "& .MuiButton-text": {
    color: "#222",
  },
  "& > header": {
    backgroundColor: "#fff",
    boxShadow: "none",
  },
  "& .MuiToolbar-root": {
    padding: 0,
    justifyContent: "flex-end",
  },
};

export default headerStyle;
