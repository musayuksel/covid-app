import fetchCovidData from "./utils/fetch-covid-data";
import { useEffect, useState } from "react";
import CreateBar from "./CreateBar";
import DataFilter from "./DataFilter";

import ResponsiveSVG from "./ResponsiveSVG";

function App() {
  const covidDataLocalStorage = JSON.parse(
    window.localStorage.getItem("covidData")
  )

  const mostRecentDateLocalStorage = window.localStorage.getItem("mostRecentDate")


  const [covidData, setCovidData] = useState(
    covidDataLocalStorage
  )

  const [mostRecentDate, setMostRecentDate] = 
  useState(
    mostRecentDateLocalStorage || 
    new Date().toISOString().split("T")[0]
  )

  useEffect(() => {

    const isMostRecentDateInCovidData = 
      covidData && covidData.data
        .some(entry => entry.date === mostRecentDate)

    if( 
      !covidData || 
      (covidData && !isMostRecentDateInCovidData)
    ) {
      fetchCovidData()
        .then(fetchedCovidData => {
          
          localStorage.setItem(
            "covidData", 
            JSON.stringify(fetchedCovidData)
          )
          setCovidData(fetchedCovidData)
          
          const mostRecentDate = fetchedCovidData.data.at(-1).date
          
          localStorage.setItem(
            "mostRecentDate", 
            mostRecentDate
          )
          setMostRecentDate(mostRecentDate)
      })
      .catch(err => console.error(err))
    } 
  }, [ covidData, mostRecentDate ]);

  const SVGWidth = 700; //need initial value
  const graphHeight = 300; //need initial value

  return (
    <div className="App">
      {covidData && 
        <>
          <DataFilter
            covidData={covidData?.data}
            setCovidData={setCovidData}
            covidDataLocalStorage={covidDataLocalStorage} //TODO, update !!!!
          />

          <ResponsiveSVG
            data={covidData?.data}
            graphHeight={graphHeight}
            SVGWidth={SVGWidth}
          />

          <CreateBar
              data={covidData.data}
              graphHeight={graphHeight}
              SVGWidth={SVGWidth}
          />
        </>
      }
    </div>
  );
}

export default App;
