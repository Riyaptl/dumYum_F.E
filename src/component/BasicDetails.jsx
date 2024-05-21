import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCustomer } from '../slices/customerSlice';
import { AiOutlineEdit, AiOutlineMail, AiOutlinePhone, AiOutlineUser, AiOutlineCalendar, AiOutlineHeart, AiOutlineTeam, AiOutlineShoppingCart, AiOutlineDollarCircle, AiOutlineClockCircle } from 'react-icons/ai';
import EditCustOverlay from './EditCustOverlay';

const BasicDetails = () => {
  const dispatch = useDispatch();
  const [editCustOverlay, setEditCustOverlay] = useState(false);
  const { customer } = useSelector((state) => state.customer);

  const handleEditCustomer = () => {
    setEditCustOverlay(true);
  };

  const handleCloseEditForm = () => {
    setEditCustOverlay(false);
  };

  useEffect(() => {
    dispatch(getCustomer());
  }, [dispatch]);

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden  h-full">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Basic Details</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
           <p className='flex items-center text-gray-600 font-semibold'> <AiOutlineUser/>   <span className='ml-1'>Name</span> </p>
            <p className="text-base font-medium">{customer?.name}</p>
          </div>
          <div>
          <p className='flex items-center text-gray-600 font-semibold'> <AiOutlineMail/>  <span className='ml-1'>Email</span> </p>
            
            <p className="text-base font-medium">{customer?.email}</p>
          </div>
          <div>
          <p className='flex items-center text-gray-600 font-semibold'><AiOutlinePhone/>   <span className='ml-1'>Phone</span> </p>
            
            <p className="text-base font-medium">{customer?.phone || 'NA'}</p>
          </div>
          <div>
          <p className='flex items-center text-gray-600 font-semibold'> <AiOutlineUser/>   <span className='ml-1'>Gender</span> </p>
           
            <p className="text-base font-medium">{customer?.gender || 'NA'}</p>
          </div>
          <div>
          <p className='flex items-center text-gray-600 font-semibold'>  <AiOutlineCalendar/>   <span className='ml-1'>Birthdate</span> </p>
           
            <p className="text-base font-medium">{customer?.birthdate || 'NA'}</p>
          </div>
          <div>
          <p className='flex items-center text-gray-600 font-semibold'> <AiOutlineTeam/>   <span className='ml-1'>Marital Status</span> </p>
           
            <p className="text-base font-medium">{customer?.marraigeStatus || 'NA'}</p>
          </div>
          <div>
          <p className='flex items-center text-gray-600 font-semibold'> <AiOutlineTeam/>   <span className='ml-1'>Having Kids</span></p>
            
            <p className="text-base font-medium">{customer?.kidsStatus || 'NA'}</p>
          </div>
          <div>
          <p className='flex items-center text-gray-600 font-semibold'>  <AiOutlineCalendar/>  <span className='ml-1'>Anniversary</span> </p>
           
            <p className="text-base font-medium">{customer?.anniversary || 'NA'}</p>
          </div>
          <div>
          <p className='flex items-center text-gray-600 font-semibold'>  <AiOutlineCalendar/> <span className='ml-1'>Kids Birthdate</span> </p>
            {customer?.kidsBirthdate.map((birthday, index) => (
              <p key={index} className="text-base font-medium">{birthday}</p>
            ))}
            {customer?.kidsBirthdate.length == 0 && <p className="text-base font-medium">NA</p>}

          </div>
          <div>
          <p className='flex items-center text-gray-600 font-semibold'>  <AiOutlineDollarCircle/>   <span className='ml-1'>Total Amount of Products Purchase</span> </p>
           
            <p className="text-base font-medium">{customer?.totalAmount}</p>
          </div>
          <div>
          <p className='flex items-center text-gray-600 font-semibold'> <AiOutlineShoppingCart/>  <span className='ml-1'>Total Number of Products Purchase</span> </p>
            
            <p className="text-base font-medium">{customer?.totalNumber}</p>
          </div>
          <div>
          <p className='flex items-center text-gray-600 font-semibold'> <AiOutlineClockCircle/>   <span className='ml-1'>Signed Up At</span> </p>
            
            <p className="text-base font-medium">{new Date(customer?.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }).split(',')[0]}</p>
          </div>
        </div>
        <button
          className="mt-4 border border-black text-black px-4 py-1 rounded hover:bg-black hover:text-white focus:outline-none"
          onClick={handleEditCustomer}
        >
          <AiOutlineEdit className="inline-block mr-2" /> Edit
        </button>
      </div>
      {editCustOverlay && (
        <EditCustOverlay
          handleCloseEditForm={handleCloseEditForm}
        />
      )}
    </div>
  );
};

export default BasicDetails;
