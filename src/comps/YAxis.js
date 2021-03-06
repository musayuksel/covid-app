import rangeMap from "../utils/rangeMap";
import roundUp from "../utils/roundUp";

function YAxis({ gridArea, filteredCovidData }) {
  const styles = {
    gridArea: gridArea,
    width: "100%",
    height: "100%",
    background: "red",
    overFlow: "visible",
  };
  const maxCase = Math.max(
    ...filteredCovidData.map((day) => day.newCases)
  );
  // const maxCase = 112;

  const scaleMax = roundUp(maxCase); // top of y scale
  console.log(
    scaleMax,
    "<<scaleMax Y, max CaseNum >",
    maxCase
  );
  const mappedMaxCase = rangeMap(
    maxCase,
    0,
    scaleMax,
    100,
    0
  ); // data point on y scale
  // console.log(`mappedMaxCase`, mappedMaxCase);
  const markings = [];
  const markingsCount = 5;
  const incrementDistance = scaleMax / markingsCount;

  for (let i = 0; i <= scaleMax; i += incrementDistance) {
    markings.push(i);
  }

  console.log(markings);

  console.log(incrementDistance);
  return (
    <svg style={styles}>
      {markings.map((marking, i) => {
        const mappedMarking = rangeMap(
          marking,
          0,
          scaleMax,
          100,
          0
        );
        return (
          <foreignObject
            x={`${40}%`}
            y={`${mappedMarking + 2}%`}
            width="60%"
            height="100%"
          >
            <p style={{ border: "1px solid white" }}></p>
            <p style={{ border: "1px solid white" }}>
              {marking}
            </p>
          </foreignObject>
        );
      })}
    </svg>
  );
  //   return (
  //     <text
  //       x={x}
  //       y={yCoordinate}
  //       style={{ fill: "#ccc", fontSize: "16", fontFamily: "Helvetica" }}
  //     >
  //       {parseFloat(maxCase / 1000).toFixed(2)}
  //     </text>
  //   );
}

export default YAxis;
