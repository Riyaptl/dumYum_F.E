// import React, { useEffect, useState } from 'react'
// import { RiLogoutBoxLine } from 'react-icons/ri'
// import { AiOutlineEdit, AiOutlineClose, AiOutlineDelete } from 'react-icons/ai'
// import {
//   getCustomer,
//   getImages,
//   getProducts,
//   removeAddress,
// } from '../slices/customerSlice'
// import { useDispatch , useSelector } from 'react-redux'
// import {
//   addAddress,
//   updateAddress,
//   getAddress,
//   defaultAddress,
//   getOrders,
//   getQueries,
// } from '../slices/customerSlice'
// import { ImCross } from 'react-icons/im'

// const Profile = () => {
//   const dispatch = useDispatch()
//   const { customer, orders, products, queries, images } = useSelector(
//     (state) => state.customer,
//   )
//   const [activeTab, setActiveTab] = useState('orders')
//   const [showProds, setShowProds] = useState([])
//   //   const [addresses, setAddresses] = useState([
//   //     {
//   //     id: 1,
//   //     street: '123 Main St',
//   //     city: 'City',
//   //     district: 'District',
//   //     pincode: '123456',
//   //     default: true // Default address
//   //   }]);
//   const [showOverlay, setShowOverlay] = useState(false)
//   const [addressDetails, setAddressDetails] = useState({
//     houseNumber: '',
//     street: '',
//     nearby: '',
//     city: '',
//     pincode: '',
//     state: '',
//   })
//   const [editingAddress, setEditingAddress] = useState('')
//   const [custDefaultAddress, setCustDefaultAddress] = useState('')
//   const [isQueryAttachmentVisible, setIsQueryAttachmentVisible] = useState(
//     false,
//   )
//   const [queryAttachments, setQueryAttachments] = useState([])
//   const [isRaiseQueryOverlayVisible, setIsRaiseQueryOverlayVisible] = useState(
//     false,
//   )
//   const [raiseQueryFormData, setRaiseQueryFormData] = useState('')
//   const [raiseQueryAttachments, setRaiseQueryAttachments] = useState([])
//   const [selectedOrder, setSelectedOrder] = useState(null)
//   const [editCustOverlay, setEditCustOverlay] = useState(false)
//   const { address } = useSelector((state) => state.customer)
//   const queryImages = `http://localhost:8000`

//   useEffect(() => {
//     dispatch(getCustomer())
//     dispatch(getAddress())
//     dispatch(getOrders())
//     dispatch(getQueries())
//   }, [])

//   useEffect(() => {
//     setCustDefaultAddress(customer?.defaultAddress.toString())
//   }, [customer?.defaultAddress])

//   const handleEditCustomer = () => {
//     setEditCustOverlay(true)
//   }

//   const handleAddNewAddress = () => {
//     setShowOverlay(true)
//   }

