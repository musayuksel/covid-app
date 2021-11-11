import React, { useState } from "react";
import XAxis from "./XAxis";
import YAxis from "./YAxis";
import PlotArea from "./PlotArea";
import GraphUI from "./GraphUI";

function Graph({ covidData }) {
  const styles = {
    border: "1px solid #000",
    display: "grid",
    width: "900px",
    height: "600px",
    gridTemplateColumns: "5rem auto",
    gridTemplateRows: "5rem auto 5rem",
    gridTemplateAreas: `
            '...... graph-ui'
            'y-axis plot    '
            '...... x-axis  ' 
        `,
  };
  const [filteredCovidData, setFilteredCovidData] = useState(covidData);

  function updateFilteredCovidData(startDate, endDate) {
    const filteredDates = covidData.filter((day) => {
      const formattedCurrentDate = new Date(day.date);
      return (
        formattedCurrentDate >= startDate && formattedCurrentDate <= endDate
      );
    });
    setFilteredCovidData(filteredDates);
  }
  console.log(filteredCovidData, ">>>>filteredCovidData will go to the graph>");
  return (
    <div width="900" height="600" style={styles}>
      <YAxis gridArea="y-axis" filteredCovidData={filteredCovidData} />
      <PlotArea gridArea="plot" />
      <XAxis gridArea="x-axis" />
      <GraphUI
        covidData={covidData}
        updateFilteredCovidData={updateFilteredCovidData}
        gridArea="graph-ui"
      />
    </div>
  );
}

export default Graph;
