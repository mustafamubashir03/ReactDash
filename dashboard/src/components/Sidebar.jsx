import React from "react";
import {
  Home,
  PieChart,
  Paid,
  Group,
  Inventory,
  Receipt,
  Assessment,
  Email,
  Feedback,
  Message,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sticky top-0 left-0 bg-white rounded-md h-full shadow-lg p-4">
      <div className="flex flex-col font-medium gap-3 text-slate-500">
        <ul className="flex flex-col w-full mb-1">
          <h2 className="text-sm font-semibold mb-2 text-slate-400 hidden sm:block">
            Dashboard
          </h2>
          <Link to={"/"}>
            <li className="flex px-1 py-1 gap-2 bg-slate-200 text-slate-700 rounded-md hover:bg-slate-100 hover:text-slate-600 transition-all duration-300 ease-in-out">
              <Home />
              <span className="hidden sm:inline">Home</span>
            </li>
          </Link>
          <li className="flex px-1 py-1 gap-2 rounded-md hover:bg-slate-100 hover:text-slate-600 transition-all duration-300 ease-in-out">
            <PieChart />
            <span className="hidden sm:inline">Analytics</span>
          </li>
          <li className="flex justify-start px-1 py-1 gap-2 rounded-md hover:text-slate-600 hover:bg-slate-100 transition-all duration-300 ease-in-out">
            <Paid />
            <span className="hidden sm:inline">Sales</span>
          </li>
        </ul>

        <ul className="flex flex-col w-full mb-1">
          <h2 className="text-sm font-semibold mb-2 text-slate-400 hidden sm:block">
            Quick menu
          </h2>
          <Link to={"/users"}>
            <li className="flex px-1 py-1 gap-2 rounded-md hover:text-slate-600 hover:bg-slate-100 transition-all duration-300 ease-in-out md:flex-1">
              <Group />
              <span className="hidden sm:inline">Users</span>
            </li>
          </Link>
          <Link to={"/products"}>
            <li className="flex px-1 py-1 gap-2 rounded-md hover:text-slate-600 hover:bg-slate-100 transition-all duration-300 ease-in-out md:flex-1">
              <Inventory />
              <span className="hidden sm:inline">Products</span>
            </li>
          </Link>
          <li className="flex justify-start px-1 py-1 gap-2 hover:text-slate-600 rounded-md hover:bg-slate-100 transition-all duration-300 ease-in-out md:flex-1">
            <Receipt />
            <span className="hidden sm:inline">Transactions</span>
          </li>
          <li className="flex justify-start px-1 py-1 gap-2 hover:text-slate-600 rounded-md hover:bg-slate-100 transition-all duration-300 ease-in-out md:flex-1">
            <Assessment />
            <span className="hidden sm:inline">Report</span>
          </li>
        </ul>

        <ul className="flex flex-col w-full">
          <h2 className="text-sm font-semibold mb-2 text-slate-400 hidden sm:block">
            Navigation
          </h2>
          <li className="flex px-1 py-1 gap-2 hover:text-slate-600 rounded-md hover:bg-slate-100 transition-all duration-300 ease-in-out">
            <Email />
            <span className="hidden sm:inline">Mail</span>
          </li>
          <li className="flex px-1 py-1 gap-2 hover:text-slate-600 rounded-md hover:bg-slate-100 transition-all duration-300 ease-in-out">
            <Feedback />
            <span className="hidden sm:inline">Feedback</span>
          </li>
          <li className="flex justify-start hover:text-slate-600 px-1 pt-1 gap-2 rounded-md hover:bg-slate-100 transition-all duration-300 ease-in-out">
            <Message />
            <span className="hidden sm:inline">Messages</span>
          </li>
        </ul>
        <ul className="flex flex-col w-full">
          <h2 className="text-sm font-semibold mb-2 text-slate-400 hidden sm:block">
            Staff
          </h2>
          <li className="flex px-1 py-1 hover:text-slate-600 gap-2 rounded-md hover:bg-slate-100 transition-all duration-300 ease-in-out">
            <Email />
            <span className="hidden sm:inline">Manage</span>
          </li>
          <li className="flex px-1 py-1 gap-2 hover:text-slate-600 rounded-md hover:bg-slate-100 transition-all duration-300 ease-in-out">
            <Feedback />
            <span className="hidden sm:inline">Analytics</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
