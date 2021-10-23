import fetchCovidData from "./utils/fetch-covid-data";
import { useEffect, useState } from "react";
import CreateBar from "./CreateBar";
function App() {
  const [data, setData] = useState([]);
  const deleteLaterChangeWithData = fetchCovidData().slice(
    100,
    200
  ); //TODO! before deployment  change with FETCH
  // useEffect(() => {
  //   fetchCovidData().then((data) => setData(data.data));
  // }, []);

  const SVGHeight = 300; //need initial value
  const SVGWidth = 1000; //need initial value
  const graphHeight = 300; //need initial value

  return (
    <div className="App">
      <svg
        width={SVGWidth}
        height={SVGHeight}
        strokeWidth="1"
        className="scgContainer"
      >
        <g
          y={graphHeight}
          stroke="black"
          strokeWidth="4"
          className="container"
        >
          <CreateBar
            data={deleteLaterChangeWithData}
            graphHeight={graphHeight}
            SVGWidth={SVGWidth}
          />
        </g>
      </svg>
    </div>
  );
}

export default App;
