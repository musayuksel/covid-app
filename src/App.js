import fetchCovidData from "./utils/fetch-covid-data";
import { useEffect, useState } from "react";
import CreateBar from "./CreateBar";
import DataFilter from "./DataFilter";

import ResponsiveSVG from "./ResponsiveSVG";
function App() {
  // Check if covidData key exists in local storage and that is has a value, returns null if key is not found
  const covidDataLocalStorage = JSON.parse(
    window.localStorage.getItem("covidData")
  );
  // Set state to the const above
  const [covidData, setCovidData] = useState(
    covidDataLocalStorage
  );

  useEffect(() => {
    !covidData &&
      fetchCovidData().then((fetchedCovidData) => {
        localStorage.setItem(
          "covidData",
          JSON.stringify(fetchedCovidData)
        );
        setCovidData(fetchedCovidData);
      });
  }, [covidData]);

  const SVGHeight = 300; //need initial value
  const SVGWidth = 700; //need initial value
  const graphHeight = 300; //need initial value
  if (!covidData) {
    return null;
  }
  return (
    <div className="App">
      {/*  */}
      {/* <DataFilter
        covidData={covidData.data.reverse()}
        setCovidData={setCovidData}
        covidDataLocalStorage={covidDataLocalStorage} //TODO, update !!!!
      /> */}
      {/* <svg
        width={SVGWidth}
        height={SVGHeight}
        strokeWidth="1"
        className="scgContainer"
      >
 
      </svg> */}
      <ResponsiveSVG
        data={covidData.data.reverse()}
        graphHeight={graphHeight}
        SVGWidth={SVGWidth}
      />
      {/* <g
        y={graphHeight}
        stroke="black"
        strokeWidth="4"
        className="container"
      >
        {covidData && (
          <CreateBar
            data={covidData.data}
            graphHeight={graphHeight}
            SVGWidth={SVGWidth}
          />
        )}
      </g> */}
    </div>
  );
}

export default App;
