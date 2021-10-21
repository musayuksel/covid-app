import fetchCovidData from './utils/fetch-covid-data'
import { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchCovidData().then(data => setData(data))
  }, [])

  return (
    <div className="App">
      { console.log(data) }
    </div>
  );
}

export default App;
