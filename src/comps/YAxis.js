function YAxis({ gridArea, filteredCovidData }) {
  const styles = {
    gridArea: gridArea,
    width: "100%",
    height: "100%",
    background: "red",
  };
  // const x = "80";
  // const maxCase = Math.max(...filteredCovidData.map((day) => day.newCases));
  // console.log(maxCase, " seyed");
  // const yCoordinate = 700;

  return <svg style={styles}></svg>;
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
