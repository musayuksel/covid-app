import React, { useState } from "react";

export default function GraphUI({
  gridArea,
  covidData,
  updateFilteredCovidData,
}) {
  const styles = {
    gridArea: gridArea,
    background: "cyan",
  };
  const today = new Date(); //today

  function findLastXDay(lastXDay) {
    const endDate = today;
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - lastXDay);
    updateFilteredCovidData(startDate, endDate);
  }

  const [startDate, setStartDate] = useState(covidData[0].date);
  const [endDate, setEndDate] = useState(today.toLocaleDateString("en-GB"));

  function dateSubmitHandler(submitEvent) {
    submitEvent.preventDefault();
    updateFilteredCovidData(new Date(startDate), new Date(endDate));
  }

  return (
    <div style={styles}>
      <button onClick={() => findLastXDay(30)}>LAST 30 DAYS</button>
      <button onClick={() => findLastXDay(180)}>LAST 6 MONTHS</button>
      <button onClick={() => findLastXDay(covidData.length + 1)}>ALL</button>
      <form onSubmit={dateSubmitHandler}>
        <label htmlFor="start">Start date:</label>
        <input
          type="date"
          id="start"
          name="start"
          min={covidData[0].date}
          max={today.toLocaleDateString("en-GB")}
          defaultValue={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />

        <label htmlFor="end">End date:</label>
        <input
          type="date"
          id="end"
          name="end"
          min={startDate}
          max={today.toLocaleDateString("en-GB")}
          defaultValue={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />

        <button type="submit">Apply</button>
      </form>
    </div>
  );
}
