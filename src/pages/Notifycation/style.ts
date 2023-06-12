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
    overflow: "hidden",
    overflowY: "scroll",
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

  // "& .swipeable-list-item": {
  //   position: "relative",
  //   transition: "max-height 0.5s ease",
  //   maxHeight: "1000px",
  //   transformOrigin: "top",
  //   overflow: "hidden",
  //   width: "100%",
  //   zIndex: 0,
  // },

  // "& .swipeable-list-item__content": {
  //   width: "100%",
  //   alignItems: "center",
  //   boxSizing: "border-box",
  //   height: "100%",
  //   display: "flex",
  // },

  // "& .swipeable-list-item__content--return": {
  //   transition: "transform 0.5s ease-out",
  // },
  // "& .swipeable-list-item__content--remove": {
  //   transition: "transform 0.35s ease-in",
  // },
  // "& .swipeable-list-item__content-right": {
  //   position: "absolute",
  //   width: "100%",
  //   height: "100%",
  //   zIndex: -1,
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   boxSizing: "borderBox",
  //   opacity: 0,
  // },
  // "& ..swipeable-list-item__content-right--return": {
  //   transition: "opacity 0.5s ease-out",
  // },
};
