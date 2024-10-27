import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import UserEdit from "./pages/UserEdit";
import NewUser from "./pages/NewUser";
import ProductEdit from "./pages/Edit";
import ProductList from "./pages/ProductList";
import Edit from "./pages/Edit";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-100">
        <Topbar />
        <div className="flex gap-5 px-5 ">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<UserEdit />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:productId" element={<Edit />} />
            <Route path="/newProduct" element={<NewProduct/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
