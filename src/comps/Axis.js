import React from "react";

/* AFter creating the Axis component we can use it inside our X and Y axis  to draw them and in turn 
use those components inside our graph. e.g XAxis =()=>{ <Axis points ={whatever} />} */

//finding the maximum X value.
const maxXValue = data.length;

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

export default Axis;
