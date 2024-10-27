import React from "react";
import { Create, UploadFile } from "@mui/icons-material";
export default function NewUser() {
  return (
    <div className="bg-white rounded-md p-4 shadow-lg flex-10">
      <div className="flex flex-col gap-3 w-full md:w-6/12  mx-auto  justify-center items-center">
        <h3 className="text-slate-600 font-bold  text-xl">Create User</h3>
        <form className="w-full">
          <div className="justify-start items-center flex flex-col gap-3">
            <img
              src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-36 h-36 rounded-full object-cover"
            />
            <label htmlFor="file">
              <div
                htmlFor="file"
                className="flex flex-col gap-2 cursor-pointer rounded-full items-center justify-center  bg-green-100 border-2 border-green-700 p-4 w-8 h-8"
              >
                <UploadFile
                  className="text-green-700 cursor-pointer "
                  htmlFor="file"
                />
              </div>
            </label>
            <input type="file" id="file" className="hidden" />
          </div>
          <div className="flex flex-col  mt-3">
            <label
              htmlFor="username"
              className="text-xs font-semibold text-slate-500"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="anna53"
              id="username"
              className="border-2 rounded-md py-1 px-2 italic w-full text-slate-700"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label
              htmlFor="fullName"
              className="text-xs font-semibold text-slate-500"
            >
              Full name
            </label>
            <input
              type="text"
              placeholder="Anna Mathew"
              id="FullName"
              className="border-2 rounded-md py-1 px-2 italic w-full text-slate-700"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label
              htmlFor="Email"
              className="text-xs font-semibold text-slate-500"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="anna53@gmail.com"
              id="email"
              className="border-2 rounded-md py-1 px-2 italic w-full text-slate-700"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label
              htmlFor="Phone"
              className="text-xs font-semibold text-slate-500"
            >
              Phone
            </label>
            <input
              type="tel"
              placeholder="123-456-7890"
              id="Phone"
              className="border-2 rounded-md py-1 px-2 italic w-full text-slate-700"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label
              htmlFor="Address"
              className="text-xs font-semibold text-slate-500"
            >
              Address
            </label>
            <input
              type="text"
              placeholder="New York,USA"
              id="Address"
              className="border-2 rounded-md py-1 px-2 italic w-full text-slate-700"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="radio"
              className="text-xs font-semibold text-slate-500"
            >
              Gender
            </label>
            <div id="radio" className="flex gap-3 mt-2">
              <input
                type="radio"
                id="male"
                value={"male"}
                htmlFor="male"
                className="border-2 w-6 h-6"
              />
              <label
                htmlFor="male"
                id="male"
                className="text-normal  text-slate-500"
              >
                Male
              </label>
              <input
                type="radio"
                htmlFor="female"
                value={"female"}
                id="female"
                className="border-2 w-6 h-6"
              />
              <label
                htmlFor="female"
                className="text-normal font-normal text-slate-500"
              >
                Female
              </label>
              <input
                type="radio"
                htmlFor="others"
                value={"others"}
                id="others"
                className="border-2 w-6 h-6"
              />
              <label
                htmlFor="others"
                className="text-normal font-normal text-slate-500"
              >
                Others
              </label>
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <label
              htmlFor="Address"
              className="text-xs font-semibold text-slate-500"
            >
              Active
            </label>
            <select className="border-2 border-slate-400 py-2 px-2 rounded-md h-9">
              <option className="text-slate-500 font-normal" value={"yes"}>
                Yes
              </option>
              <option value={"no"}>No</option>
            </select>
          </div>
          <button className="bg-slate-600 mt-10  font-semibold text-md text-slate-100 py-2  px-4 rounded-md w-full flex items-center justify-center gap-2 transition-all delay-10000  hover:bg-slate-700 hover:text-slate-50">
            <Create style={{ fontSize: "18px" }} />
            <p>Create</p>
          </button>
        </form>
      </div>
    </div>
  );
}
