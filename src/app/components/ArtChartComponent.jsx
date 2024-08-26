// 'use client';

import { AreaChart, Card, List, ListItem } from "@tremor/react";
import { RiArrowDownLine, RiArrowUpLine } from "@remixicon/react";

const defaulData = [
  {
    date: "2014",
    Organic: 232,
    Sponsored: 0,
  },
  {
    date: "Feb 23",
    Organic: 241,
    Sponsored: 0,
  },
  {
    date: "Mar 23",
    Organic: 291,
    Sponsored: 0,
  },
  {
    date: "Apr 23",
    Organic: 101,
    Sponsored: 0,
  },
  {
    date: "May 23",
    Organic: 318,
    Sponsored: 0,
  },
  {
    date: "Jun 23",
    Organic: 205,
    Sponsored: 0,
  },
  {
    date: "Jul 23",
    Organic: 372,
    Sponsored: 0,
  },
  {
    date: "Aug 23",
    Organic: 341,
    Sponsored: 0,
  },
  {
    date: "Sep 23",
    Organic: 387,
    Sponsored: 120,
  },
  {
    date: "Oct 23",
    Organic: 220,
    Sponsored: 0,
  },
  {
    date: "Nov 23",
    Organic: 372,
    Sponsored: 0,
  },
  {
    date: "2024",
    Organic: 321,
    Sponsored: 0,
  },
];

const summary = [
  {
    name: "Organic",
    value: 3273,
  },
  {
    name: "Sponsored",
    value: 120,
  },
];

const statusColor = {
  Organic: "bg-blue-500",
  Sponsored: "bg-violet-500",
};

const artChartBadge = [
  {
    id: 1,
    title: "Users",
    number: 427,
    increase: true,
    increaseValue: "3.15%",
  },
  {
    id: 2,
    title: "Sessions",
    number: 34,
    increase: false,
    increaseValue: "2.78%",
  },
  {
    id: 3,
    title: "Bounce Rate",
    number: 427,
    increase: true,
    increaseValue: "40.5%",
  },
];

export const ArtChartComponent = ({ data = defaulData }) => {
  return (
    <div className=" flex flex-row justify-center m-2 w-full">
      <Card className=" w-full sm:max-w-2xl bg-white shadow-2xl rounded-sm m-1 p-2">
        <h3 className="font-semibold text-xs dark:text-dark-tremor-content-strong mb-2">
          Customer Acquisition
        </h3>
        <div className=" flex text-center stats stats-vertical lg:stats-horizontal border-b border rounded-none w-full text-xs">
          {artChartBadge.map(
            ({ id, title, number, increase, increaseValue }) => (
              <div key={id} className="stat">
                <div className="stat-desc">{title}</div>
                <div className="stat-value text-[20px]">{number}</div>
                <div
                  className={` text-xs px-1 py-0.5 text-tremor-label font-semibold relative top-[-4px] ml-2 w-auto ${
                    increase ? " text-green-500 " : " text-red-800 "
                  }`}
                >
                  {increase ? (
                    <RiArrowUpLine
                      className="w-3 h-3 inline-block"
                      aria-hidden={true}
                    />
                  ) : (
                    <RiArrowDownLine
                      className="w-3 h-3 inline-block"
                      aria-hidden={true}
                    />
                  )}
                  <span className="ml-0.5">{increaseValue}%</span>
                </div>
              </div>
            )
          )}
        </div>
        <div className="text-xs">
          <AreaChart
            data={data}
            index="date"
            categories={["Organic", "Sponsored"]}
            colors={["blue", "violet"]}
            showLegend={false}
            showGridLines={false}
            showYAxis={false}
            showGradient={true}
            startEndOnly={true}
            className="mt-6 h-24"
          />
        </div>
      </Card>
    </div>
  );
};
