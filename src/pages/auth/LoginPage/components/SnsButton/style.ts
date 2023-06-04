export const getSnsBackground = (sns: string) => {
  const defalutStyle = {
    boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
    backgroundColor: "#FFFFFF",
    color: "black",
    width: "21rem",
    borderRadius: "10px",
    p: "0.6rem",
    display: "flex",
    justifyContent: "space-around",
    fontSize: "1rem",
    fontWeight: 500,
    margin: "0.6rem",
  };
  if (sns === "KAKAO") {
    defalutStyle.backgroundColor = "#F7E600";
    defalutStyle.color = "#3A1D1D";
    return defalutStyle;
  }
  return defalutStyle;
};
