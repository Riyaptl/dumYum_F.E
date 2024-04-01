import React, { useState } from 'react';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { AiOutlineEdit, AiOutlineClose } from 'react-icons/ai';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [addresses, setAddresses] = useState([
    {
    id: 1,
    street: '123 Main St',
    city: 'City',
    district: 'District',
    pincode: '123456',
    default: true // Default address
  }]);
  const [newAddressFormData, setNewAddressFormData] = useState({
    street: '',
    city: '',
    district: '',
    pincode: ''
  });
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [isQueryAttachmentVisible, setIsQueryAttachmentVisible] = useState(false);
  const [queryAttachments, setQueryAttachments] = useState([]);
  const [isRaiseQueryOverlayVisible, setIsRaiseQueryOverlayVisible] = useState(false);
  const [raiseQueryFormData, setRaiseQueryFormData] = useState('');
  const [raiseQueryAttachments, setRaiseQueryAttachments] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const userData = {
    basicDetails: {
      firstName: "John",
      lastName: "Doe",
      birthdate: "1990-01-01",
      email: "john@example.com",
      maritalStatus: "Single",
      addresses: [
        {
          id: 1,
          street: "123 Main St",
          city: "City",
          district: "District",
          pincode: "123456",
          default: true // Indicate the default address
        },
        {
          id: 2,
          street: "456 Second St",
          city: "City",
          district: "District",
          pincode: "456789",
          default: false
        }
      ]
    },
    orders: [
      {
        id: 1,
        products: [
          {
            id: 1,
            name: "Product 1",
            quantity: 2,
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "product1.jpg"
          },
          {
            id: 2,
            name: "Product 2",
            quantity: 1,
            details: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "product2.jpg"
          }
        ],
        date: "2024-03-01",
        status: "Delivered"
      },
      {
        id: 2,
        products: [
          {
            id: 3,
            name: "Product 3",
            quantity: 3,
            details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "product3.jpg"
          }
        ],
        date: "2024-03-05",
        status: "Pending"
      }
    ],
    queries: [
      {
        id: 1,
        question: "Query 1",
        date: "2024-03-10",
        status: "Resolved",
        attachments: ["query1_image1.jpg", "query1_image2.jpg"]
      },
      {
        id: 2,
        question: "Query 2",
        date: "2024-03-15",
        status: "Pending",
        attachments: []
      }
    ]
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAddressChange = (e) => {
    setNewAddressFormData({
      ...newAddressFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleEditAddress = () => {
    setIsEditingAddress(true);
  };

  const handleSaveAddress = () => {
    if (isEditingAddress) {
      console.log('Edited address:', newAddressFormData);
    } else {
      const newAddress = {
        id: addresses.length + 1,
        ...newAddressFormData
      };
      setAddresses([...addresses, newAddress]);
    }
    handleCloseOverlay();
  };

  const handleAddNewAddress = () => {
    setIsAddingAddress(true);
  };``
  const handleSetDefaultAddress = () => {
    alert('Set as default:', newAddressFormData);
  };



  const toggleQueryAttachment = () => {
    setIsQueryAttachmentVisible(!isQueryAttachmentVisible);
  };

  const toggleRaiseQueryOverlay = () => {
    setIsRaiseQueryOverlayVisible(!isRaiseQueryOverlayVisible);
  };

  const handleRaiseQueryChange = (e) => {
    setRaiseQueryFormData(e.target.value);
  };

  const handleRaiseQueryAttachmentsChange = (e) => {
    const files = e.target.files;
    const attachmentsArray = [];
    for (let i = 0; i < files.length; i++) {
      attachmentsArray.push(files[i]);
    }
    setRaiseQueryAttachments(attachmentsArray);
  };

  const raiseQuery = () => {
    console.log('Query raised:', raiseQueryFormData);
    console.log('Attachments:', raiseQueryAttachments);
    setRaiseQueryFormData('');
    setRaiseQueryAttachments([]);
    setIsRaiseQueryOverlayVisible(false);
  };

  const logout = () => {
    console.log('Logout');
  };

  const handleViewOrderDetails = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseOrderDetails = () => {
    setSelectedOrder(null);
  };

  const handleCloseOverlay = () => {
    setIsEditingAddress(false);
    setIsAddingAddress(false);
    setNewAddressFormData({
      street: '',
      city: '',
      district: '',
      pincode: ''
    });
  };


  const { basicDetails, orders, queries } = userData;

  return (
    <div className="container mx-auto mt-8 px-4 max-w-7xl">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">MY ACCOUNT</h1>
        <button className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none" onClick={logout}>
          <RiLogoutBoxLine /> Logout
        </button>
      </header>
      <div className="flex gap-8">
        <section className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Basic Details</h2>
          <div className="mb-6">
            <p><span className="font-semibold">First Name:</span> {basicDetails.firstName}</p>
            <p><span className="font-semibold">Last Name:</span> {basicDetails.lastName}</p>
            <p><span className="font-semibold">Birthdate:</span> {basicDetails.birthdate}</p>
            <p><span className="font-semibold">Email:</span> {basicDetails.email}</p>
            <p><span className="font-semibold">Marital Status:</span> {basicDetails.maritalStatus}</p>
          </div>
          <div>
          <h2 className="text-2xl font-bold mb-4">My Address</h2>
          {addresses.map(address => (
            <div key={address.id} className="mb-4">
              <p className="font-semibold">{address.street}, {address.city}, {address.district}, {address.pincode}</p>
              {address.default ? (
                <span className="text-green-500 font-semibold">Default</span>
              ) : (
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none" onClick={() => handleSetDefaultAddress(address.id)}>Set as Default</button>
              )}
              <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none ml-2" onClick={handleEditAddress}>
                <AiOutlineEdit />
              </button>
            </div>
          ))}
          <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none" onClick={handleAddNewAddress}>Add New Address</button>
          
          </div>
        </section>
        <section className="flex-1">
          <h2 className="text-2xl font-bold mb-4">My Orders and Queries</h2>
          <ul className="flex">
            <li className="mr-6">
              <button className={`${activeTab === 'orders' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'} focus:outline-none`}
                onClick={() => handleTabChange('orders')}
              >
                My Orders
              </button>
            </li>
            <li className="mr-6">
              <button
                className={`${activeTab === 'queries' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'} focus:outline-none`}
                onClick={() => handleTabChange('queries')}
              >
                My Queries
              </button>
            </li>
          </ul>
          <div>
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">My Orders</h2>
                <table className="border-collapse w-full">
                  <thead>
                    <tr>
                      <th className="border border-gray-400 px-4 py-2">Order ID</th>
                      <th className="border border-gray-400 px-4 py-2">Date</th>
                      <th className="border border-gray-400 px-4 py-2">Status</th>
                      <th className="border border-gray-400 px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(order => (
                      <tr key={order.id}>
                        <td className="border border-gray-400 px-4 py-2">{order.id}</td>
                        <td className="border border-gray-400 px-4 py-2">{order.date}</td>
                        <td className="border border-gray-400 px-4 py-2">{order.status}</td>
                        <td className="border border-gray-400 px-4 py-2">
                          <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none" onClick={() => handleViewOrderDetails(order)}>View </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'queries' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">My Queries</h2>
                <table className="border-collapse w-full">
                  <thead>
                    <tr>
                      <th className="border border-gray-400 px-4 py-2">Question</th>
                      <th className="border border-gray-400 px-4 py-2">Date</th>
                      <th className="border border-gray-400 px-4 py-2">Status</th>
                      <th className="border border-gray-400 px-4 py-2">Attachments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {queries.map(query => (
                      <tr key={query.id}>
                        <td className="border border-gray-400 px-4 py-2">{query.question}</td>
                        <td className="border border-gray-400 px-4 py-2">{query.date}</td>
                        <td className="border border-gray-400 px-4 py-2">{query.status}</td>
                        <td className="border border-gray-400 px-4 py-2">
                          {query.attachments.length > 0 && (
                            <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none" onClick={toggleQueryAttachment}>View Attachments</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {isQueryAttachmentVisible && (
                  <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded shadow-lg">
                      <h3 className="text-xl font-semibold mb-4">Attachments</h3>
                      <ul>
                        {queries.map(query => (
                          query.attachments.map((attachment, index) => (
                            <li key={index} className="mb-2">
                              <img src={attachment} alt={`Attachment ${index}`} className="w-32 h-32 object-cover" />
                            </li>
                          ))
                        ))}
                      </ul>
                      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none" onClick={toggleQueryAttachment}>Close</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
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
                  <th className="border border-gray-400 px-4 py-2">Product Name</th>
                  <th className="border border-gray-400 px-4 py-2">Quantity</th>
                  <th className="border border-gray-400 px-4 py-2">Details</th>
                  <th className="border border-gray-400 px-4 py-2">Image</th>
                </tr>
              </thead>
              <tbody>
                {selectedOrder.products.map(product => (
                  <tr key={product.id}>
                    <td className="border border-gray-400 px-4 py-2">{product.name}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.quantity}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.details}</td>
                    <td className="border border-gray-400 px-4 py-2"><img src={product.image} alt={product.name} className="w-12 h-12 object-cover" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <section className="mt-8">
        <h2 className="text-2xl">Raise Queries</h2>
        <textarea
          className="w-full h-32 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mb-4"
          placeholder="Write your query here..."
          value={raiseQueryFormData}
          onChange={handleRaiseQueryChange}
        ></textarea>
        <input type="file" multiple onChange={handleRaiseQueryAttachmentsChange} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          onClick={raiseQuery}
        >
          Raise Query
        </button>
      </section>
      {(isEditingAddress || isAddingAddress) && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{isEditingAddress ? 'Edit Address' : 'Add New Address'}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Street:</label>
                <input type="text" name="street" value={newAddressFormData.street} onChange={handleAddressChange} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1">City:</label>
                <input type="text" name="city" value={newAddressFormData.city} onChange={handleAddressChange} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1">District:</label>
                <input type="text" name="district" value={newAddressFormData.district} onChange={handleAddressChange} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1">Pincode:</label>
                <input type="text" name="pincode" value={newAddressFormData.pincode} onChange={handleAddressChange} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none" onClick={handleSaveAddress}>Save</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none ml-2" onClick={handleCloseOverlay}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
