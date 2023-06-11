import { BACK_URL } from "./common";

export const PatchUser = async ({
  name,
  message,
  category,
  token,
}: {
  name: string;
  message: string;
  category: string[];
  token: string | undefined;
}) => {
  //카테고리 쿼리화
  let categories = "";
  category.map((p, i) => {
    categories += `category[${i}]=${p}`;
    if (category.length - 1 !== i) categories += "&";
  });

  const response = await fetch(
    `${BACK_URL}/user?name=${name}&message=${message}&${categories}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}}`,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        message: message,
        category: category,
      }),
    }
  ).then((response) => {
    return response.json();
  });
  return response;
};
