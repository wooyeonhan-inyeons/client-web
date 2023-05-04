export const headerStyle = {
  "&": {
    width: "calc(100% - 2rem)",
    maxWidth: "444px",
    margin: "0 auto",
    position: "fixed",
    top: 0,
    left: "50%",
    transform: "translate(-50%)",
    zIndex: 1,
  },
  "@media (max-width: 475px)": {
    width: "100%",
  },
  "& .MuiButton-text": {
    color: "#222",
  },
  "& > header": {
    boxShadow: "none",
  },
  "& .MuiToolbar-root": {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  "& .MuiToolbar-root.centerToolbar": {
    alignItems: "center",
  },
  "& .MuiToolbar-root .header_nav_btn": { borderRadius: 0 },
  "& .MuiToolbar-root .right_section": {
    display: "flex",
    gap: 1,
  },
  "& .MuiToolbar-root .right_section .mainFn svg": {
    aspectRatio: "1",
  },
};

export default headerStyle;
