import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { userRow } from "./userRow.js";

export default function UserList() {
  const [users, setUsers] = useState(userRow);
  
  function deleteAction(id) {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
    console.log("Updated users");
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      renderCell: (params) => {
        return <p className="text-slate-600 font-semibold">{params.row.id}</p>;
      },
    },
    {
      field: "username",
      headerName: "Users",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={params.row.image}
              alt="user"
            />
            <h4 className="text-slate-600">{params.row.username}</h4>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderCell: (params) => {
        return <p className="text-slate-600">{params.row.email}</p>;
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 100,
      renderCell: (params) => {
        return <p className="text-slate-600">{params.row.amount}</p>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return <p className="text-slate-600">{params.row.status}</p>;
      },
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 70,
      renderCell: (params) => {
        return <p className="text-slate-600">{params.row.age}</p>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={`/users/${params.row.id}`}>
              <button className="bg-slate-500 text-white py-1 px-4 mr-3 rounded-md text-sm">
                Edit
              </button>
            </Link>
            <Delete
              className="text-red-700 cursor-pointer"
              onClick={() => deleteAction(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex-10 bg-white shadow-lg w-full p-3 rounded-md overflow-x-scroll">
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={7}
        checkboxSelection
      />
    </div>
  );
}
