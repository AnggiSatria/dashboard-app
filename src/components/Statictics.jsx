import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  LinearScale,
  CategoryScale,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// ChartJS.register(ArcElement, Tooltip, Legend);

// const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

export default function Statictics(props) {
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

  const labels = dataSales?.map((item) => item.product);
  const sales = dataSales?.map((item) => item.sales);
  const revenue = dataSales?.map((item) => item.revenue);

  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: sales,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Revenue",
        data: revenue,
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
      <div className="bg-white shadow w-full md:w-1/2 min-h-[320px] md:h-full rounded-md p-[18px]">
        <div className="flex flex-col gap-3 w-full h-full">
          <div className="flex w-full h-[25px] text-base text-[#14184B] items-center font-bold">
            Statistics
          </div>
          <div className="flex w-full flex-grow md:h-[350px] justify-center">
            <Bar options={options} data={data} className="!w-full !h-full" />
          </div>
        </div>
      </div>
    </>
  );
}