//   const closeOverlay = () => {
//     setShowOverlay(false)
//     setAddressDetails({
//       houseNumber: '',
//       street: '',
//       nearby: '',
//       city: '',
//       pincode: '',
//       state: '',
//     })
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setAddressDetails({
//       ...addressDetails,
//       [name]: value,
//     })
//   }

//   const handleSubmitAddress = async () => {
//     if (editingAddress) {
//       await dispatch(
//         updateAddress({ data: { ...addressDetails }, id: editingAddress }),
//       )
//     } else {
//       await dispatch(addAddress({ ...addressDetails }))
//     }
//     dispatch(getAddress())
//     setShowOverlay(false)
//     setEditingAddress('')
//     setAddressDetails({
//       houseNumber: '',
//       street: '',
//       nearby: '',
//       city: '',
//       pincode: '',
//       state: '',
//     })
//   }

//   const handleEditAddress = (editAddress) => {
//     setAddressDetails({ ...editAddress })
//     setEditingAddress(editAddress._id.toString())
//     setShowOverlay(true)
//   }

//   const handleTabChange = (tab) => {
//     setActiveTab(tab)
//   }

//   const handleSetDefaultAddress = async (id) => {
//     await dispatch(defaultAddress(id))
//     setCustDefaultAddress(id.toString())
//   }

//   const handleDeleteAddress = async (id) => {
//     await dispatch(removeAddress(id))
//     await dispatch(getAddress())
//     await dispatch(getCustomer())
//   }

//   const toggleQueryAttachment = async (query) => {
//     await dispatch(getImages(query._id))
//     setIsQueryAttachmentVisible(true)
//   }

//   const closeQueryAttachment = () => {
//     setIsQueryAttachmentVisible(false)
//   }

//   const toggleRaiseQueryOverlay = () => {
//     setIsRaiseQueryOverlayVisible(!isRaiseQueryOverlayVisible)
//   }

//   const handleRaiseQueryChange = (e) => {
//     setRaiseQueryFormData(e.target.value)
//   }

//   const handleRaiseQueryAttachmentsChange = (e) => {
//     const files = e.target.files
//     const attachmentsArray = []
//     for (let i = 0; i < files.length; i++) {
//       attachmentsArray.push(files[i])
//     }
//     setRaiseQueryAttachments(attachmentsArray)
//   }

//   const raiseQuery = () => {
//     console.log('Query raised:', raiseQueryFormData)
//     console.log('Attachments:', raiseQueryAttachments)
//     setRaiseQueryFormData('')
//     setRaiseQueryAttachments([])
//     setIsRaiseQueryOverlayVisible(false)
//   }

//   const logout = () => {
//     console.log('Logout')
//   }

//   useEffect(() => {
//     setShowProds(products)
//   }, [products])

//   const handleViewOrderDetails = async (order) => {
//     await dispatch(getProducts(order._id))
//     setSelectedOrder(true)
//   }

//   const handleCloseOrderDetails = () => {
//     setShowProds([])
//     setSelectedOrder(null)
//   }

//   //   const handleCloseOverlay = () => {
//   //     setIsEditingAddress(false);
//   //     setIsAddingAddress(false);
//   //     setNewAddressFormData({
//   //       street: '',
//   //       city: '',
//   //       district: '',
//   //       pincode: ''
//   //     });
//   //   };

//   //   const { basicDetails, orders, queries } = userData;

//   return (
//     <div className="container mx-auto mt-8 px-4 max-w-7xl">
//       <header className="text-center mb-8">
//         <h1 className="text-3xl font-bold">MY ACCOUNT</h1>
//         <button
//           className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
//           onClick={logout}
//         >
//           <RiLogoutBoxLine /> Logout
//         </button>
//       </header>
//       <div className="flex gap-8">
//         <section className="flex-1">
//           {customer && (
//             <>
//               <h2 className="text-2xl font-bold mb-4">Basic Details</h2>
//               <button
//                 className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none ml-2"
//                 onClick={handleEditCustomer}
//               >
//                 <AiOutlineEdit />
//               </button>
//               <div className="mb-6">
//                 <p>
//                   <span className="font-semibold">First Name:</span>{' '}
//                   {customer.name.split(' ')[0]}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Last Name:</span>{' '}
//                   {customer.name.split(' ')[1]}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Email:</span> {customer.email}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Phone:</span>{' '}
//                   {customer.phone || 'NA'}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Gender:</span>{' '}
//                   {customer.gender || 'NA'}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Birthdate:</span>{' '}
//                   {customer.birthdate || 'NA'}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Marital Status:</span>{' '}
//                   {customer.marraigeStatus || 'NA'}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Having Kids:</span>{' '}
//                   {customer.kidsStatus || 'NA'}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Anniversary:</span>{' '}
//                   {customer.anniversary || 'NA'}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Kids Birthdate:</span>{' '}
//                   {customer.kidsBirthdate.length > 0
//                     ? customer.kidsBirthdate
//                     : 'NA'}
//                 </p>
//                 <p>
//                   <span className="font-semibold">
//                     Total Amount of Products Purchase:
//                   </span>{' '}
//                   {customer.totalAmount}
//                 </p>
//                 <p>
//                   <span className="font-semibold">
//                     Total Number of Products Purchase:
//                   </span>{' '}
//                   {customer.totalNumber}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Signed Up At:</span>{' '}
//                   {
//                     new Date(customer.createdAt)
//                       .toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
//                       .split(',')[0]
//                   }
//                 </p>
//               </div>
//             </>
//           )}

//           <div>
//             <h2 className="text-2xl font-bold mb-4">My Address</h2>
//             {address?.map((address) => (
//               <div key={address._id} className="mb-4">
//                 <p className="font-semibold">
//                   {address.houseNumber}, {address.street}, {address.nearby},{' '}
//                   {address.city}, {address.state}, {address.pincode}
//                 </p>
//                 {address._id === custDefaultAddress ? (
//                   <span className="text-green-500 font-semibold">Default</span>
//                 ) : (
//                   <button
//                     className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none"
//                     onClick={() => handleSetDefaultAddress(address._id)}
//                   >
//                     Set as Default
//                   </button>
//                 )}
//                 <button
//                   className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none ml-2"
//                   onClick={() => handleEditAddress(address)}
//                 >
//                   <AiOutlineEdit />
//                 </button>
//                 <button
//                   className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none ml-2"
//                   onClick={() => handleDeleteAddress(address._id)}
//                 >
//                   <AiOutlineDelete />
//                 </button>
//               </div>
//             ))}
//             <button
//               className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none"
//               onClick={handleAddNewAddress}
//             >
//               Add New Address
//             </button>
//             {showOverlay && (
//               <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//                 <div className="w-72 h-60 md:w-1/2 lg:w-2/6 lg:h-1/2 bg-white flex justify-center rounded shadow-lg relative">
//                   <div className="absolute top-4 right-4 text-lg text-red-600">
//                     <ImCross onClick={closeOverlay} />
//                   </div>
//                   <div className="w-64 md: xl:w-96 flex flex-col justify-center">
//                     <input
//                       value={addressDetails.houseNumber}
//                       onChange={handleChange}
//                       type="text"
//                       name="houseNumber"
//                       className="w-full border border-grey-300 mb-5 px-2 py-2"
//                       placeholder="Enter your house number"
//                       required
//                     />
//                     <input
//                       value={addressDetails.street}
//                       onChange={handleChange}
//                       type="text"
//                       name="street"
//                       className="w-full border border-grey-300 mb-5 px-2 py-2"
//                       placeholder="Enter your street"
//                       required
//                     />
//                     <input
//                       className="w-full border border-grey-300 mb-5 px-2 py-2"
//                       value={addressDetails.nearby}
//                       onChange={handleChange}
//                       type="text"
//                       name="nearby"
//                       placeholder="Enter your nearby"
//                       required
//                     />
//                     <input
//                       className="w-full border border-grey-300 mb-5 px-2 py-2"
//                       value={addressDetails.pincode}
//                       onChange={handleChange}
//                       type="text"
//                       name="pincode"
//                       placeholder="Enter your pincode"
//                       required
//                     />
//                     <input
//                       className="w-full border border-grey-300 mb-5 px-2 py-2"
//                       value={addressDetails.city}
//                       onChange={handleChange}
//                       type="text"
//                       name="city"
//                       placeholder="Enter your city"
//                       required
//                     />
//                     <input
//                       className="w-full border border-grey-300 mb-5 px-2 py-2"
//                       value={addressDetails.state}
//                       onChange={handleChange}
//                       type="text"
//                       name="state"
//                       placeholder="Enter your state"
//                       required
//                     />
//                     {/* <div> 
//                     <input type="checkbox" onChange={handleSaveAddress}/> Save for future orders
//                   </div> */}
//                     <button
//                       onClick={handleSubmitAddress}
//                       className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600"
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>

//         <section className="flex-1">
//           <h2 className="text-2xl font-bold mb-4">My Orders and Queries</h2>
//           <ul className="flex">
//             <li className="mr-6">
//               <button
//                 className={`${
//                   activeTab === 'orders'
//                     ? 'text-blue-500 border-b-2 border-blue-500'
//                     : 'text-gray-500'
//                 } focus:outline-none`}
//                 onClick={() => handleTabChange('orders')}
//               >
//                 My Orders
//               </button>
//             </li>
//             <li className="mr-6">
//               <button
//                 className={`${
//                   activeTab === 'queries'
//                     ? 'text-blue-500 border-b-2 border-blue-500'
//                     : 'text-gray-500'
//                 } focus:outline-none`}
//                 onClick={() => handleTabChange('queries')}
//               >
//                 My Queries
//               </button>
//             </li>
//           </ul>
//           <div>
//             {activeTab === 'orders' && (
//               <div>
//                 <h2 className="text-2xl font-bold mb-4">My Orders</h2>
//                 <table className="border-collapse w-full">
//                   <thead>
//                     <tr>
//                       <th className="border border-gray-400 px-4 py-2">
//                         Placed At
//                       </th>
//                       <th className="border border-gray-400 px-4 py-2">
//                         Quantity
//                       </th>
//                       <th className="border border-gray-400 px-4 py-2">Cost</th>
//                       <th className="border border-gray-400 px-4 py-2">
//                         Order For
//                       </th>
//                       <th className="border border-gray-400 px-4 py-2">
//                         Delivered
//                       </th>
//                       <th className="border border-gray-400 px-4 py-2">
//                         Status
//                       </th>
//                       <th className="border border-gray-400 px-4 py-2">
//                         Payment Status
//                       </th>
//                       <th className="border border-gray-400 px-4 py-2">
//                         Payment Method
//                       </th>
//                       <th className="border border-gray-400 px-4 py-2">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {orders?.map((order) => (
//                       <tr key={order._id}>
//                         <td className="border border-gray-400 px-4 py-2">
//                           {new Date(order.createdAt)
//                             .toLocaleDateString()
//                             .split('')}
//                         </td>
//                         <td className="border border-gray-400 px-4 py-2">
//                           {order.totalQuantity}
//                         </td>
//                         <td className="border border-gray-400 px-4 py-2">
//                           {order.finalPrice}
//                         </td>
//                         <td className="border border-gray-400 px-4 py-2">
//                           {order.orderFor}
//                         </td>
//                         <td className="border border-gray-400 px-4 py-2">
//                           {order.delivered || '-'}
//                         </td>
//                         <td className="border border-gray-400 px-4 py-2">
//                           {order.orderStatus}
//                         </td>
//                         <td className="border border-gray-400 px-4 py-2">
//                           {order.paymentStatus || '-'}
//                         </td>
//                         <td className="border border-gray-400 px-4 py-2">
//                           {order.paymentMethod || '-'}
//                         </td>
//                         <td className="border border-gray-400 px-4 py-2">
//                           <button
//                             className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none"
//                             onClick={() => handleViewOrderDetails(order)}
//                           >
//                             View{' '}
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//             {activeTab === 'queries' && (
//               <div>
//                 <h2 className="text-2xl font-bold mb-4">My Queries</h2>
//                 <table className="border-collapse w-full">
//                   <thead>
//                     <tr>
//                       <th className="border border-gray-400 px-4 py-2">
//                         Title
//                       </th>
//                       <th className="border border-gray-400 px-4 py-2">
//                         Description
//                       </th>
//                       <th className="border border-gray-400 px-4 py-2">
//                         Raised At
//                       </th>
//                       <th className="border border-gray-400 px-4 py-2">
//                         Status
//                       </th>
//                       <th className="border border-gray-400 px-4 py-2">
//                         Closed At
//                       </th>
//                       <th className="border border-gray-400 px-4 py-2">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {queries?.map((query) => (
//                       <tr key={query.id}>
//                         <td className="border border-gray-400 px-4 py-2">
//                           {query.title}
//                         </td>
//                         <td className="border border-gray-400 px-4 py-2">
//                           {query.description || '-'}
//                         </td>
//                         <td className="border border-gray-400 px-4 py-2">
//                           {new Date(query.createdAt)
//                             .toLocaleDateString()
//                             .split('')}
//                         </td>
//                         <td className="border border-gray-400 px-4 py-2">
//                           {query.queryStatus}
//                         </td>
//                         <td className="border border-gray-400 px-4 py-2">
//                           {query.closedAt
//                             ? new Date(query.closedAt)
//                                 .toLocaleDateString()
//                                 .split('')
//                             : '-'}
//                         </td>
//                         <td className="border border-gray-400 px-4 py-2">
//                           <button
//                             className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none"
//                             onClick={() => toggleQueryAttachment(query)}
//                           >
//                             View Attachments
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 {isQueryAttachmentVisible && (
//                   <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
//                     <div className="bg-white p-8 rounded shadow-lg">
//                       <h3 className="text-xl font-semibold mb-4">
//                         Attachments
//                       </h3>
//                       <ul>
//                         {images?.map((attachment, index) => (
//                           <li key={index} className="mb-2">
//                             {console.log(queryImages + attachment)}
//                             <img
//                               src={queryImages + attachment}
//                               alt={`Attachment ${index}`}
//                               className="w-32 h-32 object-cover"
//                             />
//                           </li>
//                         ))}
//                       </ul>
//                       <button
//                         className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
//                         onClick={closeQueryAttachment}
//                       >
//                         Close
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </section>
//       </div>
//       {selectedOrder && (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-8 rounded shadow-lg w-3/4">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-semibold">Order Details</h3>
//               <button
//                 className="text-red-500 hover:text-red-600 focus:outline-none"
//                 onClick={handleCloseOrderDetails}
//               >
//                 <AiOutlineClose />
//               </button>
//             </div>
//             <table className="border-collapse w-full">
//               <thead>
//                 <tr>
//                   <th className="border border-gray-400 px-4 py-2">Category</th>
//                   <th className="border border-gray-400 px-4 py-2">
//                     Product Name
//                   </th>
//                   <th className="border border-gray-400 px-4 py-2">Quantity</th>
//                   <th className="border border-gray-400 px-4 py-2">price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {showProds?.map((product, index) => (
//                   <tr key={index}>
//                     <td className="border border-gray-400 px-4 py-2">
//                       {product.category}
//                     </td>
//                     <td className="border border-gray-400 px-4 py-2">
//                       {product.subCategory}
//                     </td>
//                     <td className="border border-gray-400 px-4 py-2">
//                       {product.quantity}
//                     </td>
//                     <td className="border border-gray-400 px-4 py-2">
//                       {product.price}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//       <section className="mt-8">
//         <h2 className="text-2xl">Raise Queries</h2>
//         <textarea
//           className="w-full h-32 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mb-4"
//           placeholder="Write your query here..."
//           value={raiseQueryFormData}
//           onChange={handleRaiseQueryChange}
//         ></textarea>
//         <input
//           type="file"
//           multiple
//           onChange={handleRaiseQueryAttachmentsChange}
//         />
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
//           onClick={raiseQuery}
//         >
//           Raise Query
//         </button>
//       </section>
//     </div>
//   )
// }

// export default Profile


import React, { useState } from 'react';
import { RiLogoutBoxLine } from 'react-icons/ri';
import BasicDetails from './BasicDetails';
import MyAddress from './MyAddress';
import MyOrders from './MyOrders';
import MyQueries from './MyQueries';
import RaiseQueries from './RaiseQueries';

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState('basicDetails');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const logout = () => {
    console.log('Logout');
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
    <div className="flex">
      <aside className="w-1/4 bg-gray-200 p-4">
        <ul className="space-y-4">
          <li
            className={`cursor-pointer ${
              selectedTab === 'basicDetails' && 'font-bold'
            }`}
            onClick={() => handleTabClick('basicDetails')}
          >
            Basic Details
          </li>
          <li
            className={`cursor-pointer ${
              selectedTab === 'myOrders' && 'font-bold'
            }`}
            onClick={() => handleTabClick('myOrders')}
          >
            My Orders
          </li>
          <li
            className={`cursor-pointer ${
              selectedTab === 'myQueries' && 'font-bold'
            }`}
            onClick={() => handleTabClick('myQueries')}
          >
            My Queries
          </li>
          <li
            className={`cursor-pointer ${
              selectedTab === 'raiseQueries' && 'font-bold'
            }`}
            onClick={() => handleTabClick('raiseQueries')}
          >
            Raise Queries
          </li>
          <li
            className={`cursor-pointer ${
              selectedTab === 'myAddress' && 'font-bold'
            }`}
            onClick={() => handleTabClick('myAddress')}
          >
            My Address
          </li>
          <li className="cursor-pointer" onClick={logout}>
            Logout
          </li>
        </ul>
      </aside>
      <section className="flex-1 p-4">{renderTabContent()}</section>
    </div>
  );
};

export default Profile;