import React from 'react';
import './App.css';
import Chart from "react-google-charts";

function App() {
  return (
    <div className="App">
     <div style={{ display: 'flex', maxWidth: 1900 }}>
  <Chart
    width={1400}
    height={300}
    chartType="ColumnChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['City', '%'],
      ['15.00', 27],
      ['16.00', 27],
      ['17.00', 26],
      ['18.00', 26],
      ['19.00', 26],
    ]}
    options={{
      title: 'Ilmankosteus',
      chartArea: { width: '30%' },
      hAxis: {
        title: 'Total Population',
        minValue: 0,
      },
      vAxis: {
        title: '',
      },
    }}
    legendToggle
  />
  </div>
   <div style={{ display: 'flex', maxWidth: 1900 }}>
  <Chart
    width={1400}
    height={'300px'}
    chartType="AreaChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Year', 'C', ''],
      ['15.00', 1000, 400],
      ['16.00', 1170, 460],
      ['17.00', 660, 1120],
      ['18.00', 1030, 540],
      ['19.00', 1030, 540],
    ]}
    options={{
      title: 'Lämpötila',
      hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
      vAxis: { minValue: 0 },
      // For the legend to fit, we make the chart area smaller
      chartArea: { width: '50%', height: '70%' },
      // lineWidth: 25
    }}
  />
</div>
    </div>
  );
}

export default App;
