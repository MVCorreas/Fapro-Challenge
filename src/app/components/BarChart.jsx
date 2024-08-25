import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const BarChart = () => {
  const chartRef = useRef(null);

  const defaultData = [
    { date: "2014", Orders: 68560, Revenue: 28560 },
    { date: "2015", Orders: 70320, Revenue: 30320 },
    { date: "2016", Orders: 80233, Revenue: 70233 },
    { date: "2017", Orders: 55123, Revenue: 45123 },
    { date: "2018", Orders: 56000, Revenue: 80600 },
    { date: "2019", Orders: 100000, Revenue: 85390 },
    { date: "2020", Orders: 85390, Revenue: 45340 },
    { date: "2021", Orders: 80100, Revenue: 70120 },
    { date: "2022", Orders: 75090, Revenue: 69450 },
    { date: "2023", Orders: 71080, Revenue: 63345 },
    { date: "2024", Orders: 61210, Revenue: 100330 },
  ];

  const maxValue = Math.max(...defaultData.map((d) => d.Orders + d.Revenue));

  const dataWithNone = defaultData.map((d) => ({
    ...d,
    none: maxValue - (d.Orders + d.Revenue),
  }));

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: dataWithNone.map((d) => d.date),
          datasets: [
            {
              label: "Orders",
              data: dataWithNone.map((d) => d.Orders),
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
            {
              label: "Revenue",
              data: dataWithNone.map((d) => d.Revenue),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
            {
              label: "None",
              data: dataWithNone.map((d) => d.none),
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, []);

  return (
    <div className="relative w-full h-96">
      <canvas ref={chartRef} />
    </div>
  );
};