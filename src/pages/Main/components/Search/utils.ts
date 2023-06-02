import {
  WooPos,
  Wooyeons,
  addWooyeonInterface,
  setPositionType,
  wooyeonPositionInterface,
} from "./interface";

//14.5, 34.5, 45
/**
 *
 * @param distance `Number` unit: m
 * @returns `pos` {x: number, y: number}
 */
export function getRandomCircleEdgeCoordinates(distance: number): WooPos {
  let radius;
  if (distance > 50) radius = 50;
  else if (distance > 30) radius = 34.5;
  else radius = 16.5;

  const angle = Math.random() * 2 * Math.PI;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  //보이는 레이더 위치에 들어오게 조정
  if (Math.abs(x) <= 40 && y >= -40) return { x, y };

  // distance 값을 조정하여 재귀 호출
  const adjustedDistance = distance - 1; // 임의의 값으로 조정 (조건에 맞게 조정해야 함)
  return getRandomCircleEdgeCoordinates(adjustedDistance);
}

export function wooyeonPositioning({
  setWooyeons,
  distance,
  image,
  post_id,
}: wooyeonPositionInterface) {
  // 최신 상태배열 받아오기
  let prevWoo: Wooyeons[] = [];
  setWooyeons((prev) => {
    prevWoo = prev;
    return prev;
  });

  if (prevWoo.length > 5) return;
  const pos = getRandomCircleEdgeCoordinates(distance);
  if (prevWoo.length === 0) {
    return addWooyeon({ pos, image, post_id, setWooyeons });
  } else {
    const isInRange = prevWoo.some((item) => {
      const interDistance = Math.sqrt(
        (pos.x - item.pos.x) * (pos.x - item.pos.x) +
          (pos.y - item.pos.y) * (pos.y - item.pos.y)
      );

      // 거리가 13 미만이면
      return interDistance < 13;
    });
    if (!isInRange) {
      return addWooyeon({ pos, image, post_id, setWooyeons });
    } else {
      // console.log("recursive");
      // 겹치면 다른 값으로 재귀 호출
      wooyeonPositioning({
        setWooyeons,
        distance,
        image,
        post_id,
      });
    }
  }
}

export function addWooyeon({
  pos,
  image,
  post_id,
  setWooyeons,
}: addWooyeonInterface) {
  setWooyeons((prevWooyeons: Wooyeons[]) => {
    // 초과 방지
    if (prevWooyeons.length > 6) return prevWooyeons;
    return [
      ...prevWooyeons,
      {
        pos: pos,
        image: image,
        post_id: post_id,
      },
    ];
  });
}

/**
 *
 * @param setViewport setState를 인자로 받아 함수 내에서 업데이트
 */
export const getCurrentLocation = async ({ setPosition }: setPositionType) => {
  await navigator.geolocation.getCurrentPosition((prev) => {
    setPosition({
      latitude: prev.coords.latitude,
      longitude: prev.coords.longitude,
    });
  });

  // if (position === undefined) throw Error;
  // return position;
};
