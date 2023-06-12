import { BACK_URL } from "../../../../../common";
import { WooyeonsType } from "../interface";
export const getHistory = async (
  month: number,
  year: number,
  token: string | undefined
) => {
  const response: WooyeonsType[] = await fetch(
    `${BACK_URL}/post/uploaded?month=${month}&year=${year}`,
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
