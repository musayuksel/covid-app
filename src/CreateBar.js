import React from "react";
import { Svg, G, Rect } from "react-native-svg";
export default function CreateBar({ data, graphHeight }) {
  const maxCase = Math.max(...data.map((e) => e.newCases)); //for

  const dataBars = data.map((day, i) => {
    const barHeight =
      (day.newCases * graphHeight) / maxCase;

    return (
      <Rect
        x={i * 5}
        y={-barHeight}
        width="5"
        height={barHeight}
        stroke="black"
        strokeWidth="0"
      />
    );
  });
  return <>{dataBars}</>;
}
