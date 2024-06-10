"use client";

import DateFilter from "@/components/DateFilter";
import SalesChart from "@/components/SalesChart";
import SalesTable from "@/components/SalesTable";
import Statictics from "@/components/Statictics";
import { readAllSales } from "@/utils/hooks";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import React, { useState } from "react";
import { useDebounce } from "use-debounce";

export default function Home() {
  const [date, setDate] = React.useState({
    from: new Date(2023, 0, 1),
    to: addDays(new Date(2023, 0, 1), 20),
  });

  const [text, setText] = useState("");
  const [value] = useDebounce(text, 1000);

  const activeFilter = {
    keywords: "",
    product: value,
    start_date: date.from,
    end_date: date.to,
  };

  const { data: dataAllSales, isLoading } = readAllSales(activeFilter);

  const dataSales = dataAllSales && dataAllSales?.data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#f3f3f3]">
      <div className="flex w-full min-h-[720px] flex-col items-center justify-center gap-5 py-5">
        <div className="flex w-5/6 justify-end h-[34px] gap-3">
          <DateFilter date={date} setDate={setDate} format={format} />
        </div>
        <div className="flex w-5/6 h-fit md:min-h-[320px] gap-5 md:flex-row flex-col">
          <SalesChart dataSales={dataSales} isLoading={isLoading} />
          <Statictics dataSales={dataSales} />
        </div>
        <SalesTable
          dataSales={dataSales}
          isLoading={isLoading}
          setText={setText}
        />
      </div>
    </main>
  );
}
