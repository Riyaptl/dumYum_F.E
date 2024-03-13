import React, { useState } from 'react';
import { FaChild, FaUser, FaAddressCard, FaCalendarAlt, FaRing } from 'react-icons/fa';

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    contact: {
      mobile: '',
      address: {
        houseNumber: '',
        street: '',
        state: '',
        district: '',
        nearby: '',
        pincode: ''
      }
    },
    birthday: '',
    maritalStatus: '',
    anniversary: '',
    hasKids: false,
    kids: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('contact')) {
      const field = name.split('.')[1];
      if (field === 'address') {
        const addressField = name.split('.')[2];
        setFormData(prevState => ({
          ...prevState,
          contact: {
            ...prevState.contact,
            address: {
              ...prevState.contact.address,
              [addressField]: value
            }
          }
        }));
      } else {
        setFormData(prevState => ({
          ...prevState,
          contact: {
            ...prevState.contact,
            [field]: value
          }
        }));
      }
    } else if (name === 'hasKids') {
      setFormData(prevState => ({
        ...prevState,
        [name]: checked,
        kids: checked ? [{ name: '', birthday: '' }] : []
      }));
    } else if (name.startsWith('kid')) {
      const index = parseInt(name.split('.')[1]);
      const field = name.split('.')[2];
      const updatedKids = [...formData.kids];
      updatedKids[index][field] = value;
      setFormData(prevState => ({
        ...prevState,
        kids: updatedKids
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const addKid = () => {
    setFormData(prevState => ({
      ...prevState,
      kids: [...prevState.kids, { name: '', birthday: '' }]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="max-w-screen-lg w-full bg-white shadow-md rounded p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">User Details</h2>
        <form onSubmit={handleSubmit}>

          {/* Basic Details Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Basic Details</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Contact Details */}
              <div>
                <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2"><FaUser className="inline-block mr-2" /> Mobile Number *</label>
                <input
                  type="text"
                  id="mobile"
                  name="contact.mobile"
                  value={formData.contact.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              {/* Address Details */}
              <div>
                <label htmlFor="houseNumber" className="block text-gray-700 text-sm font-bold mb-2"><FaAddressCard className="inline-block mr-2" /> House Number *</label>
                <input
                  type="text"
                  id="houseNumber"
                  name="contact.address.houseNumber"
                  value={formData.contact.address.houseNumber}
                  onChange={handleChange}
                  placeholder="Enter house number"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              {/* More Address Details */}
              <div>
                <label htmlFor="street" className="block text-gray-700 text-sm font-bold mb-2"><FaAddressCard className="inline-block mr-2" /> Street *</label>
                <input
                  type="text"
                  id="street"
                  name="contact.address.street"
                  value={formData.contact.address.street}
                  onChange={handleChange}
                  placeholder="Enter street"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              {/* State Details */}
              <div>
                <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2"><FaAddressCard className="inline-block mr-2" /> State *</label>
                <input
                  type="text"
                  id="state"
                  name="contact.address.state"
                  value={formData.contact.address.state}
                  onChange={handleChange}
                  placeholder="Enter state"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              {/* District Details */}
              <div>
                <label htmlFor="district" className="block text-gray-700 text-sm font-bold mb-2"><FaAddressCard className="inline-block mr-2" /> District *</label>
                <input
                  type="text"
                  id="district"
                  name="contact.address.district"
                  value={formData.contact.address.district}
                  onChange={handleChange}
                  placeholder="Enter district"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              {/* Nearby Details */}
              <div>
                <label htmlFor="nearby" className="block text-gray-700 text-sm font-bold mb-2"><FaAddressCard className="inline-block mr-2" /> Nearby *</label>
                <input
                  type="text"
                  id="nearby"
                  name="contact.address.nearby"
                  value={formData.contact.address.nearby}
                  onChange={handleChange}
                  placeholder="Enter nearby"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              {/* Pincode */}
              <div>
                <label htmlFor="pincode" className="block text-gray-700 text-sm font-bold mb-2"><FaAddressCard className="inline-block mr-2" /> Pincode *</label>
                <input
                  type="text"
                  id="pincode"
                  name="contact.address.pincode"
                  value={formData.contact.address.pincode}
                  onChange={handleChange}
                  placeholder="Enter pincode"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              {/* Birthday */}
              <div>
                <label htmlFor="birthday" className="block text-gray-700 text-sm font-bold mb-2"><FaCalendarAlt className="inline-block mr-2" /> Birthday *</label>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
            </div>
          </div>

          {/* Personal Details Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Marital Status */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2"><FaRing className="inline-block mr-2" /> Marital Status</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="radio"
                    id="married"
                    name="maritalStatus"
                    value="married"
                    checked={formData.maritalStatus === 'married'}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <label htmlFor="married" className="text-gray-700">Married</label>
                  <input
                    type="radio"
                    id="unmarried"
                    name="maritalStatus"
                    value="unmarried"
                    checked={formData.maritalStatus === 'unmarried'}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <label htmlFor="unmarried" className="text-gray-700">Unmarried</label>
                </div>
              </div>
              {/* Anniversary Date */}
              {formData.maritalStatus === 'married' && (
                <div>
                  <label htmlFor="anniversary" className="block text-gray-700 text-sm font-bold mb-2"><FaCalendarAlt className="inline-block mr-2" /> Anniversary Date</label>
                  <input
                    type="date"
                    id="anniversary"
                    name="anniversary"
                    value={formData.anniversary}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              )}
              {/* Has Kids */}
              {formData.maritalStatus === 'married' && (
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2"><FaChild className="inline-block mr-2" /> Has Kids</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      id="hasKids"
                      name="hasKids"
                      checked={formData.hasKids}
                      onChange={handleChange}
                      className="form-checkbox"
                    />
                    <label htmlFor="hasKids" className="text-gray-700">Yes</label>
                  </div>
                </div>
              )}
              {/* Kids Details */}
              {formData.hasKids && formData.maritalStatus === 'married' && (
                <div className="col-span-2">
                  <div className="border rounded p-4">
                    <h4 className="text-lg font-semibold mb-2">Kids Details</h4>
                    {formData.kids.map((kid, index) => (
                      <div key={index} className="mb-4 border p-4 rounded-lg">
                        <h5 className="text-md font-semibold mb-2">Kid {index + 1}</h5>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
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
                          </div>
                          <div>
                            <label htmlFor={`kidBirthday${index}`} className="block text-gray-700 text-sm font-bold mb-2">Birthday *</label>
                            <input
                              type="date"
                              id={`kidBirthday${index}`}
                              name={`kid.${index}.birthday`}
                              value={kid.birthday}
                              onChange={handleChange}
                              className="w-full border border-gray-300 rounded px-3 py-2"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <button type="button" onClick={addKid} className=" bg-fuchsia-50 hover:bg-fuchsia-100 text-black px-2 py-2  mt-2 border border-brown shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"> <FaChild className="mr-2" />Add Kid</button>
                  </div>
                </div>
              )}
            </div>
          </div>
<div className='flex justify-center'>
          <button type="submit" className="bg-fuchsia-50 hover:bg-fuchsia-100 text-black px-4 py-2 mt-4  border border-chocolate shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Submit
          </button></div>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsForm;
