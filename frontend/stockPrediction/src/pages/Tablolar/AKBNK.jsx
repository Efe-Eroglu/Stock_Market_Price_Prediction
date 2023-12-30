import React, { useEffect, useState } from "react";
import "./tablolar.css";
import { Line, Bar, Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";

const AKBNK = () => {
  const [hisseler, setHisseler] = useState([]);
  const [dtree_hisseler, dtree_setHisseler] = useState([]);
  const [rforestHisseler, rforest_setHisseler] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/ann/AKBNK");
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
        const response = await axios.get("http://localhost:5000/api/decision-tree/AKBNK");
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
        const response = await axios.get("http://localhost:5000/api/random-forest/AKBNK");
        rforest_setHisseler(response.data);
      } catch (error) {
        console.log({ error });
      }
    };
    fetchData();
  }, []);


  const katman_data = {
    labels: [
      hisseler[0].katman[0],
      hisseler[0].katman[1],
      hisseler[0].katman[2],
      hisseler[0].katman[3],
      hisseler[0].katman[4],
    ],
    datasets: [
      {
        label: "Katman Sayısı",
        data: [
          hisseler[0].dogruluk[0],
          hisseler[0].dogruluk[1],
          hisseler[0].dogruluk[2],
          hisseler[0].dogruluk[3],
          hisseler[0].dogruluk[4],
        ],
        fill: true,
        backgroundColor: "rgba(75,192, 192,0.7)",
        borderColor: "rgb(255, 255, 255)",
        tension: 0.3,
      },
    ],
  };

  const dropout1_data = {
    labels: [
      hisseler[3].dropout_miktar[0],
      hisseler[3].dropout_miktar[1],
      hisseler[3].dropout_miktar[2],
      hisseler[3].dropout_miktar[3],
      hisseler[3].dropout_miktar[4],
    ],
    datasets: [
      {
        label: "Dropout Miktarı",
        data: [
          hisseler[3].dogruluk[0],
          hisseler[3].dogruluk[1],
          hisseler[3].dogruluk[2],
          hisseler[3].dogruluk[3],
          hisseler[3].dogruluk[4],
        ],
        fill: true,
        backgroundColor: "rgba(75,192, 192,0.5)",
        borderColor: "rgb(255, 255, 255)",
        tension: 0.3,
      },
    ],
  };

  const dropout2_data = {
    labels: [
      hisseler[4].dropout_sayi[0],
      hisseler[4].dropout_sayi[1],
      hisseler[4].dropout_sayi[2],
      hisseler[4].dropout_sayi[3],
      hisseler[4].dropout_sayi[4],
    ],
    datasets: [
      {
        label: "Dropout Sayısı",
        data: [
          hisseler[4].dogruluk[0],
          hisseler[4].dogruluk[1],
          hisseler[4].dogruluk[2],
          hisseler[4].dogruluk[3],
          hisseler[4].dogruluk[4],
        ],
        fill: true,
        backgroundColor: "rgba(75,192, 192,0.5)",
        borderColor: "rgb(255, 255, 255)",
        tension: 0.3,
      },
    ],
  };

  const batch_data = {
    labels: [
      hisseler[2].batch_size[0],
      hisseler[2].batch_size[1],
      hisseler[2].batch_size[2],
      hisseler[2].batch_size[3],
      hisseler[2].batch_size[4],
    ],
    datasets: [
      {
        pointBackgroundColor: "rgb(75, 192, 192)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(75, 192, 192)",
        label: "Batch Size Değeri",
        data: [
          hisseler[2].dogruluk[0],
          hisseler[2].dogruluk[1],
          hisseler[2].dogruluk[2],
          hisseler[2].dogruluk[3],
          hisseler[2].dogruluk[4],
        ],
        backgroundColor: "rgba(75,192, 192,0.7)",
        borderColor: "rgb(255, 255, 255)",
      },
    ],
  };

  const epoch_data = {
    labels: [
      hisseler[1].epochs[0],
      hisseler[1].epochs[1],
      hisseler[1].epochs[2],
      hisseler[1].epochs[3],
      hisseler[1].epochs[4],
    ],
    datasets: [
      {
        label: "Epochs Değeri",
        data: [58, 75, 62, 58, 65],
        backgroundColor: "rgba(75,192, 192,0.7)",
        borderColor: "rgb(255, 255, 255)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const depth_data = {
    labels: [
      dtree_hisseler[0].max_depth[0],
      dtree_hisseler[0].max_depth[1],
      dtree_hisseler[0].max_depth[2],
      dtree_hisseler[0].max_depth[3],
      dtree_hisseler[0].max_depth[4],
    ],
    datasets: [
      {
        label: "Max Depth",
        data: [
          dtree_hisseler[0].dogruluk[0],
          dtree_hisseler[0].dogruluk[1],
          dtree_hisseler[0].dogruluk[2],
          dtree_hisseler[0].dogruluk[3],
          dtree_hisseler[0].dogruluk[4],
        ],
        fill: true,
        backgroundColor: "rgba(75,192, 192,0.7)",
        borderColor: "rgb(255, 255, 255)",
        tension: 0.3,
      },
    ],
  };

  const leaf_data = {
    labels: [
      dtree_hisseler[1].min_samples_leaf[0],
      dtree_hisseler[1].min_samples_leaf[1],
      dtree_hisseler[1].min_samples_leaf[2],
      dtree_hisseler[1].min_samples_leaf[3],
      dtree_hisseler[1].min_samples_leaf[4],
    ],
    datasets: [
      {
        label: "Min Samples Leaf",
        data: [
          dtree_hisseler[1].dogruluk[0],
          dtree_hisseler[1].dogruluk[1],
          dtree_hisseler[1].dogruluk[2],
          dtree_hisseler[1].dogruluk[3],
          dtree_hisseler[1].dogruluk[4],
        ],
        fill: true,
        backgroundColor: "rgba(75,192, 192,0.7)",
        borderColor: "rgb(255, 255, 255)",
        tension: 0.3,
      },
    ],
  };

  const split_data = {
    labels: [
      dtree_hisseler[2].min_samples_split[0],
      dtree_hisseler[2].min_samples_split[1],
      dtree_hisseler[2].min_samples_split[2],
      dtree_hisseler[2].min_samples_split[3],
      dtree_hisseler[2].min_samples_split[4],
    ],
    datasets: [
      {
        label: "Min Samples Split",
        data: [
          dtree_hisseler[2].dogruluk[0],
          dtree_hisseler[2].dogruluk[1],
          dtree_hisseler[2].dogruluk[2],
          dtree_hisseler[2].dogruluk[3],
          dtree_hisseler[2].dogruluk[4],
        ],
        fill: true,
        backgroundColor: "rgba(75,192, 192,0.7)",
        borderColor: "rgb(255, 255, 255)",
        tension: 0.3,
      },
    ],
  };

  const max_depth_data = {
    labels: [
      rforestHisseler[0].max_depth[0],
      rforestHisseler[0].max_depth[1],
      rforestHisseler[0].max_depth[2],
      rforestHisseler[0].max_depth[3],
      rforestHisseler[0].max_depth[4],
    ],
    datasets: [
      {
        label: "Max Depth",
        data: [
          rforestHisseler[0].dogruluk[0],
          rforestHisseler[0].dogruluk[1],
          rforestHisseler[0].dogruluk[2],
          rforestHisseler[0].dogruluk[3],
          rforestHisseler[0].dogruluk[4],
        ],
        fill: true,
        backgroundColor: "rgba(75,192, 192,0.7)",
        borderColor: "rgb(255, 255, 255)",
        tension: 0.3,
      },
    ],
  };

  const n_estimators = {
    labels: [
      rforestHisseler[1].n_estimator[0],
      rforestHisseler[1].n_estimator[1],
      rforestHisseler[1].n_estimator[2],
      rforestHisseler[1].n_estimator[3],
      rforestHisseler[1].n_estimator[4],
    ],
    datasets: [
      {
        label: "N-Estimators",
        data: [
          rforestHisseler[1].dogruluk[0],
          rforestHisseler[1].dogruluk[1],
          rforestHisseler[1].dogruluk[2],
          rforestHisseler[1].dogruluk[3],
          rforestHisseler[1].dogruluk[4],
        ],
        fill: true,
        backgroundColor: "rgba(75,192, 192,0.7)",
        borderColor: "rgb(255, 255, 255)",
        tension: 0.3,
      },
    ],
  };

  const min_leaf = {
    labels: [
      rforestHisseler[2].min_samples_leaf[0],
      rforestHisseler[2].min_samples_leaf[1],
      rforestHisseler[2].min_samples_leaf[2],
      rforestHisseler[2].min_samples_leaf[3],
      rforestHisseler[2].min_samples_leaf[4],
    ],
    datasets: [
      {
        label: "Min Samples Leaf",
        data: [
          rforestHisseler[2].dogruluk[0],
          rforestHisseler[2].dogruluk[1],
          rforestHisseler[2].dogruluk[2],
          rforestHisseler[2].dogruluk[3],
          rforestHisseler[2].dogruluk[4],
        ],
        fill: true,
        backgroundColor: "rgba(75,192, 192,0.7)",
        borderColor: "rgb(255, 255, 255)",
        tension: 0.3,
      },
    ],
  };


  return (
    <div className="tablolar w-full">
      
      <h1 className="text-center text-3xl p-10">Ann Modeli</h1>
      <div className="ann flex justify-center flex-col w-1/2 gap-20 ml-10">
        <Bar data={katman_data} options={options} />
         <Bar data={epoch_data} options={options} />
        <Radar data={batch_data} />
        <Line data={dropout2_data} options={options} />
        <Line data={dropout1_data} options={options} />
      </div>

      <h1 className="text-center text-3xl p-10 pt-32">Decision Tree</h1>
      <div className="dtree flex justify-center flex-col w-1/2 gap-20 ml-10">
        <Bar data={depth_data} options={options} /> 
        <Bar data={leaf_data} options={options} /> 
        <Bar data={split_data} options={options} /> 
      </div>

      <h1 className="text-center text-3xl p-10">Random Forest</h1>
      <div className="dtree flex justify-center flex-col w-1/2 gap-20 ml-10">
      <Bar data={max_depth_data} options={options} /> 
      <Bar data={min_leaf} options={options} /> 
      <Bar data={n_estimators} options={options} /> 

      </div>
    </div>
  );
};

export default AKBNK;
