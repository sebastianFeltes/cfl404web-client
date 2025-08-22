import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graficos = () => {
  const labels = Array.from({ length: 26 }, (_, i) => 2000 + i);

  const data = {
    labels,
    datasets: [
      {
        label: "Egresados",
        data: [
          50, 55, 60, 65, 70, 75, 80, 85, 92, 98,
          100, 105, 110, 115, 118, 120, 135, 150, 165, 180,
          95, 140, 175, 190, 210, 230
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
        fill: true,
        pointRadius: 4,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Egresados (2000 - 2025)",
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default Graficos;
