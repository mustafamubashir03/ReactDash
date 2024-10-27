import React from "react";
import { Settings, Notifications, GTranslate } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className=" mr-5 ml-5 bg-white h-10 px-4 py-8 sticky top-0 z-30 rounded-md shadow-lg mb-6">
      <div className="h-full flex justify-between items-center">
        <div className="text-slate-600 font-bold text-2xl cursor-pointer">
          AdminDash
        </div>

        <div className="flex gap-4 text-slate-600">
          <div className="relative">
            <div className="absolute w-4 h-4 rounded-full p-2 text-white border-white border-2 -right-1 bg-green-700 -top-2 z-50 flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <Notifications className="cursor-pointer" />
          </div>
          <div className="relative">
            <div className="absolute w-4 h-4 rounded-full p-2 text-white border-white border-2 -right-1 bg-green-700 -top-2 z-50 flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <GTranslate className="cursor-pointer" />
          </div>
          <div className="relative">
            <Settings className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
