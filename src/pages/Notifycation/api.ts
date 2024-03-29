import { BACK_URL } from "../../common";
import { NotificationInterface } from "./interface";

export const getNotification = async (token: string) => {
  const response: NotificationInterface[] = await fetch(
    `${BACK_URL}/notification`,
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
