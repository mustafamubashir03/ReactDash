import React from "react";
import { Visibility } from "@mui/icons-material";

export default function Member() {
  return (
    <div className="flex gap-3 my-3 items-center">
      <div className="flex-1 flex gap-3">
        <img
          className="h-12 w-14 rounded-full object-cover  "
          src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div className="flex flex-col text-slate-600 w-full">
          <h4 className="font-semibold text-md">Member</h4>
          <p className="font-normal text-sm ">Software Engineer</p>
        </div>
      </div>
      <button className="bg-slate-600 justify-self-end font-semibold text-xs text-slate-100 py-2  px-3 rounded-md flex items-center justify-center gap-1">
        <Visibility style={{ fontSize: "18px" }} />
        <p className="flex-3">View more</p>
      </button>
    </div>
  );
}
