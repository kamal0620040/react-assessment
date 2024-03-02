"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Product Distribution in Categories:",
  //   is3D: true,
};

const PiechartSection = ({ categories }: { categories: string[] }) => {
  const [categoryData, setCategoryData] = useState([
    ["Category", "Item Count"],
  ]);

  const fetchData = async () => {
    let newData = [...categoryData];

    for (let i = 1; i <= categories.length - 1; i++) {
      const response = await fetch(
        `https://dummyjson.com/products/category/${categories[i]}`
      );
      const data = await response.json();
      newData = newData.concat([[categories[i], data.total]]);
      console.log(data.total);
    }
    console.log(newData);
    setCategoryData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Chart
        className="text-2xl"
        chartType="PieChart"
        data={categoryData}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default PiechartSection;
