"use client";

import DateFilter from "@/components/DateFilter";
import SalesChart from "@/components/SalesChart";
import SalesTable from "@/components/SalesTable";
import Statictics from "@/components/Statictics";
import { readAllSales } from "@/utils/hooks";

export default function Home() {
  const activeFilter = {
    keywords: "",
  };

  const { data: dataAllSales, isLoading } = readAllSales(activeFilter);

  const dataSales = dataAllSales && dataAllSales?.data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#f3f3f3]">
      <div className="flex w-full min-h-[720px] flex-col items-center justify-center gap-5 py-5">
        <div className="flex w-5/6 justify-end h-[34px]">
          <DateFilter />
        </div>
        <div className="flex w-5/6 h-fit md:min-h-[320px] gap-5 md:flex-row flex-col">
          <SalesChart dataSales={dataSales} isLoading={isLoading} />
          <Statictics dataSales={dataSales} />
        </div>
        <SalesTable dataSales={dataSales} isLoading={isLoading} />
      </div>
    </main>
  );
}
