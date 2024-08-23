'use client';

import { useState } from "react";
import { BarChart, Card, Divider, Switch } from "@tremor/react";
import { RiArrowUpLine } from "@remixicon/react";

const defaulData = [
  {
    date: "2014",
    Orders: 68560,
    Revenue: 28560,
  },
  {
    date: "2015",
    Orders: 70320,
    Revenue: 30320,
  },
  {
    date: "2016",
    Orders: 80233,
    Revenue: 70233,
  },
  {
    date: "2017",
    Orders: 55123,
    Revenue: 45123,
  },
  {
    date: "2018",
    Orders: 56000,
    Revenue: 80600,
  },
  {
    date: "2019",
    Orders: 100000,
    Revenue: 85390,
  },
  {
    date: "2020",
    Orders: 85390,
    Revenue: 45340,
  },
  {
    date: "2021",
    Orders: 80100,
    Revenue: 70120,
  },
  {
    date: "2022",
    Orders: 75090,
    Revenue: 69450,
  },
  {
    date: "2023",
    Orders: 71080,
    Revenue: 63345,
  },
  {
    date: "2024",
    Orders: 61210,
    Revenue: 100330,
  },
];

// Calculate the max value across all data points
const maxValue = Math.max(...defaulData.map((d) => d.Orders + d.Revenue));

// Add a "none" category to each data point
const dataWithNone = defaulData.map((d) => ({
  ...d,
  none: maxValue - (d.Orders + d.Revenue),
}));

function valueFormatter(number) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    notation: "standard",
    compactDisplay: "short",
    style: "currency",
    currency: "USD",
  });

  return formatter.format(number);
}

export const BarChartPage = ({data = defaulData}) => {
  return (
    <div className="flex flex-row m-2 w-full justify-center">
      <Card className="sm:max-w-2xl bg-white shadow rounded-sm m-1 p-3 overflow-hidden">
        <div className="flex flex-row items-center justify-between space-x-1">
          <div className="stat-desc font-semibold text-black">
            Revenue Statistics
          </div>
          <div className="rounded-md p-0.2">
            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box text-xs">
              <li>
                <a>Day</a>
              </li>
              <li>
                <a>Month</a>
              </li>
              <li>
                <a className="bg-purple-700 text-white">Year</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="stat-value text-xl">$ 12,547K</div>
          <div className="rounded-lg text-xs bg-emerald-100 px-1 py-0.5 text-emerald-800 font-semibold relative top-[-4px] ml-2 w-auto">
            <span className="ml-0.5">+3.24%</span>
          </div>
        </div>
        <p className="text-tremor-default text-tremor-content text-xs">
          Total income in this year
        </p>
        <div className="text-xs overflow-x-auto h-40">
          <BarChart
            data={dataWithNone}
            index="date"
            categories={["Orders", "Revenue"]}
            colors={['cyan', 'blue']}
            yAxisWidth={70}
            showYAxis={false}
            className="h-32 mt-4"
            stack={true}
            showLegend={false}
            showGridLines={false}
            barCategoryGap={8}
          />
          <Divider />
          <div className="flex justify-center mt-2">
            <div className="flex items-center mr-4">
              <div className="w-3 h-3 bg-cyan-500 mr-2 rounded-sm"></div>
              <span className="text-xs text-tremor-content">Orders</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 mr-2 rounded-sm"></div>
              <span className="text-xs text-tremor-content">Revenue</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
