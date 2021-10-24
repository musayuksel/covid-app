// import data from "./data.json";
export default async function fetchCovidData() {
  const endpoint =
    "https://api.coronavirus.data.gov.uk/v1/data?" +
    "filters=areaType=nation;areaName=england&" +
    'structure={"date":"date","newCases":"newCasesByPublishDate"}';

  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data, ">>>>DATA FETCHED");
  return data;
  return data;
}
