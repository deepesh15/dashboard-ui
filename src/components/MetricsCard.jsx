import React from "react";

const MetricsCard = ({ metricColor, metricIcon, metricName, metricValue }) => {

  return (
      <div className={`metrics-container  Card`} style={{backgroundColor:metricColor}}>
        <div className="icon" >
        <img src={`data:image/svg+xml;utf-8,${metricIcon}`} alt="Icon"/>
        </div>
        <div className="metrics-title">
          <p>Total {metricName}</p>
        </div>
        <div>
          <h3>{metricValue}</h3>
        </div>
      </div>
  );
};

export default MetricsCard;
