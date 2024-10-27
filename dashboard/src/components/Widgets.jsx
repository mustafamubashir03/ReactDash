import React from "react";
import Member from "./Member";

const StatusButton = ({ status }) => {
  return (
    <button className={`py-1 px-2 rounded-lg text-xs ${status} font-semibold`}>
      {status}
    </button>
  );
};

export default function Widgets() {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="bg-white rounded-md p-4 shadow-lg lg:flex-5">
        <h3 className="text-slate-600 font-bold text-xl mb-5">New Members</h3>
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
      </div>
      <div className="bg-white rounded-md shadow-lg p-4 lg:flex-7">
        <h3 className="text-slate-600 font-bold text-xl mb-4">Transactions</h3>
        <table className="w-full text-slate-600 border-spacing-6">
          <thead>
            <tr>
              <th className="text-left py-2">Customer</th>
              <th className="text-left">Date</th>
              <th className="text-right">Amount</th>
              <th className="text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-normal">
              <td className="flex gap-2 items-center w-full text-left">
                <img
                  className="h-10 w-10 rounded-full object-cover my-2"
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Customer Avatar"
                />
                <h4>Customer name</h4>
              </td>
              <td>24-Sep-2024</td>
              <td className="text-right">$50.00</td>
              <td className="text-right">
                <StatusButton status={"Declined"} />
              </td>
            </tr>
            <tr className="font-normal">
              <td className="flex gap-2 items-center w-full text-left">
                <img
                  className="h-10 w-10 rounded-full object-cover my-2"
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Customer Avatar"
                />
                <h4>Customer name</h4>
              </td>
              <td>24-Sep-2024</td>
              <td className="text-right">$50.00</td>
              <td className="text-right">
                <StatusButton status={"Declined"} />
              </td>
            </tr>
            <tr className="font-normal">
              <td className="flex gap-2 items-center w-full text-left">
                <img
                  className="h-10 w-10 rounded-full object-cover my-2"
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Customer Avatar"
                />
                <h4>Customer name</h4>
              </td>
              <td>24-Sep-2024</td>
              <td className="text-right">$50.00</td>
              <td className="text-right">
                <StatusButton status={"Pending"} />
              </td>
            </tr>
            <tr className="font-normal">
              <td className="flex gap-2 items-center w-full text-left">
                <img
                  className="h-10 w-10 rounded-full object-cover my-2"
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Customer Avatar"
                />
                <h4>Customer name</h4>
              </td>
              <td>24-Sep-2024</td>
              <td className="text-right">$50.00</td>
              <td className="text-right">
                <StatusButton status={"Approved"} />
              </td>
            </tr>
            <tr className="font-normal">
              <td className="flex gap-2 items-center w-full text-left">
                <img
                  className="h-10 w-10 rounded-full object-cover my-2"
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Customer Avatar"
                />
                <h4>Customer name</h4>
              </td>
              <td>24-Sep-2024</td>
              <td className="text-right">$50.00</td>
              <td className="text-right">
                <StatusButton status={"Approved"} />
              </td>
            </tr>
            {/* Add more transaction rows here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
