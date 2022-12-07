import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["2013", "2014", "2015", "2016", "2017", "2018"];

const data = {
    labels: labels,
    datasets: [
        {
            label: "Nombre d'exoplanètes découvertes",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [189, 844, 186, 1464, 147, 3726],
        },
    ],
};

const LineChart = () => {
    return (
        <div>
            <Line data={data} />
        </div>
    );
};

export default LineChart;