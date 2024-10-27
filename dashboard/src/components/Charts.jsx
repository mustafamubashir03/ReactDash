import React from "react";
import { Chart } from "./Chart";
import { data } from "./data";

export default function Charts() {
  return (
    <div className="bg-white rounded-md p-4 shadow-lg w-full lg:w-auto">
      <h3 className="text-slate-600 font-bold text-xl">User Analytics</h3>
      <div className="overflow-hidden">
        <Chart data={data} dataKey="users" />
      </div>
    </div>
  );
}
