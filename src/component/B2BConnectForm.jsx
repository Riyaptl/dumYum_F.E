import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { B2B } from '../slices/inquirySlice';

const B2BConnectForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    mobileNo: '',
    email: '',
    reasonToConnect: ''
  });
  const dispatch = useDispatch()
  const {loading} = useSelector((state) => state.inquiry)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(B2B({businessName:formData.businessName, phone:formData.mobileNo, email:formData.email, reason:formData.reasonToConnect}))
  };

  return (
    <div className="container mx-auto px-4 py-6 bg-gray-100">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-4">
        <h2 className="cedarville-cursive-regular text-lg lg:text-2xl text-black font-cursive font-semibold mb-4 text-center">B2B Connect</h2>
        <div className="mb-4">
          <label htmlFor="businessName" className="block text-gray-700 text-sm font-bold mb-2">Name of Business:</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter business name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobileNo" className="block text-gray-700 text-sm font-bold mb-2">Mobile No:</label>
          <input
            type="text"
            id="mobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter mobile number"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email id:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter email address"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="reasonToConnect" className="block text-gray-700 text-sm font-bold mb-2">Reason To Connect:</label>
          <textarea
            id="reasonToConnect"
            name="reasonToConnect"
            value={formData.reasonToConnect}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none h-32"
            placeholder="Enter reason to connect"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className=" border border-black hover:text-white hover:bg-black text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:cursor-not-allowed" disabled={loading}>
            Connect
          </button>
        </div>
      </form>
    </div>
  );
};

export default B2BConnectForm;
