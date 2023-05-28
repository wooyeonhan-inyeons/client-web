import { BACK_URL } from "../../../../common";
import { GetWooyeonsType } from "./interface";

export const getPost = async ({
  position,
}: {
  position?: {
    latitude: number;
    longitude: number;
  };
}) => {
  //test code
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response: GetWooyeonsType[] = await fetch(
    `${BACK_URL}/post/near?latitude=35.8527&longitude=128.4971`,
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
