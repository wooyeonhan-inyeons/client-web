import { GetWooyeonsType } from "../Search/interface";
// 한달 우연 일별로 정리한 우연 한달 리스트
export const MonthlyWooyeonList = (
  wooyeonList: GetWooyeonsType[], // 이번달 우연리스트
  year: number,
  month: number
) => {
  const max = getDaysInMonth(year, month);
  const monthlyList = Array(max).fill([]); // 한달치 우연리스트(빈 배열) 생성
  for (let i = 0; i < max; i++) {
    monthlyList[i] = [];
  }
  for (let i = 0; i < wooyeonList.length; i++) {
    const date = wooyeonList[i].created_at.split("-");
    const today = parseInt(date[2].slice(0, 2)); // 우연 날짜
    monthlyList[today - 1].push(wooyeonList[i]); // 1일의 우연들은 0번 인덱스에 저장됨
  }
  // console.log(monthlyList);

  return monthlyList; // 한달치 우연리스트 리턴
};

// 그 달에 며칠까지 있는지 알아내는 함수
export const getDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month - 1, 1);
  date.setMonth(date.getMonth() + 1);
  date.setDate(date.getDate() - 1);
  return date.getDate(); // 30 or 31 or 28
};
