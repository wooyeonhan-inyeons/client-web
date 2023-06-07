import { BACK_URL } from "../../common";
import { GetPostInterface } from "./interface";

export const getDetailWooyeon = async (post_id: string) => {
  const response: GetPostInterface = await fetch(
    `${BACK_URL}/post?post_id=${post_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    }
  ).then((response) => {
    return response.json();
  });
  return response;
};
