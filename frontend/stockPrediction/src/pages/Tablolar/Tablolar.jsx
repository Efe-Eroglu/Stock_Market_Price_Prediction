import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./tablolar.css";
import {
  Line,
  Bar,
  Radar,
  Bubble,
  PolarArea,
  Scatter,
  Doughnut,
  Pie,
} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";

const Tablolar = () => {
  const { hisseAd } = useParams();

  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, []);

  const [hisseler, setHisseler] = useState([]);
  const [dtree_hisseler, dtree_setHisseler] = useState([]);
  const [rforestHisseler, rforest_setHisseler] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/ann/${hisseAd}`
        );
        setHisseler(response.data);
      } catch (error) {
        console.log({ error });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/decision-tree/${hisseAd}`
        );
        dtree_setHisseler(response.data);
      } catch (error) {
        console.log({ error });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/random-forest/${hisseAd}`
        );
        rforest_setHisseler(response.data);
      } catch (error) {
        console.log({ error });
      }
    };
    fetchData();
  }, []);

  const katman_data = {
    labels: [
      hisseler[0]?.katman?.[0],
      hisseler[0]?.katman?.[1],
      hisseler[0]?.katman?.[2],
      hisseler[0]?.katman?.[3],
      hisseler[0]?.katman?.[4],
    ],
    datasets: [
      {
        label: "Katman Sayısı",
        data: [
          hisseler[0]?.dogruluk?.[0],
          hisseler[0]?.dogruluk?.[1],
          hisseler[0]?.dogruluk?.[2],
          hisseler[0]?.dogruluk?.[3],
          hisseler[0]?.dogruluk?.[4],
        ],
        fill: true,
        backgroundColor: "rgba(75,192, 192,0.7)",
        borderColor: "rgb(255, 255, 255)",
        tension: 0.2,
      },
    ],
  };

  const batch_data = {
    labels: [
      hisseler[2]?.batch_size?.[0],
      hisseler[2]?.batch_size?.[1],
      hisseler[2]?.batch_size?.[2],
      hisseler[2]?.batch_size?.[3],
      hisseler[2]?.batch_size?.[4],
    ],
    datasets: [
      {
        pointBackgroundColor: "rgb(75, 192, 192)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(75, 192, 192)",
        label: "Batch Size Değeri",
        data: [
          hisseler[2]?.dogruluk?.[0],
          hisseler[2]?.dogruluk?.[1],
          hisseler[2]?.dogruluk?.[2],
          hisseler[2]?.dogruluk?.[3],
          hisseler[2]?.dogruluk?.[4],
        ],
        backgroundColor: "rgba(75,192, 192,0.6)",
        borderColor: "rgb(255, 255, 255)",
      },
    ],
  };

  const max_depth_data = {
    labels: [
      rforestHisseler[1]?.max_depth?.[0],
      rforestHisseler[1]?.max_depth?.[1],
      rforestHisseler[1]?.max_depth?.[2],
      rforestHisseler[1]?.max_depth?.[3],
      rforestHisseler[1]?.max_depth?.[4],
    ],
    datasets: [
      {
        pointBackgroundColor: "rgb(75, 192, 192)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(75, 192, 192)",
        label: "Max Depth",
        data: [
          rforestHisseler[1]?.dogruluk?.[0],
          rforestHisseler[1]?.dogruluk?.[1],
          rforestHisseler[1]?.dogruluk?.[2],
          rforestHisseler[1]?.dogruluk?.[3],
          rforestHisseler[1]?.dogruluk?.[4],
        ],
        backgroundColor: "rgba(75,192, 192,0.5)",
        borderColor: "rgb(255, 255, 255)",
      },
    ],
  };

  const epoch_data = {
    labels: [
      hisseler[1]?.epochs?.[0],
      hisseler[1]?.epochs?.[1],
      hisseler[1]?.epochs?.[2],
      hisseler[1]?.epochs?.[3],
      hisseler[1]?.epochs?.[4],
    ],
    datasets: [
      {
        fill: true,
        label: "Epochs Değeri",
        data: [58, 75, 62, 58, 65],
        backgroundColor: "rgba(75,192, 192,0.6)",
        borderColor: "rgb(255, 255, 255)",
        borderWidth: 1,
        tension: 0.5,
      },
    ],
  };

  const depth_data = {
    labels: [
      dtree_hisseler[0]?.max_depth?.[0],
      dtree_hisseler[0]?.max_depth?.[1],
      dtree_hisseler[0]?.max_depth?.[2],
      dtree_hisseler[0]?.max_depth?.[3],
      dtree_hisseler[0]?.max_depth?.[4],
    ],
    datasets: [
      {
        label: "Max Depth",
        data: [
          dtree_hisseler[0]?.dogruluk?.[0],
          dtree_hisseler[0]?.dogruluk?.[1],
          dtree_hisseler[0]?.dogruluk?.[2],
          dtree_hisseler[0]?.dogruluk?.[3],
          dtree_hisseler[0]?.dogruluk?.[4],
        ],
        fill: true,
        backgroundColor: "rgba(75,192, 192,0.7)",
        borderColor: "rgb(255, 255, 255)",
        tension: 0.1,
      },
    ],
  };

  const leaf_data = {
    labels: [
      dtree_hisseler[1]?.min_samples_leaf?.[0],
      dtree_hisseler[1]?.min_samples_leaf?.[1],
      dtree_hisseler[1]?.min_samples_leaf?.[2],
      dtree_hisseler[1]?.min_samples_leaf?.[3],
      dtree_hisseler[1]?.min_samples_leaf?.[4],
    ],
    datasets: [
      {
        label: "Min Samples Leaf",
        data: [
          dtree_hisseler[1]?.dogruluk?.[0],
          dtree_hisseler[1]?.dogruluk?.[1],
          dtree_hisseler[1]?.dogruluk?.[2],
          dtree_hisseler[1]?.dogruluk?.[3],
          dtree_hisseler[1]?.dogruluk?.[4],
        ],
        fill: true,
        backgroundColor: "rgba(75,192, 192,0.6)",
        borderColor: "rgb(255, 255, 255)",
        tension: 0.1,
      },
    ],
  };

  const split_data = {
    labels: [
      dtree_hisseler[2]?.min_samples_split?.[0],
      dtree_hisseler[2]?.min_samples_split?.[1],
      dtree_hisseler[2]?.min_samples_split?.[2],
      dtree_hisseler[2]?.min_samples_split?.[3],
      dtree_hisseler[2]?.min_samples_split?.[4],
    ],
    datasets: [
      {
        label: "Min Samples Split",
        data: [
          dtree_hisseler[2]?.dogruluk?.[0],
          dtree_hisseler[2]?.dogruluk?.[1],
          dtree_hisseler[2]?.dogruluk?.[2],
          dtree_hisseler[2]?.dogruluk?.[3],
          dtree_hisseler[2]?.dogruluk?.[4],
        ],
        fill: true,
        backgroundColor: "rgba(75,192, 192,0.6)",
        borderColor: "rgb(255, 255, 255)",
        tension: 0.2,
      },
    ],
  };

  const n_estimators = {
    labels: [
      rforestHisseler[0]?.n_estimator?.[0],
      rforestHisseler[0]?.n_estimator?.[1],
      rforestHisseler[0]?.n_estimator?.[2],
      rforestHisseler[0]?.n_estimator?.[3],
      rforestHisseler[0]?.n_estimator?.[4],
    ],
    datasets: [
      {
        label: "N-Estimators",
        data: [
          rforestHisseler[0]?.dogruluk?.[0],
          rforestHisseler[0]?.dogruluk?.[1],
          rforestHisseler[0]?.dogruluk?.[2],
          rforestHisseler[0]?.dogruluk?.[3],
          rforestHisseler[0]?.dogruluk?.[4],
        ],
        fill: true,
        backgroundColor: "rgba(75,192, 192,0.5)",
        borderColor: "rgb(255, 255, 255)",
        tension: 0.2,
      },
    ],
  };

  const min_leaf = {
    labels: [
      rforestHisseler[2]?.min_samples_leaf?.[0],
      rforestHisseler[2]?.min_samples_leaf?.[1],
      rforestHisseler[2]?.min_samples_leaf?.[2],
      rforestHisseler[2]?.min_samples_leaf?.[3],
      rforestHisseler[2]?.min_samples_leaf?.[4],
    ],
    datasets: [
      {
        label: "Min Samples Leaf",
        data: [
          rforestHisseler[2]?.dogruluk?.[0],
          rforestHisseler[2]?.dogruluk?.[1],
          rforestHisseler[2]?.dogruluk?.[2],
          rforestHisseler[2]?.dogruluk?.[3],
          rforestHisseler[2]?.dogruluk?.[4],
        ],
        fill: true,
        backgroundColor: "rgba(75,192, 192,0.7)",
        borderColor: "rgb(255, 255, 255)",
        tension: 0.2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Hiper Parametre",
        },
        ticks: {
          stepSize: 1, // Aksın adım büyüklüğü
        },
      },
      y: {
        title: {
          display: true,
          text: "Doğruluk Değeri",
        },
      },
    },
  };

  return (
    <div className="tablolar w-full">
      {user && (
        <div className="konteyner flex flex-col items-center ">
          <h1 className="baslik text-center text-5xl p-10 mr-20"><strong>Artificial Neural Network</strong></h1>
          <div className="model flex flex-col items-center w-1/2 gap-20 mt-10 mr-28">
            <Bar data={katman_data} options={options} />
            <Line data={epoch_data} options={options} />
            <Radar data={batch_data} />
          </div>

          <h1 className="baslik text-center text-5xl p-10 pt-32 mr-20"><strong>Decision Tree</strong></h1>
          <div className="model flex flex-col items-center w-1/2 gap-20 mt-10 mr-28">
            <Bar data={depth_data} options={options} />
            <Line data={leaf_data} options={options} />
            <Bar data={split_data} options={options} />
          </div>

          <h1 className="baslik text-center text-5xl p-10 mr-20"><strong>Random Forest</strong></h1>
          <div className="model flex flex-col items-center w-1/2 gap-20 mt-10 mr-28 mb-20">
            <Radar data={max_depth_data} />
            <Bar data={min_leaf} options={options} />
            <Line data={n_estimators} options={options} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tablolar;
