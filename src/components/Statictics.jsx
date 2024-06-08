import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Statictics() {
  return (
    <>
      <div className="bg-white shadow w-full md:w-1/2 min-h-[320px] md:h-full rounded-md p-[18px]">
        <div className="flex flex-col gap-3 w-full h-full">
          <div className="flex w-full h-[25px] text-base text-[#14184B] items-center font-bold">
            Statistics
          </div>
          <div className="flex w-full flex-grow md:h-[350px] justify-center">
            <Doughnut data={data} className="" />
          </div>
        </div>
      </div>
    </>
  );
}
