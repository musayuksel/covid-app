import fetchCovidData from "./utils/fetch-covid-data";
import { useEffect, useState } from "react";
import Graph from "./comps/Graph";

function App() {
  const $ = window.localStorage;
  const storedCovidData = JSON.parse($.getItem("storedCovidData"));
  const timeStamp = $.getItem("timeStamp");
  const [covidData, setCovidData] = useState(storedCovidData);
  
  useEffect(() => {
    const timeStampObj = new Date(timeStamp);
    const dateTodayObj = new Date();
    const dateTodayStr = dateTodayObj.toISOString().split("T")[0]
    console.log(dateTodayObj);
    const isDataStale = timeStampObj < dateTodayObj;

    if (isDataStale) {
      fetchCovidData()
        .then((newCovidData) => {
          $.setItem("storedCovidData", JSON.stringify(newCovidData));
          setCovidData(newCovidData);

          $.setItem("timeStamp", dateTodayStr);
        })
        .catch((err) => console.error(err));
    }
  },[timeStamp, $]);

  return (
    <div className="App">
      {covidData && <Graph covidData={covidData.data} />}
    </div>
  );
}

export default App;
