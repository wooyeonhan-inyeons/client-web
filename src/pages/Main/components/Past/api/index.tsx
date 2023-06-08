import { useRecoilState } from "recoil";
import { BACK_URL } from "../../../../../common";
import { WooyeonsType } from "../interface";
import { userState } from "../../../../../recoil";
export const getPastWooyeon = async (month: number, year: number) => {
  const [user] = useRecoilState(userState);
  console.log("유저토큰", user.access_token);
  const response: WooyeonsType[] = await fetch(
    `${BACK_URL}/post/viewed?month=${month}&year=${year}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.access_token}`,
      },
    }
  ).then((response) => {
    return response.json();
  });
  return response;
};
