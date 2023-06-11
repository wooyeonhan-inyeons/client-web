import { BACK_URL } from "../../common";
import { UserInfo } from "./interface";

export const getUser = async (token: string | undefined) => {
  const response: UserInfo = await fetch(`${BACK_URL}/user`, {
    method: "GET",
    headers: {
      credentials: "include",
      "Content-Type": "application/json",
      // Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    console.log("res: ", response);
    return response.json();
  });
  return response;
};
