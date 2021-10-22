import React from "react";
import { Svg, G, Rect } from "react-native-svg";
export default function CreateBar({
  data,
  graphHeight,
  SVGWidth,
}) {
  const maxCase = Math.max(...data.map((e) => e.newCases));
  const barWith = SVGWidth / data.length;
  const dataBars = data.map((day, i) => {
    const barHeight =
      (day.newCases * graphHeight) / maxCase;

    return (
      <Rect
        x={i * barWith}
        y={-barHeight}
        width={barWith}
        height={barHeight}
        stroke="black"
        strokeWidth="0"
      />
    );
  });
  return <>{dataBars}</>;
}
