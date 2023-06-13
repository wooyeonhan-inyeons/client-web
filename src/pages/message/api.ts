import { BACK_URL } from "../../common";
import { hatListInterface } from "./interface";

export const getMessageList = async (token: string) => {
  const response: hatListInterface[] = await fetch(`${BACK_URL}/chat/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
  return response;
};
