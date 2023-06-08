import { BACK_URL } from "../../common";
import { GetPostInterface } from "./interface";

export const getDetailWooyeon = async (
  post_id: string,
  token: string | undefined
) => {
  const response: GetPostInterface = await fetch(
    `${BACK_URL}/post?post_id=${post_id}`,
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

export const deletePost = async (
  post_id: string,
  token: string | undefined
): Promise<void> => {
  const response = await fetch(`${BACK_URL}/post`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ post_id: post_id }),
  }).then((response) => {
    return response.json();
  });
  return response;
};

export const postEmotion = async (
  post_id: string,
  token: string | undefined
): Promise<void> => {
  await fetch(`${BACK_URL}/emotion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ post_id: post_id }),
  });
};

export const removeEmotion = async (
  post_id: string,
  token: string | undefined
): Promise<void> => {
  await fetch(`${BACK_URL}/emotion`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ post_id: post_id }),
  });
};

export const postComment = async (
  post_id: string,
  content: string,
  token: string | undefined
) => {
  const response = await fetch(`${BACK_URL}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ post_id: post_id, content: content }),
  }).then((response) => {
    return response.json();
  });
  return response;
};

export const getEmotion = async (
  post_id: string,
  token: string | undefined
) => {
  const response: GetPostInterface = await fetch(
    `${BACK_URL}/readPost?post_id=${post_id}`,
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

export const getComment = async (
  post_id: string,
  token: string | undefined
) => {
  const response: GetPostInterface = await fetch(
    `${BACK_URL}/comment?post_id=${post_id}`,
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
