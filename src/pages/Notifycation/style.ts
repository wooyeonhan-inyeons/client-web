export const NotificationStyle = {
  "&": {
    padding: 0,
    maxHeight: "calc(100vh - 56px)",
    overflow: "hidden",
    "@media (min-width: 600px)": {
      maxHeight: "calc(100vh - 64px)",
    },
  },
  "& .notificationBox": {
    maxHeight: "calc(100vh - 56px)",
    overflow: "scroll",
    paddingBottom: 10,
    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#ddd",
      borderRadius: "5px",
    },
    "&::-webkit-scrollbar-button:vertical:end:decrement": {
      display: "block",
      height: "20px",
    },
    "&::-webkit-scrollbar-corner": {
      display: "none",
    },
    "@media (min-width: 600px)": {
      maxHeight: "calc(100vh - 64px)",
    },
  },
  "& .no_notification": {},
};
