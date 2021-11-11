import React from "react";

const LineChart = ({
  data,
  ScalesOnYAxis: numberOfGraduatedScales,
  height,
  width,
}) => {
  const ScalesOnYAxis = () => {
    const padding = 60;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    // start of the line
    const firstX = padding;
    // end of the line
    const lastX = width - padding;
    // number of graduations
    const numberOfGraduatedScales = 7;
    // our chart height

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
  const Axis = ({ points }) => (
    <polyline fill="none" stroke="#ccc" strokeWidth=".5" points={points} />
  );
  // console.log(points);
  const XAxis = () => (
    <Axis
      points={`${padding},${height - padding} ${width - padding},${
        height - padding
      }`}
    />
  );

  const YAxis = () => (
    <Axis points={`${padding},${padding} ${padding},${height - padding}`} />
  );

  /* AFter creating the Axis component we can use it inside our X and Y axis  to draw them and in turn 
use those components inside our graph. e.g XAxis =()=>{ <Axis points ={whatever} />} */

  //finding the maximum X value.
  const maxXValue = data.length + 1;

  // Maximum yvalue
  const maxYValue = Math.max(...data.map((e) => e.newCases));

  const dataPoints = data
    .map((dataPoint, index) => {
      const x = (index / maxXValue) * chartWidth + padding;
      // console.log(element[index]);
      const y =
        chartHeight - (dataPoint.newCases / maxYValue) * chartHeight + padding;
      return `${x},${y}`;
    })
    .join(" ");

  const Axis = ({ points }) => (
    <polyline fill="none" stroke="grey" strokeWidth=".25" points={dataPoints} />
  );
};

export default LineChart;
