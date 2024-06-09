import React, { useEffect } from "react";
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

export default function SalesChart(props) {
  const { dataSales, isLoading } = props;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = dataSales?.map((item) => item.product);
  const sales = dataSales?.map((item) => item.sales);
  const revenue = dataSales?.map((item) => item.revenue);

  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: sales,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Revenue",
        data: revenue,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <div className="bg-white shadow w-full md:w-1/2 h-[320px] md:h-full rounded-md p-[18px]">
        <div className="flex flex-col gap-3 w-full h-full">
          <div className="flex w-full h-[25px] text-base text-[#14184B] items-center font-bold">
            Sales
          </div>
          <div className="flex w-full flex-grow md:h-[350px]">
            {/* <Bar options={options} data={data} className="!w-full !h-full" /> */}
            <Line options={options} data={data} className="!w-full !h-full" />
          </div>
        </div>
      </div>
    </>
  );
}
