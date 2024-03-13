import { useNavigate } from "react-router-dom";
import { allOrders } from "./constants/orders";
import { allProducts } from "./constants/products";
import './App.css';

const App = () => {
  const totalProducts = allProducts.length;
  const totalOrders = allOrders.length;
  const navigate = useNavigate();

  return (
    <div className="back">
      <h1 className="title">ERP System <span>(Dashboard)</span></h1>
      <div className="boxes">
        <div className="boxc">
          <p className="pp">Total Products</p>
          <p className="totalp">{totalProducts}</p>
        </div>
        <div className="boxc">
          <p className="pp">Total Orders</p>
          <p className="totalp">{totalOrders}</p>
        </div>

      </div>
<div className="btns">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 mx-1 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
          onClick={() => navigate("/products")}
        >
          Manage Products
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 mx-1 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
          onClick={() => navigate("/orders")}
        >
          Manage Orders
        </button>
      </div>
    
      
    </div>
  );
};

export default App;
