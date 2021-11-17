import rangeMap from "../utils/rangeMap";
import roundUp from "../utils/roundUp";

function PlotAreaXAxisLines({
  gridArea,
  filteredCovidData,
}) {
  const styles = {
    gridArea: gridArea,
    width: "100%",
    height: "100%",
    background: "none",
    overFlow: "visible",
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
  };

  const maxCase = Math.max(
    ...filteredCovidData.map((day) => day.newCases)
  );
  // const maxCase = 99;

  const scaleMax = roundUp(maxCase); // top of y scale
  const mappedMaxCase = rangeMap(
    maxCase,
    0,
    scaleMax,
    100,
    0
  ); // data point on y scale

  const markings = [];
  const markingsCount = 5;
  const incrementDistance = scaleMax / markingsCount;

  for (let i = 0; i <= scaleMax; i += incrementDistance) {
    markings.push(i);
  }

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
          <line
            key={i}
            x1="0%"
            x2="100%"
            y1={`${mappedMarking}%`}
            y2={`${mappedMarking}%`}
            stroke="#00f"
            strokeWidth="4"
          />
        );
      })}

      <line
        x1="0%"
        x2="100%"
        y1={`${mappedMaxCase}%`}
        y2={`${mappedMaxCase}%`}
        stroke="#0f0"
        strokeWidth="4"
      />
    </svg>
  );
}

export default PlotAreaXAxisLines;
