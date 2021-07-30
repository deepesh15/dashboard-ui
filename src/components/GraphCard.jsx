import React from "react";
import { Line } from "react-chartjs-2";
import { DummyGraph } from "../data";
import { ReactComponent as DropDown } from "../svg/DropDown.svg";
const GraphCard = ({ title, date }) => {
  return (
    <div className="graph-card Card">
      <div className="graph-header">
        <h3>{title}</h3>
        <p>{date} <DropDown/></p>
      </div>
      <div className="graph-body">
        <Line
          data={DummyGraph}
          options={{
            indexAxis: "x",
            scales: {
              yAxis: {
                beginAtZero: true,
              },
            },
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio:5,
            layout: {
              padding: 2,
            },
          }}
        />
      </div>
    </div>
  );
};

export default GraphCard;
