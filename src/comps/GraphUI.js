import React ,{ useState, useEffect } from "react";

export default function GraphUI({
  gridArea,
  covidData,
  updateFilteredCovidData,
}) {
  const styles = {
    gridArea: gridArea,
    background: "cyan",
  }
  function findLastXDay(lastXDay) {
    const endDate = new Date();//today
    const startDate =new Date();
    startDate.setDate(endDate.getDate() -lastXDay);
    updateFilteredCovidData(startDate,endDate)
  }

  const [startDate, setStartDate] = useState(covidData[0].date)
  const [endDate, setEndDate] = useState(new Date().toLocaleDateString('en-ca'))

  useEffect(() => {
    updateFilteredCovidData(new Date(startDate), new Date(endDate))
  }, [startDate,endDate])
  return (
    <div style={styles}>
      <button onClick={() => findLastXDay(30)}>
        LAST 30 DAYS
      </button>
      <button onClick={() => findLastXDay(180)}>
        LAST 6 MONTHS
      </button>
      <button
        onClick={() => findLastXDay(covidData.length+1)}
      >
        ALL
      </button>
      <label htmlFor="start">Start date:</label>
      <input type="date" id="start" name="start"
       min={covidData[0].date}
       max={ new Date().toLocaleDateString('en-ca') } 
       defaultValue ={startDate}
       onChange = {(event)=> setStartDate(event.target.value)} />

      <label htmlFor="end">End date:</label>
      <input type="date" id="end" name="end"
       min={covidData[0].date}
       max={ new Date().toLocaleDateString('en-ca') }
       defaultValue = {endDate}
       onChange = {(event)=> setEndDate(event.target.value)}  />

    </div>
  );
}
