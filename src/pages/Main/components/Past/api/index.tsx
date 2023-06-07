import { BACK_URL } from "../../../../../common";
import { WooyeonsType } from "../interface";

export const getPastWooyeon = async (month: number, year: number) => {
  const response: WooyeonsType[] = await fetch(
    `${BACK_URL}/post/viewed?month=${month}&year=${year}`,
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
