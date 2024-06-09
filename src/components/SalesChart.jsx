import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { readAllSales } from "@/utils/hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = dataSales?.map((res) => {
    return res?.product;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [120, 250, 300, 500, 450, 320, 540],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [200, 400, 350, 600, 500, 450, 600],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  useEffect(() => {
    data.datasets.push(
      dataSales?.map((res) => {
        return {
          label: res?.product,
          data: [120, 250, 300, 500, 450, 320, 540],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        };
      })
    );
  }, []);

  return (
    <>
      <div className="bg-white shadow w-full md:w-1/2 h-[320px] md:h-full rounded-md p-[18px]">
        <div className="flex flex-col gap-3 w-full h-full">
          <div className="flex w-full h-[25px] text-base text-[#14184B] items-center font-bold">
            Sales
          </div>
          <div className="flex w-full flex-grow md:h-[350px]">
            <Bar options={options} data={data} className="!w-full !h-full" />
          </div>
        </div>
      </div>
    </>
  );
}
