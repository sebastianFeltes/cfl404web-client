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

const GraficoAsistencias = () => {
  const labels = [
    "2014","2015","2016","2017","2018","2019",
    "2020","2021","2022","2023","2024","2025"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Asistencias por Año",
        data: [
          850, 900, 950, 1020, 1080, 1150,
          600, 870, 1050, 1200, 1280, 1350
        ],
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
        text: "Asistencias al Centro de Formación Laboral (2014 - 2025)",
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default GraficoAsistencias;
