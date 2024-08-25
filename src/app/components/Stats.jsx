import {
  RiArrowDownLine,
  RiArrowRightLine,
  RiArrowUpLine,
} from "@remixicon/react";
import {
  EcommerceIcon,
  MoneyIcon,
  UsersIcon,
  WalletIcon,
} from "../../../public/Icons";

const stats = [
  {
    id: 1,
    title: "Revenue",
    icon: MoneyIcon,
    value: 587.54,
    increase: true,
    increaseValue: 10.8,
    transformation: 112.58,
    subtitle: "than last week",
  },
  {
    id: 2,
    title: "Sales",
    icon: EcommerceIcon,
    value: 4500,
    increase: true,
    increaseValue: 21.2,
    transformation: 25,
    subtitle: "than last week",
  },
  {
    id: 3,
    title: "Customer",
    icon: UsersIcon,
    value: 2200,
    increase: false,
    increaseValue: 10.2,
    transformation: -312,
    subtitle: "than last week",
  },
  {
    id: 4,
    title: "Spending",
    icon: WalletIcon,
    value: 112.54,
    increase: true,
    increaseValue: 8.5,
    transformation: 54.65,
    subtitle: "than last week",
  },
];

export const Stats = () => {
  return (
    <div className="flex flex-wrap justify-between m-2">
      {stats.map(
        ({
          id,
          title,
          icon: Icon,
          value,
          increase,
          increaseValue,
          transformation,
          subtitle,
        }) => (
          <div key={id} className="stats shadow-2xl w-[24%] rounded-md">
            <div className="stat">
              <div className="flex flex-row items-center justify-between space-x-1">
                <div className="stat-desc">{title}</div>
                <div className="bg-[#e5e7eb] rounded-md p-1">
                  <Icon />
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="stat-value text-xl">{value}</div>
                <div
                  className={`rounded-lg text-xs px-1 py-0.5 text-tremor-label font-semibold relative top-[-4px] ml-2 w-auto ${
                    increase
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-500"
                      : "bg-red-100 text-red-800 dark:bg-red-400/20 dark:text-red-500"
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
              <div className="stat-desc">
                <span className={increase ? "text-green-500" : "text-red-800"}>
                  {" "}
                  {transformation > 0 ? `+${transformation}` : transformation}
                </span>
                <span className="text-gray-500"> {subtitle}</span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
