"use client";

import DateFilter from "@/components/DateFilter";
import SalesChart from "@/components/SalesChart";
import Statictics from "@/components/Statictics";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#f3f3f3]">
      <div className="flex w-full min-h-[720px] flex-col items-center justify-center gap-5 py-5">
        <div className="flex w-5/6 justify-end h-[34px]">
          <DateFilter />
        </div>
        <div className="flex w-5/6 h-fit md:min-h-[320px] gap-5 md:flex-row flex-col">
          <SalesChart />
          <Statictics />
        </div>
        <div className="flex w-5/6 min-h-[400px] bg-white shadow rounded-md"></div>
      </div>
    </main>
  );
}
