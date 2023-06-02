import { BACK_URL } from "../../../../common";
import {
  GetWooyeonsInterface,
  GetWooyeonsType,
  RangeDictionary,
} from "./interface";

const rangeDictionary: RangeDictionary = {
  1: 0.01,
  50: 0.05,
  100: 0.1,
};

export const getPost = async ({
  position,
  range,
  category,
}: GetWooyeonsInterface) => {
  if (position == undefined) return;
  //카테고리 쿼리화
  let categories = "";
  category.map((p, i) => {
    categories += `category[${i}]=${p}`;
    if (category.length - 1 !== i) categories += "&";
  });
  console.log(position);
  const response: GetWooyeonsType[] = await fetch(
    `${BACK_URL}/post/near?latitude=${position?.latitude}&longitude=${position?.longitude}&range=${rangeDictionary[range]}&${categories}`,
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
