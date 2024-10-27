import React from "react";
import {
  Person,
  Cake,
  Email,
  FmdGood,
  LocalPhone,
  Create,
  Update,
  UploadFile,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function UserEdit() {
  return (
    <div className="bg-white rounded-md p-4 shadow-lg flex-10">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-slate-600 font-bold text-xl">Edit User</h3>
        <Link to={"/newUser"}>
          <button className="bg-slate-600  font-semibold text-md text-slate-100 py-2  px-4 rounded-md flex items-center justify-center gap-2 transition-all delay-10000  hover:bg-slate-700 hover:text-slate-50">
            <Create style={{ fontSize: "18px" }} />
            <p className="flex-3">Create</p>
          </button>
        </Link>
      </div>
      <div className="flex-col gap-5  lg:flex lg:flex-row w-full">
        <div className="mb-5 lg:mb-0 flex-4 flex p-3 flex-col border-2 rounded-lg gap-1">
          <div className="flex gap-2  justify-center mb-2 items-center">
            <img
              className="h-14 w-16 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="flex flex-col text-slate-600 w-full">
              <h4 className="font-semibold text-lg">Anna Mathew</h4>
              <p className="font-normal text-sm ">Software Engineer</p>
            </div>
          </div>
          <div className="mb-3 flex flex-col gap-2">
            <h2 className="text-sm font-semibold mb-1 mt-2 text-slate-400">
              Account Details
            </h2>
            <div className="text-slate-600 font-medium flex gap-2 items-center">
              <Person /> <p>anna53</p>
            </div>
            <div className="text-slate-600 font-medium flex gap-2 items-center">
              <Cake /> <p>25-Sep-2002</p>
            </div>
          </div>
          <div className="mb-3 flex flex-col gap-2">
            <h2 className="text-sm font-semibold mb-1 mt-2 text-slate-500 ">
              Contact Details
            </h2>
            <div className="text-slate-600 font-medium flex gap-2 items-center">
              <Email /> <p>anna53@gmail.com</p>
            </div>
            <div className="text-slate-600 font-medium flex gap-2 items-center">
              <LocalPhone />
              <p>03552973245</p>
            </div>
            <div className="text-slate-600 font-medium flex gap-2 items-center">
              <FmdGood />
              <p>New York,USA.</p>
            </div>
          </div>
        </div>

        <div className="flex-8 flex p-4 flex-col border-2 rounded-lg gap-1">
          <h4 className="text-slate-600 font-bold text-lg">Edit</h4>
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="flex-6">
              <form>
                <div className="flex flex-col mt-3">
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
              </form>
            </div>
            <div className="flex-6 justify-start items-center flex flex-col gap-8">
              <div className="flex flex-col w-full justify-between h-full ">
                <div className="justify-start items-center flex flex-col gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className=" w-32 h-32 lg:w-36 lg:h-36 rounded-full object-cover"
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

                <button className="bg-slate-600 mt-6 md:mt-0  font-semibold text-md text-slate-100 py-2  px-4 rounded-md w-full flex items-center justify-center gap-2 transition-all delay-10000  hover:bg-slate-700 hover:text-slate-50">
                  <Update style={{ fontSize: "18px" }} />
                  <p>Update</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
