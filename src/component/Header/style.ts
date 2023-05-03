export const headerStyle = {
  "&": {
    width: "calc(100% - 2rem)",
    maxWidth: "444px",
    margin: "0 auto",
    position: "absolute",
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
    background: "none",
    boxShadow: "none",
  },
  "& .MuiToolbar-root": {
    justifyContent: "space-between",
    itemAlign: "flex-end",
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
