import React from "react";

export default function DayWooyenItem({
  classNames,
  item,
  today,
  setTarget,
  getWooyeon,
}: {
  classNames: string;
  item: Date;
  today: Date;
  setTarget: React.Dispatch<
    React.SetStateAction<HTMLElement | null | undefined>
  >;
  getWooyeon: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <div
      className={classNames}
      key={item.getTime()}
      ref={item.getTime() === today.getTime() ? setTarget : null}
      onClick={getWooyeon}
    >
      <div className="hiddenValue" style={{ display: "none" }}>
        {item.getTime()}
      </div>
      <div className="displayValue">{item.getDate()}</div>
    </div>
  );
}
