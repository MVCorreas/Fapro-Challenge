import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const PieChart = ({ data }) => {
  const chartRef = useRef(null);


  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "pie",
        data: {
          labels: data.map((d) => d.name),
          datasets: [
            {
              label: "Expenses",
              data: data.map((d) => d.amount),
              backgroundColor: data.map((d) => d.color),
              borderColor: "rgba(255, 255, 255, 1)",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  const { label, raw } = tooltipItem;
                  const dataset = tooltipItem.dataset;
                  const total = dataset.data.reduce((sum, value) => sum + value, 0);
                  const percentage = ((raw / total) * 100).toFixed(1);
                  return `${label}: $${raw.toLocaleString()} (${percentage}%)`;
                },
              },
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [data]);

  return (
    <div className="relative w-full h-full">
      <canvas ref={chartRef} />
    </div>
  );
};
