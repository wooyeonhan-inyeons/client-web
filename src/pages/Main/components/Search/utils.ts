import {
  WooPos,
  tempWooyeonsInterface,
  wooyeonPositionInterface,
} from "./interface";

import IMG_5884 from "../../../../asset/IMG_5884.jpeg";
import IMG_5995 from "../../../../asset/IMG_5995.jpeg";
import IMG_6047 from "../../../../asset/IMG_6047.jpeg";
import IMG_6063 from "../../../../asset/IMG_6063.jpeg";
import IMG_6066 from "../../../../asset/IMG_6066.jpeg";
import IMG_6073 from "../../../../asset/IMG_6073.jpeg";

//14.5, 31, 45
/**
 *
 * @param distance `Number` unit: m
 * @returns `pos` {x: number, y: number}
 */
export function getRandomCircleEdgeCoordinates(distance: number): WooPos {
  let radius = 45;
  if (distance >= 30) radius = 31;
  else if (distance < 10) radius = 14.5;

  const angle = Math.random() * 2 * Math.PI;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  return { x, y };
}

export function wooyeonPositioning({
  addWooyeon,
  wooyeonsRef,
  distance,
  img,
}: wooyeonPositionInterface) {
  if (wooyeonsRef.current.length > 5) return;
  const pos = getRandomCircleEdgeCoordinates(distance);

  if (wooyeonsRef.current.length === 0) {
    return addWooyeon({ pos, img });
  } else {
    const isInRange = wooyeonsRef.current.some((item) => {
      const interDistance = Math.sqrt(
        (pos.x - item.pos.x) * (pos.x - item.pos.x) +
          (pos.y - item.pos.y) * (pos.y - item.pos.y)
      );
      // 거리가 10 미만이면
      return interDistance < 13;
    });
    if (!isInRange) {
      return addWooyeon({ pos, img });
    } else {
      // 겹치면 다른 값으로 재귀 호출
      wooyeonPositioning({ addWooyeon, wooyeonsRef, distance, img });
    }
  }
}

export const tempWooyeons: tempWooyeonsInterface[] = [
  { id: 100, img: IMG_5884 },
  { id: 70, img: IMG_5995 },
  { id: 50, img: IMG_6047 },
  { id: 40, img: IMG_6063 },
  { id: 1, img: IMG_6066 },
  { id: 7, img: IMG_6073 },
];
