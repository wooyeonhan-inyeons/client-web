import { useRecoilState } from "recoil";
import { BACK_URL } from "../../../../../common";
import { WooyeonsType } from "../interface";
import { userState } from "../../../../../recoil";
export const getPastWooyeon = async (
  month: number,
  year: number,
  token: string | undefined
) => {
  const response: WooyeonsType[] = await fetch(
    `${BACK_URL}/post/viewed?month=${month}&year=${year}`,
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
