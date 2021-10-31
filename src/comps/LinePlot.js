export default function LinePlot({
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
