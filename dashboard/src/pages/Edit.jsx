import { Link } from "react-router-dom";
import { Chart } from "../components/Chart";
import { productData } from "../components/productData.js";
import { Create, UploadFile, Update } from "@mui/icons-material";
export default function Edit() {
  return (
    <div className="bg-white h-full rounded-md p-4 shadow-lg flex-10">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-slate-600 font-bold text-xl">Sales</h3>
        <Link to={"/newProduct"}>
          <button className="bg-slate-600  font-semibold text-md text-slate-100 py-2  px-4 rounded-md flex items-center justify-center gap-2 transition-all delay-10000  hover:bg-slate-700 hover:text-slate-50">
            <Create style={{ fontSize: "18px" }} />
            <p className="flex-3">Create</p>
          </button>
        </Link>
      </div>
      <div className="flex flex-col h-full gap-4">
        <div className=" flex flex-col lg:flex-row gap-4">
          <div className=" flex-9 w-full">
            <div className="flex-6 border-2 border-slate-200 rounded-lg p-4 ">
              <h4 className="font-semibold text-lg text-slate-500">
                Monthly stats
              </h4>
              <Chart data={productData} dataKey="sales" />
            </div>
          </div>
          <div className="flex-3 border-slate-200 border-2 rounded-lg p-4">
            <div className="flex flex-col">
              <div className="flex gap-2  justify-center  mb-4 items-center">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1667450922216-85ede917a73e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="flex flex-col text-slate-600">
                  <h4 className="font-semibold text-lg">Ear phones</h4>
                </div>
              </div>
              <div className="w-full">
                <p className=" text-lg text-slate-400 text-center mb-1 flex justify-around font-semibold ">
                  <span>Id:</span> <span className="text-slate-500">1</span>
                </p>
                <p className=" text-lg text-slate-400 text-center mb-1 flex justify-around font-semibold ">
                  <span>Sales:</span>{" "}
                  <span className="text-slate-500">200</span>
                </p>
                <p className=" text-lg text-slate-400 text-center mb-1 flex justify-around font-semibold ">
                  <span>Available:</span>{" "}
                  <span className="text-slate-500">yes</span>
                </p>
                <p className=" text-lg text-slate-400 text-center flex justify-around mb-1 font-semibold ">
                  <span>Stock:</span>{" "}
                  <span className="text-slate-500">150</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-6 border-slate-200 border-2 rounded-lg p-4 flex flex-col md:flex-row justify-between ">
          <div>
            <h3 className="text-slate-600 font-bold text-xl">Edit product</h3>
            <form>
              <div className="flex flex-col mt-3">
                <label
                  htmlFor="productName"
                  className="text-xs font-semibold text-slate-500"
                >
                  Product name
                </label>
                <input
                  type="text"
                  placeholder="ear phone"
                  id="productName"
                  className="border-2 rounded-md py-1 px-2 italic w-full text-slate-700"
                />
              </div>
              <div className="flex flex-col mt-3">
                <label
                  htmlFor="Address"
                  className="text-xs font-semibold text-slate-500"
                >
                  In stock
                </label>
                <select className="border-2 border-slate-400 py-2 px-2 rounded-md h-9">
                  <option className="text-slate-500 font-normal" value={"yes"}>
                    Yes
                  </option>
                  <option value={"no"}>No</option>
                </select>
              </div>

              <div className="flex flex-col mt-3">
                <label
                  htmlFor="Address"
                  className="text-xs font-semibold text-slate-500"
                >
                  Available
                </label>
                <select className="border-2 border-slate-400 py-2 px-2 rounded-md h-9">
                  <option className="text-slate-500 font-normal" value={"yes"}>
                    Yes
                  </option>
                  <option value={"no"}>No</option>
                </select>
              </div>
            </form>
          </div>
          <div className="justify-start items-center flex flex-col gap-3">
            <img
              src="https://images.unsplash.com/photo-1667450922216-85ede917a73e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-32 h-32 md:w-36 md:h-36 mt-8 md:mt-0 rounded-full object-cover"
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
            <button className="bg-slate-600  font-semibold text-md text-slate-100 py-2  px-4 rounded-md w-full flex items-center mt-3 justify-center gap-2 transition-all delay-10000  hover:bg-slate-700 hover:text-slate-50">
              <Update style={{ fontSize: "18px" }} />
              <p>Update</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
