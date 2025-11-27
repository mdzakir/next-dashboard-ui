"use client";
import Image from "next/image";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

// #region Sample data
const data = [
  {
    name: "Total",
    count: 108,
    fill: "#fff",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#fae27c",
  },
  {
    name: "Boys",
    count: 55,
    fill: "#c3ebfa",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 shadow-md">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            responsive
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* bottom */}
      <div className="flex justify-center gap-16">
        <div className="">
          <div className="w-5 h-5 bg-smsSky-200 rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-500">Boys (55%)</h2>
        </div>
        <div className="">
          <div className="w-5 h-5 bg-smsSky-200 rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-500">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
