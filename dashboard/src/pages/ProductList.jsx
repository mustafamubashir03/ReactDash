import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Delete } from "@mui/icons-material";
import { productRow } from "./productRow.js";
import { Link } from "react-router-dom";
export default function ProductList() {
  const [products, setProducts] = useState(productRow);
  function deleteAction(id) {
    const newUsers = products.filter((product) => product.id !== id);
    setProducts(newUsers);
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
      field: "name",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={params.row.image}
              alt="user"
            />
            <h4 className="text-slate-600">{params.row.name}</h4>
          </div>
        );
      },
    },
    {
        field: "price",
        headerName: "Price",
        width: 100,
        renderCell: (params) => {
          return <p className="text-slate-600">{params.row.price}</p>;
        },
      },
      {
        field: "stock",
        headerName: "Stock",
        width: 150,
        renderCell: (params) => {
          return <p className="text-slate-600">{params.row.stock}</p>;
        },
      },

    {
      field: "status",
      headerName: "Status",
      width: 80,
      renderCell: (params) => {
        return <p className="text-slate-600">{params.row.status}</p>;
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={`/products/${params.row.id}`}>
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
    <div className=" flex-10 bg-white shadow-lg w-full p-3 rounded-md overflow-x-scroll">
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[5, 7, 10]}
        checkboxSelection
        className="w-full"
      />
    </div>
  );
}
