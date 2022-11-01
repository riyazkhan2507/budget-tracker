import "./Chart.css";
import React from "react";
import ChartBar from "./ChartBar";
export default function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //map will give final output an array

  const totalMaximum = Math.max(...dataPointValues); //Math.max() requires numbers to be provided to find the maximum. so we use spread operator.

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
}
