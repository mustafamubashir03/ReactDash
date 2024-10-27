import React from "react";
import { Create,UploadFile } from "@mui/icons-material";
export default function NewProduct() {
  return (
    <div className="bg-white rounded-md p-4 shadow-lg flex-10">
      <div className="flex flex-col gap-3 w-full  md:w-6/12  mx-auto  justify-center items-center">
        <h3 className="text-slate-600 font-bold  text-xl">Create Product</h3>
        <form className="w-full">
          <div className="justify-start items-center flex flex-col gap-3">
            <img
              src="https://images.unsplash.com/photo-1667450922216-85ede917a73e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              htmlFor="productName"
              className="text-xs font-semibold text-slate-500"
            >
              Product name
            </label>
            <input
              type="text"
              placeholder="product name.."
              id="productName"
              className="border-2 rounded-md py-1 px-2 italic w-full text-slate-700"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label
              htmlFor="stock"
              className="text-xs font-semibold text-slate-500"
            >
              Stock
            </label>
            <input
              type="number"
              placeholder="123"
              id="stock"
              className="border-2 rounded-md py-1 px-2 italic w-full text-slate-700"
            />
          </div>

          <div className="flex flex-col mt-3">
            <label
              htmlFor="price"
              className="text-xs font-semibold text-slate-500"
            >
              Price
            </label>
            <input
              type="text"
              placeholder="$123.00"
              id="price"
              className="border-2 rounded-md py-1 px-2 italic w-full text-slate-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="Address"
              className="text-xs font-semibold text-slate-500"
            >
              Status
            </label>
            <select className="border-2 border-slate-400 py-2 px-2 rounded-md h-9">
              <option className="text-slate-500 font-normal" value={"yes"}>
                Available
              </option>
              <option value={"no"}>Not available</option>
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
