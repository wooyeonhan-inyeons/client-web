import { BACK_URL } from "../../../../common";
import { PostWooyeonType } from "./interface";

export const getPost = async ({
  position,
}: {
  position?: {
    latitude: number;
    longitude: number;
  };
}) => {
  const response: PostWooyeonType[] = await fetch(
    `${BACK_URL}/post/near?latitude=35.8527&longitude=128.4971`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    }
  ).then((response) => {
    console.log(response);
    return response.json();
  });
  return response;
};
