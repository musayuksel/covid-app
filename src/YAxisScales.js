import React from "react";

const ScalesOnYAxis = () => {
  // our svg padding
  const padding = 100;
  // width of the scale(polyline/line)
  const width = 500;
  // start of the line
  const firstX = padding;
  // end of the line
  const lastX = width - padding;
  // number of graduations
  const numberOfGraduatedScales = 7;
  // our chart height
  const height = 600;

  /* Create an empty array and loop through it which will create out graduated scales 
   depending on the ratio and the number we pass into our emty array.
   */

  return Array.from({ length: numberOfGraduatedScales })
    .fill(0)
    .map((_, index) => {
      const ratio = (index + 1) / numberOfGraduatedScales;

      const yCoordinate = height - height * ratio + padding;

      return (
        <React.Fragment key={index}>
          <polyline
            fill="none"
            stroke={"grey"}
            strokeWidth=".25"
            points={`${firstX},${yCoordinate} ${lastX},${yCoordinate}`}
          />
        </React.Fragment>
      );
    });
};
