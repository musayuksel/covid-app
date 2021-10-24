import React, { useState } from "react";
export default function CreateBar({
  data,
  graphHeight,
  SVGWidth,
}) {
  const maxCase = Math.max(...data.map((e) => e.newCases));
  const barWith = SVGWidth / data.length; // if there is more data, barwith will be small

  function OneBar({ barHeight, i, day }) {
    const [showTooltip, setShowTooltip] = useState("none"); //TODO hover effect for every bar
    return (
      <>
        <text
          style={{
            font: "italic 15px ",
            display: `${showTooltip}`,
          }}
          x={i * barWith}
          y={250 - barHeight}
          stroke="none"
        >
          {day.date} New Cases {day.newCases}
        </text>
        <rect
          onMouseEnter={() => setShowTooltip("block")}
          onMouseLeave={() => setShowTooltip("none")}
          x={i * barWith}
          y={300 - barHeight}
          width={barWith}
          height={barHeight}
          stroke="black"
          strokeWidth="0"
        />
      </>
    );
  }

  return (
    <>
      {data.map((day, i) => {
        const barHeight =
          (day.newCases * graphHeight) / maxCase; //barHeight will be relative to the data. the highest "newCase" value will be table hight
        return (
          <OneBar
            key={i}
            day={day}
            barHeight={barHeight}
            i={i}
          />
        );
      })}
    </>
  );
}
