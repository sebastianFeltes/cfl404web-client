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

// Registrar los componentes de ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraficoEgresados = () => {
  // Datos mockup
  const labels = [
    "2014","2015","2016","2017","2018","2019",
    "2020","2021","2022","2023","2024","2025"
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Egresados por Año",
        data: [
          100, 120, 135, 150, 165, 180,
          95, 140, 175, 190, 210, 230
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3, // suaviza la curva
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
        text: "Egresados del Centro de Formación Laboral (2014 - 2025)",
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default GraficoEgresados;
