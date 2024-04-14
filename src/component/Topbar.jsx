import React from 'react'

const Topbar = () => {
  const jsonData = {
    offer: {
      message:
        'Special Offers: Get 20% off on selected items. Limited time only!',
    },
  }
  return (
    <div className=" relative offer-bar bg-gray-100 text-black p-2 text-center">
      <p>{jsonData.offer.message}</p>
    </div>
  )
}

export default Topbar
