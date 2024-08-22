import {BarChartPage} from "./BarChartPage";
import { Stats } from "./Stats";
import { ArtChartPage} from './ArtChartPage'
import { TableContent } from "./TableContent";
import { UsersListCard } from "./UsersListCard";

export const MainScreen = () => {
  return (
    <div className="flex flex-col h-full mt-24 md:mt-32 lg:mt-24 bg-slate-900">
      <div className="flex items-center justify-between m-2">
        <h2>Overview</h2>
        <div className="breadcrumbs text-sm">
          <ul className="flex space-x-2 text-xs">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
            <li className="font-bold">Overview</li>
          </ul>
        </div>
      </div>
      <div className="mt-2"> 
        <Stats />
      </div>
      <div className="flex flex-col md:flex-row gap-1 mt-1">
        <div className="md:w-[50%] w-full">
          <BarChartPage />
        </div>
        <div className="md:w-[50%] w-full">
          <ArtChartPage />
        </div>
      </div>
      <div className="flex space-x-4 mt-1">
        <div className="w-1/3 ">
          <TableContent />
        </div>
        <div className="w-1/3 ">
          <UsersListCard />
        </div>
      </div>
     
    </div>
  );
};
