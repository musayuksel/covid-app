import React, { useState } from "react";

export default function CreateLine({
  data,
  graphHeight,
  SVGWidth,
}) {
  const maxCase = Math.max(...data.map((e) => e.newCases));

  const points = data.map(
    (dataPoint, i) =>
      `${i}, ${
        (dataPoint.newCases * -graphHeight * 0.8) / maxCase
      }`
  );

  console.table(points);
  return (
    <>
      <polyline
        points={`0, 0 ${points} ${data.length}, 0`}
        stroke="black"
        fill="none"
        strokeWidth="1"
      />
    </>
  );
}
