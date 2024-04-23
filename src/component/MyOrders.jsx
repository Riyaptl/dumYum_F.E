import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders, getProducts } from '../slices/customerSlice';
import { AiOutlineEdit, AiOutlineClose, AiOutlineDelete } from 'react-icons/ai';

const MyOrders = () => {
  const dispatch = useDispatch();
  const { orders, products } = useSelector((state) => state.customer);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showProds, setShowProds] = useState([])

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    setShowProds(products)
  }, [products])

  const handleViewOrderDetails = async (order) => {
    await dispatch(getProducts(order._id))
    setSelectedOrder(true)
  };

  const handleCloseOrderDetails = () => {
    setShowProds([]);
    setSelectedOrder(null)
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden h-full px-1">
      <h2 className="text-xl font-semibold mb-4 px-4 py-2">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Placed At</th>
              <th className="border border-gray-400 px-4 py-2">Quantity</th>
              <th className="border border-gray-400 px-4 py-2">Cost</th>
              <th className="border border-gray-400 px-4 py-2">Order For</th>
              <th className="border border-gray-400 px-4 py-2">Delivered</th>
              <th className="border border-gray-400 px-4 py-2">Status</th>
              <th className="border border-gray-400 px-4 py-2">Payment Status</th>
              <th className="border border-gray-400 px-4 py-2">Payment Method</th>
              <th className="border border-gray-400 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order._id}>
                <td className="border border-gray-400 px-4 py-2">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {order.totalQuantity}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {order.finalPrice}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {order.orderFor}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {order.delivered || '-'}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {order.orderStatus}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {order.paymentStatus || '-'}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {order.paymentMethod || '-'}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none" onClick={() => handleViewOrderDetails(order)}>View </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedOrder && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg w-3/4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Order Details</h3>
              <button className="text-red-500 hover:text-red-600 focus:outline-none" onClick={handleCloseOrderDetails}>
                <AiOutlineClose />
              </button>
            </div>
            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">Category</th>
                  <th className="border border-gray-400 px-4 py-2">Product Name</th>
                  <th className="border border-gray-400 px-4 py-2">Quantity</th>
                  <th className="border border-gray-400 px-4 py-2">price</th>
                </tr>
              </thead>
              <tbody>
                {showProds?.map((product, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 px-4 py-2">{product.category}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.subCategory}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.quantity}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      </div>
    </div>
  );
};

export default MyOrders;
