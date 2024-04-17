import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders } from '../slices/customerSlice';

const MyOrders = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
