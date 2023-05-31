import { BACK_URL } from "../../../../common";
import { GetWooyeonsType } from "./interface";

export const getPost = async ({
  position,
  range,
  category,
}: {
  position?: {
    latitude: number;
    longitude: number;
  };
  range: number;
  category: string[];
}) => {
  //test code
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log(position, range, category);
  let categories = "";
  category.map((p, i) => {
    categories += `category[${i}]=${p}`;
    if (category.length - 1 !== i) categories += "&";
  });
  console.log(categories);
  const response: GetWooyeonsType[] = await fetch(
    `${BACK_URL}/post/near?latitude=35.8527&longitude=128.4971&range=0.1&${categories}`,
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
