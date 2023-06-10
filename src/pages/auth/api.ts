import { BACK_URL } from "../../common";
import { UserInfo } from "./interface";

export const getUser = async (token: string | undefined) => {
  const response: UserInfo = await fetch(`${BACK_URL}/user`, {
    method: "GET",
    headers: {
      credentials: "include",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
  return response;
};
