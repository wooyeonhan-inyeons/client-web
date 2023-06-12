export const historyStyle = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  gap: "0.5vw",

  "& .imgItem": {
    width: "33vw",
    aspectRatio: "1 / 1",
    objectFit: "cover",
    cursor: "pointer",
  },
  "& .imgItem:hover": {
    opacity: 0.8,
  },
};
