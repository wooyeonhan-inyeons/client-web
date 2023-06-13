import { BACK_URL } from "../../common";
import { chatItemInterface, chatListInterface } from "./interface";

export const getMessageList = async (token: string) => {
  const response: chatListInterface[] = await fetch(`${BACK_URL}/chat/list`, {
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

export const getMessage = async (token: string, group_id: string) => {
  const response: chatItemInterface[] = await fetch(
    `${BACK_URL}/chat?group_id=${group_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => {
    return response.json();
  });
  return response;
};

export const postMessage = async (
  token: string,
  post_id: string,
  content: string
): Promise<void> => {
  await fetch(`${BACK_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ post_id: post_id, content: content }),
  });
};
