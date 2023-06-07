import { GetWooyeonsType } from "../Search/interface";
// 한달 우연 일별로 정리한 우연 한달 리스트
export const MonthlyWooyeonList = (
  wooyeonList: GetWooyeonsType[],
  year: number,
  month: number
) => {
  const monthLength = getDaysInMonth(year, month);
  const monthlyWooyeonList = Array(monthLength).fill([]); // 한달치 우연리스트(빈 배열) 생성
  console.log("monthlylist: ", monthlyWooyeonList);
  wooyeonList.map((e) => {
    const date = e.created_at.split("-");
    const idx = parseInt(date[2].slice(0, 2));
    monthlyWooyeonList[idx].push(e);
  });

  return monthlyWooyeonList; // 한달치 우연리스트 리턴
};

// 그 달에 며칠까지 있는지 알아내는 함수
export const getDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month - 1, 1);
  date.setMonth(date.getMonth() + 1);
  date.setDate(date.getDate() - 1);
  return date.getDate(); // 30 or 31 or 28
};
