import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders, getProducts } from '../slices/customerSlice';
import { AiOutlineClose } from 'react-icons/ai';

const MyOrders = () => {
  const dispatch = useDispatch();
  const { orders, products } = useSelector((state) => state.customer);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showProds, setShowProds] = useState([]);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    setShowProds(products);
  }, [products]);

  const handleViewOrderDetails = async (order) => {
    await dispatch(getProducts(order._id));
    setSelectedOrder(order);
  };

  const handleCloseOrderDetails = () => {
    setShowProds([]);
    setSelectedOrder(null);
  };

  const handleRepeatOrder = (order) => {
    console.log('Repeat order:', order);
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden h-full p-2">
      <h2 className="text-xl font-semibold mb-4">My Orders</h2>
      <div className="grid grid-cols-1 gap-4">
        {orders?.map((order) => (
          <div key={order._id} className="rounded shadow-md">
            <div className="flex flex-wrap p-4 justify-between mb-2 bg-gray-50">
              <div>
                <span className="block font-semibold">Order Placed:</span>
                <span>{new Date(order.createdAt).toLocaleDateString()}</span>
              </div>
              <div>
                <span className="block font-semibold">Total Cost:</span>
                <span>{order.finalPrice}</span>
              </div>
              <div>
                <span className="block font-semibold">Ship To:</span>
                <span>{order.orderFor}</span>
              </div>
              <div>
                <span className="block font-semibold">Order ID:</span>
                <span>{order._id}</span>
              </div>
              <button
                className="px-2 py-1 rounded  focus:outline-none border hover:bg-black hover:text-white"
                onClick={() => handleViewOrderDetails(order)}
              >
                View Order Details
              </button>
              {/* <button
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 focus:outline-none"
                onClick={() => handleRepeatOrder(order)}
              >
                Repeat Order
              </button> */}
            </div>
            <div className="flex flex-wrap flex-col mt-4 p-4">
              <div>
                <span className="block font-semibold">Delivered On:</span>
                <span>{order.delivered || '-'}</span>
              </div>
              {/* {order?.products?.map((product, index) => ( */}
              <div className="flex items-center mt-2">
                <img
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt="image"
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  {/* <span className="block font-semibold">{product.name}</span>
                    <span className="block text-gray-600">{product.brand}</span> */}
                  <span className="block font-semibold">chocolate</span>
                  <span className="block text-gray-600">dumyum</span>
                </div>
                <button
                  className="px-2 py-1 rounded  focus:outline-none border ml-auto  hover:bg-black hover:text-white"
                  onClick={() => handleRepeatOrder(order)}
                >
                  Repeat Order
                </button>
              </div>
              {/* ))} */}
            </div>
            {selectedOrder && selectedOrder._id === order._id && (
              <div className="bg-white mt-4 p-4 rounded shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Order Details</h3>
                  <button
                    className="text-black9 focus:outline-none"
                    onClick={handleCloseOrderDetails}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
                <div className='flex justify-between flex-wrap'>
                  <div className="mb-4">
                    <h4 className="font-semibold">Shipping Address:</h4>
                    <p>{selectedOrder.shippingAddress}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold">Payment Method:</h4>
                    <p>{selectedOrder.paymentMethod}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold">Order Summary:</h4>
                    <p>Grand Total: {selectedOrder.finalPrice}</p>
                    <p>Shipping Charge: {selectedOrder.shippingCharge}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {showProds?.map((product, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded shadow-md flex justify-between flex-wrap"
                    >
                      <div>
                        <span className="block font-semibold">Category:</span>
                        <span>{product.category}</span>
                      </div>
                      <div>
                        <span className="block font-semibold">
                          Product Name:
                        </span>
                        <span>{product.subCategory}</span>
                      </div>
                      <div>
                        <span className="block font-semibold">Quantity:</span>
                        <span>{product.quantity}</span>
                      </div>
                      <div>
                        <span className="block font-semibold">Price:</span>
                        <span>{product.price}</span>
                      </div>
                      <button
                        className="px-1 py-1 rounded  focus:outline-none border  hover:bg-black hover:text-white"
                        onClick={() => handleRepeatOrder(product)}
                      >
                        Repeat Order
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
