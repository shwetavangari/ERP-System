import {
  ChevronLeftIcon,
  ClockIcon,
  EyeIcon,
  ShoppingBagIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import './products.css';
import { Link } from "react-router-dom";
import { allOrders } from "../constants/orders";

const OrdersManagement = () => {
  const [orders, setOrders] = useState(allOrders);

  const [open, setOpen] = useState(false);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
    setOpen(!open);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    setSelectedOrder(null);
    setOpen(false);
  };

  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    setSelectedOrder(null);
  };

  return (
    
    <>
    <div className="dashboard">
    <Link className="font-bold text-xl text-blue-400 flex items-center" to="/">
        <ChevronLeftIcon className="h-5 w-5 text-xl font-bold" />
        Dashboard
      </Link>
    </div>
    <div className="complete-box">

        <h2 className="text-5xl font-bold mb-4 backHome">Orders Management</h2>

        
          <table className="borders">
            <thead>
              <tr className="blue">
                <th className="py-4 px-4 borders">Order ID</th>
                <th className="py-4 px-4 borders">Customer</th>
                <th className="py-4 px-4 borders">Order Date</th>
                <th className="py-4 px-4 borders">Status</th>
                <th className="py-4 px-4 borders">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="py-2 px-4 borders">{order.orderID}</td>
                  <td className="py-2 px-4 borders">{order.customerName}</td>
                  <td className="py-2 px-4 borders">{order.orderDate}</td>
                  <td className="py-2 px-4 borders">{order.status}</td>
                  <td className="py-2 px-4 borders flex flex-col md:flex-row">
                    <button
                      onClick={() => viewOrderDetails(order)}
                      className="bg-blue-500 text-white px-2 py-1 m-2 rounded hover:bg-blue-700 flex items-center gap-2 w-fit h-fit"
                    >
                      <EyeIcon className="h-6 w-6 md:h-4 md:w-4" /> View
                    </button>
                    <button
                      onClick={() => updateOrderStatus(order.id, "Delivered")}
                      className="bg-green-500 text-white px-2 py-1 m-2 rounded hover:bg-green-700 flex items-center gap-2 w-fit h-fit"
                    >
                      {order.status === "Processing" ? (
                        <ClockIcon className="h-6 w-6 md:h-4 md:w-4" />
                      ) : (
                        <ShoppingBagIcon className="h-6 w-6 md:h-4 md:w-4" />
                      )}
                      {order.status}
                    </button>
                    <button
                      onClick={() => deleteOrder(order.id)}
                      className="bg-red-500 text-white px-2 py-1 m-2 rounded hover:bg-red-700 flex items-center gap-2 w-fit h-fit"
                    >
                      <TrashIcon className="h-6 w-6 md:h-4 md:w-4" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        {selectedOrder && open && (
          <div className="dispinfo">
            <div className="boxed">
              <h3 className="text-xl font-bold mb-2">Order Details</h3>
              <hr></hr>
              <div className="tabledata">
                <p><b>Order ID :-</b> {selectedOrder.orderID}</p>
                <p><b>Customer :-</b> {selectedOrder.customerName}</p>
                <p><b>Order Date :-</b> {selectedOrder.orderDate}</p>
                <p><b>Status :-</b> {selectedOrder.status}</p>
              </div>
            </div>
          </div>
        )}
      </div></>
  );
};

export default OrdersManagement;
