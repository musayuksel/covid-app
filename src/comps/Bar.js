import { useState } from "react";
export default function Bar({
  barHeight,
  i,
  day,
  barWith,
}) {
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
        width={barWith}
        height={barHeight}
        y={-barHeight}
        stroke="black"
        strokeWidth="0"
      />
    </>
  );
}
