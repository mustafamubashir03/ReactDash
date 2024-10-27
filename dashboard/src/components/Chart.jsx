import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";


export function Chart({data,dataKey}) {

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <Line type="monotone" dataKey={dataKey} stroke="rgb(71 85 105)" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
