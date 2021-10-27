import React, { useState } from "react";
// import OneBar from "./OneBar";

export default function CreateLine({
  data,
  graphHeight,
  SVGWidth,
}) {
  const maxCase = Math.max(...data.map((e) => e.newCases));
  // const barWith = SVGWidth / data.length; // if there is more data, barwith will be small

  const points = data.map(
    (dataPoint, i) =>
      `${i}, ${
        (dataPoint.newCases * -graphHeight * 0.8) / maxCase
      }`
  );

  console.table(points);
  // console.log(data);
  return (
    <>
      {/* {data.map((day, i) => {
        const barHeight =
          (day.newCases * graphHeight * 0.8) / maxCase; //barHeight will be relative to the data. the highest "newCase" value will be 80% of table hight
        return (
          <OneBar
            key={i}
            day={day}
            barHeight={barHeight}
            i={i}
            barWith={barWith}
          />


        );
      })} */}

      <polyline
        points={`0, 0 ${points} ${data.length}, 0`}
        stroke="black"
        fill="none"
        strokeWidth="1"
      />
    </>
  );
}
