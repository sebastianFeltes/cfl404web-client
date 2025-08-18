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

const GraficosHistoricos = () => {
  const labels = [
    "2000","2005","2010","2015","2016","2017","2018","2019",
    "2020","2021","2022","2023","2024","2025"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Egresados",
        data: [50, 80, 100, 120, 135, 150, 165, 180, 95, 140, 175, 190, 210, 230],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
      {
        label: "Asistencias",
        data: [300, 500, 700, 850, 900, 950, 1020, 1150, 600, 870, 1050, 1200, 1280, 1350],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Egresados y Asistencias (2000 - 2025)",
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default GraficosHistoricos;
