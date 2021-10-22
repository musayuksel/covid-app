import fetchCovidData from "./utils/fetch-covid-data";
import { useEffect, useState } from "react";
import { Svg, G } from "react-native-svg";
import CreateBar from "./CreateBar";
function App() {
  const [data, setData] = useState([]);
  const deleteLaterChangeWithData =
    fetchCovidData().slice(-100);
  // useEffect(() => {
  //   fetchCovidData().then((data) => setData(data.data));
  // }, []);

  const SVGHeight = 300; //need initial value
  const SVGWidth = 1000; //need initial value
  const graphHeight = 300; //need initial value

  return (
    <div className="App">
      <Svg
        width={SVGWidth}
        height={SVGHeight}
        strokeWidth="1"
        className="scgContainer"
      >
        {/* translate for 'graphHeight' on y axis */}
        <G
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
        </G>
      </Svg>
    </div>
  );
}

export default App;
