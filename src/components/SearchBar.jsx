import React from "react";
import { Input } from "./ui/input";

export default function SearchBar(props) {
  const { table, setText } = props;

  return (
    <>
      <Input
        placeholder="Filter Products..."
        value={table?.getColumn("product")?.getFilterValue() ?? ""}
        onChange={(event) => {
          table?.getColumn("product")?.setFilterValue(event.target.value);
          setText(event.target.value);
        }}
        className="max-w-sm"
      />
    </>
  );
}
