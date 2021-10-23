import React, { useState } from "react";
export default function CreateBar({
  data,
  graphHeight,
  SVGWidth,
}) {
  const maxCase = Math.max(...data.map((e) => e.newCases));
  const barWith = SVGWidth / data.length;
  function OneBar({ barHeight, i, day }) {
    const [isHover, setIsHover] = useState(true); //TODO hover effect for every bar

    return (
      <rect
        onMouseEnter={() => console.log("CLICKED", day)}
        x={i * barWith}
        y={300 - barHeight}
        width={barWith}
        height={barHeight}
        stroke="black"
        strokeWidth="0"
      />
    );
  }

  return (
    <>
      {data.map((day, i) => {
        const barHeight =
          (day.newCases * graphHeight) / maxCase;
        return (
          <OneBar
            key={i}
            day={day.date}
            barHeight={barHeight}
            i={i}
          />
        );
      })}
    </>
  );
}
