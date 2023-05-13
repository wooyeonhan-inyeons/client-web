export function searchBtnStyle(open: boolean) {
  return {
    maxWidth: "444px",
    transform: "translate(-50%, 0)",
    left: "50%",
    bottom: open ? 0 : 48,
    zIndex: open ? 2000 : "initial",
    transition: "all 0.5s cubic-bezier(0, 0.85, 0.58, 1) 0s",
    position: "fixed",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    gap: 3,
    overflow: "hidden",
    paddingBottom: open ? 0 : 3,

    "& .search-btn": {
      transition: "all 0.5s cubic-bezier(0, 0.85, 0.58, 1) 0s",
      height: open ? "3.5rem" : "3rem",
      width: open ? "100%" : "11rem",
      minWidth: "10rem",
      maxWidth: "444px",
      borderRadius: open ? "0" : "1.5rem",
      padding: open ? "2rem 0 4rem" : "0 2rem",
    },
    "& .MuiButton-startIcon svg": {
      fontSize: "15px",
    },
    "& .MuiFab-root": {
      backgroundColor: "#ED6729",
      color: "#fff",
    },
    "& .MuiFab-root:hover": {
      backgroundColor: "#ED6729",
      opacity: 0.8,
    },
    "& .hide_btn": {
      display: open ? "none" : "block",
    },
  };
}
