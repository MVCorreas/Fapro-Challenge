'use client';

import { Card, Divider, Switch } from "@tremor/react";
import { BarChart } from './BarChart'

export const BarChartComponent = () => {
  

  return (
    <div className="flex flex-row m-2 w-full justify-center">
      <Card className="sm:max-w-2xl bg-white shadow-2xl rounded-sm m-1 p-3 overflow-hidden">
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
                <a className="bg-dark-teal text-white">Year</a>
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
          <BarChart/>
          
        </div>
      </Card>
    </div>
  );
};
