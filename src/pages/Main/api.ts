import { BACK_URL } from "../../common";

export const getNotificationCount = async (token: string) => {
  const response: { count: number } = await fetch(
    `${BACK_URL}/notification/count`,
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
