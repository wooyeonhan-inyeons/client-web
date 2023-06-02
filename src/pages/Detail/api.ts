import { BACK_URL } from "../../common";
import { GetDetailWooyeonType } from "../Main/components/Search/interface";

export const getDetailWooyeon = async (post_id: string) => {
  //test code
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response: GetDetailWooyeonType = await fetch(
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
