import React, { useState } from "react";
import OneBar from "./OneBar";

export default function CreateBar({
  data,
  graphHeight,
  SVGWidth,
}) {
  const maxCase = Math.max(...data.map((e) => e.newCases));
  const barWith = SVGWidth / data.length; // if there is more data, barwith will be small

  return (
    <>
      {data.map((day, i) => {
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
      })}
    </>
  );
}
