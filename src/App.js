import React, { useState } from 'react';
import './App.css';
import Chart from "react-google-charts";

function App() {

const initWeather = [];

const [weather, setWeather] = useState (initWeather);

function convertUTCDateToLocalDate(date) {
new Date(date.getTime() + date.getTimezoneOffset()*60*1000);
  return date;
}

let chartHumData = [
  ['Aika', '%'],
  ['Loading...', 0]
];

let chartTempData = [
      ['Aika', 'Asteet'],
      ['Loading...', 0]
];

fetch('https://oppilas-6.azurewebsites.net/api/HttpTriggerCSharp2?code=cCXYqyAdHAV3rza9bGJhiPfMiV2YhEpXmQVLapFTSzCZGoVAJTzLRg==&deviceId=390035001947393035313138&amount=10')
 .then(response => response.json())
 .then (json => setWeather([...json]));

let humtempkey = 1;
const rows = () => weather.map(temphum => {

  if(chartHumData[1][0] === 'Loading...'){
    chartHumData.pop();
  }

   if(chartTempData[1][0] === 'Loading...'){
    chartTempData.pop();
  }


chartHumData.push([String(convertUTCDateToLocalDate(new Date(temphum.Timestamp))).split(' ')[4], parseInt(temphum.Hum)])

chartTempData.push([String(convertUTCDateToLocalDate(new Date(temphum.Timestamp))).split(' ')[4], parseInt(temphum.Hum)])

return <div key={humtempkey++}>
 <b>Kello:</b> {String(convertUTCDateToLocalDate(new Date(temphum.Timestamp))).split(' ')[4]} &nbsp;
 <b>Ilmankosteus:</b> {temphum.Hum} % &nbsp;
 <b>Lämpötila:</b> {temphum.Temp} °C
</div>
 
})

  return (
    <div className="App">
    {rows()}
     <div>
  <Chart
    width={1000}
    height={300}
    chartType="ColumnChart"
    loader={<div>Loading Chart</div>}
    data={chartHumData}
    options={{
      title: 'Ilmankosteus',
      hAxis: {

        minValue: 0,
      },
      vAxis: {
        title: '',
      },
    }}
  />
  </div>
   <div>
  <Chart
    width={1000}
    height={300}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={chartTempData}
    options={{
      title: 'Lämpötila',
      hAxis: { titleTextStyle: { color: '#333' } },
      vAxis: { minValue: 0 },
      // For the legend to fit, we make the chart area smaller
      // lineWidth: 25
    }}
  />
</div>
    </div>
  );
}

export default App;
