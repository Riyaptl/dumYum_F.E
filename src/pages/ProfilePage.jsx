import React, { useState } from 'react';
import { RiLogoutBoxLine } from 'react-icons/ri'; 
import { AiOutlineEdit } from 'react-icons/ai'; 

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [addressFormData, setAddressFormData] = useState({
    id: '',
    street: '',
    city: '',
    district: '',
    pincode: ''
  });
  const [isAddingAddress, setIsAddingAddress] = useState(false);

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
          pincode: "123456"
        }
      ]
    },
    orders: [
      {
        id: 1,
        product: "Product 1",
        date: "2024-03-01",
        status: "Delivered"
      },
      {
        id: 2,
        product: "Product 2",
        date: "2024-03-05",
        status: "Pending"
      }
    ],
    queries: [
      {
        id: 1,
        question: "Query 1",
        date: "2024-03-10",
        status: "Resolved"
      },
      {
        id: 2,
        question: "Query 2",
        date: "2024-03-15",
        status: "Pending"
      }
    ]
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAddressChange = (e) => {
    setAddressFormData({
      ...addressFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleEditAddress = (address) => {
    setAddressFormData(address);
    setIsAddingAddress(true); 
  };

  const handleSaveAddress = () => {
    console.log('Address form data:', addressFormData);
    setIsAddingAddress(false); 
  };

  const raiseQuery = () => {
    console.log('Query raised!');
  };

  const logout = () => {
    console.log('Logout');
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
            <h3 className="font-semibold mb-4">Address:</h3>
            {isAddingAddress ? (
              <div className="mb-4">
                <input type="text" name="street" value={addressFormData.street} onChange={handleAddressChange} placeholder="Street" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none mb-2" />
                <input type="text" name="city" value={addressFormData.city} onChange={handleAddressChange} placeholder="City" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none mb-2" />
                <input type="text" name="district" value={addressFormData.district} onChange={handleAddressChange} placeholder="District" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none mb-2" />
                <input type="text" name="pincode" value={addressFormData.pincode} onChange={handleAddressChange} placeholder="Pincode" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none mb-2" />
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none" onClick={handleSaveAddress}>Save</button>
              </div>
            ) : (
              <>
                {basicDetails.addresses.map(address => (
                  <div key={address.id} className="mb-4">
                    <p>{address.street}, {address.city}, {address.district}, {address.pincode}</p>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none" onClick={() => handleEditAddress(address)}>
                      <AiOutlineEdit />
                    </button>
                  </div>
                ))}
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none" onClick={() => setIsAddingAddress(true)}>Add Address</button>
              </>
            )}
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
                <ul>
                  {orders.map(order => (
                    <li key={order.id} className="mb-4">
                      <p className="font-semibold">Product: {order.product}</p>
                      <p>Date: {order.date}</p>
                      <p>Status: {order.status}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'queries' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">My Queries</h2>
                <ul>
                  {queries.map(query => (
                    <li key={query.id} className="mb-4">
                      <p className="font-semibold">Question: {query.question}</p>
                      <p>Date: {query.date}</p>
                      <p>Status: {query.status}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </section>
      </div>
      <section className="mt-8">
        <h2 className="text-2xl">Raise Queries</h2>
        <textarea
          className="w-full h-32 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mb-4"
          placeholder="Write your query here..."
        ></textarea>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          onClick={raiseQuery}
        >
          Raise Query
        </button>
      </section>
    </div>
  );
};

export default ProfilePage;

               
