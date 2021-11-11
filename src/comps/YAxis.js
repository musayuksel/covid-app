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
  // const x = "80";
  const maxCase = Math.max(...filteredCovidData.map((day) => day.newCases));
  // const maxCase = 112;
  // console.log(maxCase, " seyed");
  // const yCoordinate = 700;

  const scaleMax = roundUp(maxCase); // top of y scale
  console.log(scaleMax);
  // const mappedScaleMax = rangeMap(scaleMax, 0, scaleMax, 100, 0);
  // const scaleMin = rangeMap(0, 0, scaleMax, 100, 0); // bottom of y scale
  const mappedMaxCase = rangeMap(maxCase, 0, scaleMax, 100, 0); // data point on y scale

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
        const mappedMarking = rangeMap(marking, 0, scaleMax, 100, 0);
        return (
          <line
            key={i}
            x1="50%"
            x2="100%"
            y1={`${mappedMarking}%`}
            y2={`${mappedMarking}%`}
            stroke="#00f"
            strokeWidth="4"
          />
        );
      })}

      <line
        x1="50%"
        x2="100%"
        y1={`${mappedMaxCase}%`}
        y2={`${mappedMaxCase}%`}
        stroke="#0f0"
        strokeWidth="4"
      />
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
