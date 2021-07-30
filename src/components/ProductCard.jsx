import React from "react";
import { DummyPie } from "../data";
import { Pie } from "react-chartjs-2";
import { ReactComponent as DropDown } from "../svg/DropDown.svg";
const ProductCard = ({ title, date }) => {
  
  return (
    <div className="product-card Card">
      <div className="product-header">
        <h4>{title}</h4>
        <p>{date} <DropDown /></p>
      </div>
      <div className="product-body">
        <div className="pie-chart">
          <Pie
            data={DummyPie}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                position: "right",
                labels: {
                  padding: 10,
                  fontColor: "#1d7af3",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
