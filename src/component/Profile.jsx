  
  import React, { useState } from 'react';
  import { RiLogoutBoxLine } from 'react-icons/ri';
  import BasicDetails from './BasicDetails';
  import MyAddress from './MyAddress';
  import MyOrders from './MyOrders';
  import MyQueries from './MyQueries';
  import RaiseQueries from './RaiseQueries';
  import { DiVim } from 'react-icons/di';
  import { logOut } from '../slices/authSlice';
  import { useDispatch , useSelector } from 'react-redux'
  import { useNavigate } from "react-router-dom";
  
const Profile = () => {
  const [selectedTab, setSelectedTab] = useState('basicDetails');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const logout = async () => {
    await dispatch(logOut())  
    navigate('/')
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'basicDetails':
        return <BasicDetails />;
      case 'myAddress':
        return <MyAddress />;
      case 'myOrders':
        return <MyOrders />;
      case 'myQueries':
        return <MyQueries />;
      case 'raiseQueries':
        return <RaiseQueries />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto h-full min-h-dvh">
      <aside className="w-full lg:w-1/4 p-4 overflow-y-auto border-r">
        <ul className="space-y-4">
          <li
            className={`cursor-pointer px-4 py-2 rounded-md ${
              selectedTab === 'basicDetails' && 'border text-black font-semibold'
            }`}
            onClick={() => handleTabClick('basicDetails')}
          >
            Basic Details
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-md ${
              selectedTab === 'myOrders' && 'border text-black font-semibold'
            }`}
            onClick={() => handleTabClick('myOrders')}
          >
            My Orders
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-md ${
              selectedTab === 'myQueries' && 'border text-black font-semibold'
            }`}
            onClick={() => handleTabClick('myQueries')}
          >
            My Queries
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-md ${
              selectedTab === 'raiseQueries' && 'border text-black font-semibold'
            }`}
            onClick={() => handleTabClick('raiseQueries')}
          >
            Raise Queries
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-md ${
              selectedTab === 'myAddress' && 'border text-black font-semibold'
            }`}
            onClick={() => handleTabClick('myAddress')}
          >
            My Address
          </li>
          <li className="cursor-pointer  px-4 py-2 rounded-md hover:bg-gray-300" onClick={logout}>
            Logout
          </li>
        </ul>
      </aside>
      <section className="flex-1 p-4">{renderTabContent()}</section>
    </div>
  );
};

export default Profile;
