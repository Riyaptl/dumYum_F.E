import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders, getProducts } from '../slices/orderSlice';
import { AiOutlineClose } from 'react-icons/ai';
import image1 from "../assets/slider1.png";
import { resolvePath, useNavigate } from 'react-router-dom';

const MyOrders = () => {
  const dispatch = useDispatch();
  const { orders, products } = useSelector((state) => state.order);
  const [selectedOrder, setSelectedOrder] = useState(null);
  // const [showProds, setShowProds] = useState([]);
  const subCategoryImages = `${import.meta.env.VITE_APP_SUBCAT_URL}`
  const [productsDict, setProductsDict] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    if (orders && orders.length > 0) {
      const fetchProducts = async () => {
        const products = await Promise.all(
          orders.map(async (order) => {
            const orderId = order._id;
            const res = await dispatch(getProducts(orderId));
            return { orderId, res: res.payload.orders };
          })
        );

        const productsDictionary = products.reduce((acc, { orderId, res }) => {
          acc[orderId] = res;
          return acc;
        }, {});

        setProductsDict(productsDictionary);
      };

      fetchProducts();
    }
  }, [orders, dispatch]);

  // useEffect(() => {
  //   setShowProds(products);
  // }, [products]);

  const handleViewOrderDetails = async (order) => {
    setSelectedOrder(order);
  };

  const handleCloseOrderDetails = () => {
    // setShowProds([]);
    setSelectedOrder(null);
  };

  const handleRepeatOrder = (order) => {
    console.log('Repeat order:', order);
  };

  const handleRepeat = (id) => {
    // console.log(id);
    navigate(`/product/${id}`)
  }

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
                <span className="block font-semibold">Status:</span>
                <span>{order.orderStatus == 'active' ? 'ordered' : order.orderStatus == 'cancelled' ? 'cancelled' : 'delivered'}</span>
              </div>
              <div>
                <span className="block font-semibold">Order ID:</span>
                <span>{order.orderId.split('/').join('').split('_').join('')}</span>
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
                <span className="block font-semibold">Delivered On:</span>
                <span>{order.closedAt || '-'}</span>
            </div>
            {productsDict[order._id] && productsDict[order._id].length > 0 ? (
              <ul>
                {productsDict[order._id].map((product, index) => (
                  <div key={index}>
                    <div className="flex items-center mt-2">
                      <img
                        src={product.image 
                            ? subCategoryImages + product.image
                            : image1 
                        }
                        alt="image"
                        className="w-16 h-16 object-cover mr-4"
                        onClick={() => handleRepeat(product.subCategoryId)}
                      />
                      <div>
                        <span className="block font-semibold">
                          Product Name:
                        </span>
                        <span>{product.subCategory.split('|')[0]}</span>
                      </div>
                      <div>
                        <span className="block font-semibold">Quantity:</span>
                        <span>{product.quantity}</span>
                      </div>            
                  </div>
                  </div>
                ))}
              </ul>
            ) : (
              <p>No products available for this order.</p>
            )}

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
                    <p>{Object.values(selectedOrder.addressDetails).slice(0,-1).join(', ')}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold">Payment Method:</h4>
                    <p>{selectedOrder.paymentMethod == 'Cash' ? 'Cash On Delivery' : selectedOrder.paymentMethod}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold">Order Summary:</h4>
                    <p>Grand Total: {selectedOrder.finalPrice}</p>
                    <p>Shipping Charge: {selectedOrder.finalPrice - selectedOrder.totalPrice}</p>
                  </div>
                  <button
                    className="px-2 py-1 rounded  focus:outline-none border ml-auto  hover:bg-black hover:text-white"
                    onClick={() => handleRepeatOrder(order)}
                  >
                    Repeat Order
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-4">
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


