import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCustomer, updateCustomer } from '../slices/customerSlice';
import { AiOutlineEdit, AiOutlineClose, AiOutlineDelete } from 'react-icons/ai'
import EditCustOverlay from './EditCustOverlay'

const BasicDetails = () => {
  const dispatch = useDispatch()
  const [editCustOverlay, setEditCustOverlay] = useState(false)
  const { customer } = useSelector((state) => state.customer)

  const handleEditCustomer = () => {
    setEditCustOverlay(true)
  }

  const handleCloseEditForm = () => {
    setEditCustOverlay(false)
  }

  const handleSubmitEditForm = (editedData) => {
    dispatch(updateCustomer(editedData))
    handleCloseEditForm()
  }

  useEffect(() => {
    dispatch(getCustomer())
  }, [dispatch])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Basic Details</h2>
      {customer && (
        <>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none ml-2"
            onClick={handleEditCustomer}
          >
            <AiOutlineEdit />
          </button>
          <div className="mb-6">
            <p>
              <span className="font-semibold">First Name:</span>{' '}
              {customer.name.split(' ')[0]}
            </p>
            <p>
              <span className="font-semibold">Last Name:</span>{' '}
              {customer.name.split(' ')[1]}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {customer.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{' '}
              {customer.phone || 'NA'}
            </p>
            <p>
              <span className="font-semibold">Gender:</span>{' '}
              {customer.gender || 'NA'}
            </p>
            <p>
              <span className="font-semibold">Birthdate:</span>{' '}
              {customer.birthdate || 'NA'}
            </p>
            <p>
              <span className="font-semibold">Marital Status:</span>{' '}
              {customer.marraigeStatus || 'NA'}
            </p>
            <p>
              <span className="font-semibold">Having Kids:</span>{' '}
              {customer.kidsStatus || 'NA'}
            </p>
            <p>
              <span className="font-semibold">Anniversary:</span>{' '}
              {customer.anniversary || 'NA'}
            </p>
            <p>
              <span className="font-semibold">Kids Birthdate:</span>{' '}
              {customer.kidsBirthdate.length > 0
                ? customer.kidsBirthdate
                : 'NA'}
            </p>
            <p>
              <span className="font-semibold">
                Total Amount of Products Purchase:
              </span>{' '}
              {customer.totalAmount}
            </p>
            <p>
              <span className="font-semibold">
                Total Number of Products Purchase:
              </span>{' '}
              {customer.totalNumber}
            </p>
            <p>
              <span className="font-semibold">Signed Up At:</span>{' '}
              {
                new Date(customer.createdAt)
                  .toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
                  .split(',')[0]
              }
            </p>
          </div>
        </>
      )}
      {editCustOverlay && (
        <EditCustOverlay
          customer={customer}
          handleCloseEditForm={handleCloseEditForm}
          handleSubmit={handleSubmitEditForm}
        />
      )}
    </div>
  )
}

export default BasicDetails
