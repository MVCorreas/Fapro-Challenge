'use client';

import { Card, DonutChart, List, ListItem } from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    name: 'Travel',
    amount: 6730,
    share: '32.1%',
    color: 'bg-cyan-500',
  },
  {
    name: 'IT & equipment',
    amount: 4120,
    share: '19.6%',
    color: 'bg-blue-500',
  },
  {
    name: 'Office supplies',
    amount: 3210,
    share: '15.3%',
    color: 'bg-violet-500',
  },
  {
    name: 'Communication',
    amount: 3010,
    share: '14.3%',
    color: 'bg-fuchsia-500',
  },
];

const currencyFormatter = (number) => {
  return '$' + Intl.NumberFormat('us').format(number).toString();
};

export const DonutChartComponent = () => {
  return (
    <div className="bg-white shadow-lg w-[80%] mx-auto max-h-auto rounded-sm h-80 overflow-hidden"> {/* Added overflow-hidden */}
      <Card className="max-w-xs mx-auto">
        <h3 className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Total expenses by category
        </h3>
        <DonutChart
          className="mt-2"
          data={data}
          category="amount"
          index="name"
          valueFormatter={currencyFormatter}
          showTooltip={false}
          colors={['cyan', 'lime', 'violet', 'fuchsia']}
        />
        <p className="mt-2 flex items-center justify-between text-xs text-tremor-content dark:text-dark-tremor-content truncate">
          <span className="truncate">Category</span>
          <span className="truncate">Amount / Share</span>
        </p>
        <List className="mt-1 overflow-auto"> {/* Added overflow-auto */}
          {data.map((item) => (
            <ListItem key={item.name} className="space-x-2">
              <div className="flex items-center space-x-1.5 truncate">
                <span
                  className={classNames(
                    item.color,
                    'size-2 shrink-0 rounded-sm',
                  )}
                  aria-hidden={true}
                />
                <span className="truncate text-xs dark:text-dark-tremor-content-emphasis">
                  {item.name}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-medium tabular-nums text-sm text-tremor-content-strong dark:text-dark-tremor-content-strong truncate">
                  {currencyFormatter(item.amount)}
                </span>
                <span className="rounded-sm bg-tremor-background-subtle px-1 py-0.5 text-xs font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis truncate">
                  {item.share}
                </span>
              </div>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
}
