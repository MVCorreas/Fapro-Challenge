import { BarChartComponent } from "./BarChartComponent";
import { Stats } from "./Stats";
import { ArtChartComponent } from "./ArtChartComponent";
import { TableContent } from "./TableContent";
import { NewsListCard } from "./NewsListCard";
import { DonutChartComponent } from "./DonutChartComponent";

export const MainScreen = () => {
  return (
    <div className="relative h-full mt-24 md:mt-32 lg:mt-24">
      <div
        className="absolute inset-0 opacity-30 z-0"
        style={{
          backgroundImage: "url('/Assets/GreenBackground.jpg')",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mx-10 py-2">
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

        <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <Stats />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <BarChartComponent />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <ArtChartComponent />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <DonutChartComponent />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <NewsListCard />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <TableContent />
          </div>
        </div>
      </div>
    </div>
  );
};
