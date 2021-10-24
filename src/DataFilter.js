import React from "react";

export default function DataFilter({
  covidData,
  setCovidData,
  covidDataLocalStorage,
}) {
  function findLastXDay(lastXDay) {
    //it will be dynamic 1 week=7, 1 month=30 etc.
    const today = new Date();
    let startDate = new Date();
    startDate.setDate(today.getDate() - lastXDay); //starting date for data

    const filteredDates = covidDataLocalStorage.data.filter(
      (day) => new Date(day.date) >= startDate
    );

    const { ...copy } = covidData;
    copy.data = filteredDates;
    setCovidData(copy);
  }
  return (
    <>
      <button onClick={() => findLastXDay(30)}>
        LAST 30 DAYS
      </button>
      <button onClick={() => findLastXDay(180)}>
        LAST 6 MONTHS
      </button>
      <button
        onClick={() => setCovidData(covidDataLocalStorage)}
      >
        ALL
      </button>
    </>
  );
}
