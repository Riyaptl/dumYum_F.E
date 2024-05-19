import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux';
import { updateCustomer } from '../slices/customerSlice';
import { FaChild, FaUser, FaAddressCard, FaCalendarAlt, FaRing } from 'react-icons/fa';

const EditCustOverlay = ({ handleCloseEditForm }) => {

  const dispatch = useDispatch()
  const {customer} = useSelector((state) => state.customer)

  const [formData, setFormData] = useState({
<<<<<<< HEAD
    name: customer?.name,
    email: customer?.email,
    phone: customer?.phone || '',
    gender: customer?.gender || '',
    birthdate: customer?.birthdate || '',
    marraigeStatus: customer?.marraigeStatus || '',
    kidsStatus: customer?.kidsStatus || '',
    anniversary: customer?.anniversary || '',
    kidsBirthdate: customer?.kidsBirthdate || ''
=======
    firstName: customer.firstName,
    lastName: customer.lastName,
    email: customer.email,
    phone: customer.phone || '',
    gender: customer.gender || '',
    birthdate: customer.birthdate || '',
    maritalStatus: customer.maritalStatus || '',
    kidsStatus: customer.kidsStatus || '',
    anniversary: customer.anniversary || '',
    kidsBirthdate: customer.kidsBirthdate || '',
    totalAmount: customer.totalAmount || '',
    totalNumber: customer.totalNumber || '',
>>>>>>> ea778517a5b001b46264191355d500bf13f95c14
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleChangeKidsBirthdate = (e) => {
    const { name, value} = e.target;
      const index = parseInt(name.split('.')[1]);
      const updatedKids = [...formData.kidsBirthdate];
      updatedKids[index] = value;
      setFormData(prevState => ({
        ...prevState,
        kidsBirthdate: updatedKids
      }));
    };


  const handleKidsChange = (e) => {
    const { name, checked } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked ? 'yes' : 'no',
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(updateCustomer({id: customer._id, body: formData}))
    handleCloseEditForm()
  }

  const addKid = () => {
    setFormData(prevState => ({
      ...prevState,
      kidsBirthdate: [...prevState.kidsBirthdate, '']
    }));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[80%] bg-white rounded shadow-lg p-4">
        <div className="flex justify-end">
          <AiOutlineClose
            className="text-2xl cursor-pointer"
            onClick={handleCloseEditForm}
          />
        </div>
        <h2 className="text-xl font-bold mb-4">Edit Details</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
          {/* <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.name.split(' ')[0]}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div> */}
          {/* <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.name.split(' ')[1]}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div> */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          {/* Gender */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Birthdate
            </label>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Marital Status
            </label>
            <div>
              <input
                type="radio"
                id="married"
                name="marraigeStatus"
                value="Married"
                checked={formData.marraigeStatus === 'Married'}
                onChange={handleChange}
                className="form-radio"
              />
              <label htmlFor="married" className="ml-2 mr-4">
                Married
              </label>
              <input
                type="radio"
                id="unmarried"
                name="marraigeStatus"
                value="Unmarried"
                checked={formData.marraigeStatus === 'Unmarried'}
                onChange={handleChange}
                className="form-radio"
              />
              <label htmlFor="unmarried" className="ml-2">
                Unmarried
              </label>
            </div>
          </div>
          {/* Anniversary */}
          {formData.marraigeStatus === 'Married' && <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Anniversary
            </label>
            <input
              type="date"
              name="anniversary"
              value={formData.anniversary}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>}
          {formData.marraigeStatus === 'Married' &&
            <>
              {/* Has Kids */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Has Kids</label>
              <input
                type="checkbox"
                name="kidsStatus"
                checked={formData.kidsStatus === 'yes'}
                onChange={handleKidsChange}
                className="form-checkbox"
              />
            </div>
            {/* Kids Birthdate */}
            {/* {formData.kidsStatus === 'yes' && (
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Kids Birthdate
                </label>
                <input
                  type="date"
                  name="kidsBirthdate"
                  value={formData.kidsBirthdate}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>
            )} */}
            {formData.kidsStatus === 'yes' && (
                <div className="col-span-2">
                  <div className="border rounded p-4">
                    <h4 className="text-lg font-semibold mb-2">Kids Details</h4>
                    {formData.kidsBirthdate.map((kid, index) => (
                      <div key={index} className="mb-4 border p-4 rounded-lg">
                        <h5 className="text-md font-semibold mb-2">Kid {index + 1}</h5>
                        <div className="grid grid-cols-2 gap-4">
                          {/* <div>
                            <label htmlFor={`kidName${index}`} className="block text-gray-700 text-sm font-bold mb-2">Name *</label>
                            <input
                              type="text"
                              id={`kidName${index}`}
                              name={`kid.${index}.name`}
                              value={kid.name}
                              onChange={handleChange}
                              className="w-full border border-gray-300 rounded px-3 py-2"
                              required
                            />
                          </div> */}
                          <div>
                            <label htmlFor={`kidBirthday${index}`} className="block text-gray-700 text-sm font-bold mb-2">Birthday *</label>
                            <input
                              type="date"
                              id={`kidBirthday${index}`}
                              name={`kid.${index}`}
                              value={kid}
                              onChange={handleChangeKidsBirthdate}
                              className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <button type="button" onClick={addKid} className=" bg-fuchsia-50 hover:bg-fuchsia-100 text-black px-2 py-2  mt-2 border border-brown shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"> <FaChild className="mr-2" />Add Kid's Birthdate</button>
                  </div>
                </div>
              )}

            </>
          }
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditCustOverlay
