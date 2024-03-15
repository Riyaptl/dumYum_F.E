import React, { useState } from 'react'
import { FaEdit, FaTruck } from 'react-icons/fa'
import { AiOutlineCheck } from 'react-icons/ai'

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Iphone 6S',
      brand: 'Apple',
      image:
        'https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00733_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700',
      quantity: 1,
      price: 400.0,
    },
    {
      id: 2,
      name: 'Xiaomi Mi 20000mAh',
      brand: 'Xiaomi',
      image:
        'https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00737_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700',
      quantity: 1,
      price: 40.0,
    },
    {
      id: 3,
      name: 'Airpods',
      brand: 'Apple',
      image:
        'https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00729_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700',
      quantity: 1,
      price: 150.0,
    },
  ])

  const [shippingAddress, setShippingAddress] = useState({
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
  })

  const [pincode, setPincode] = useState('')
  const [shippingAvailable, setShippingAvailable] = useState(false)

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const changeQuantity = (id, value) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: Math.max(1, product.quantity + value) }
      }
      return product
    })
    setProducts(updatedProducts)
  }

  const totalProductPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  )
  const taxPercentage = 10
  const shippingCharge = 10.0
  const totalCost =
    totalProductPrice +
    totalProductPrice * (taxPercentage / 100) +
    shippingCharge

  const editAddress = () => {
    console.log('Edit address')
  }
  const checkShippingAvailability = () => {
    setShippingAvailable(pincode === '12345')
  }

  return (
    <div className="bg-gray-100 py-4">
      <div className="flex shadow-md my-10 mx-auto  w-4/5">
        <div className="w-3/4 bg-white px-10 py-10 ">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{products.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
            >
              <div className="flex w-2/5">
                <div className="w-20">
                  <img
                    className="h-24"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">{product.name}</span>
                  <span className="text-red-500 text-xs">{product.brand}</span>
                  <button
                    onClick={() => removeProduct(product.id)}
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <button
                  onClick={() => changeQuantity(product.id, -1)}
                  className="fill-current text-gray-600 w-3"
                >
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value={product.quantity}
                  readOnly
                />
                <button
                  onClick={() => changeQuantity(product.id, 1)}
                  className="fill-current text-gray-600 w-3"
                >
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-center w-1/5 font-semibold text-sm">
                ${(product.quantity * product.price).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${totalCost.toFixed(2)}</span>
            </div>
          </div>
          <a
            href="#"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </a>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10 bg-white border-l">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Items {products.length}
            </span>
            <span className="font-semibold text-sm">
              ${totalProductPrice.toFixed(2)}
            </span>
          </div>
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between">
              <span className="font-semibold text-sm uppercase">
                Shipping Charge
              </span>
              <span className="font-semibold text-sm">
                ${shippingCharge.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="font-semibold text-sm uppercase">
                Tax ({taxPercentage}%)
              </span>
              <span className="font-semibold text-sm">
                ${(totalProductPrice * (taxPercentage / 100)).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="font-semibold text-sm uppercase">
                Total Cost
              </span>
              <span className="font-semibold text-sm">
                ${totalCost.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <span className='flex items-center'>
            <FaTruck className="mr-2" />
            <h2 className="font-semibold text-lg">Shipping Address</h2></span>
            <button onClick={editAddress} className="ml-2 ">
              <FaEdit />
            </button>
          </div>
          <p className="mt-2">
            {shippingAddress.street}, {shippingAddress.city},{' '}
            {shippingAddress.state} {shippingAddress.zip}
          </p>
          <div className="mt-6 flex items-center">
            <FaTruck className="mr-2" />
            <h2 className="font-semibold text-lg">
              Check Shipping Availability
            </h2>
          </div>
          <div className="flex border p-2 mt-2">
            <input
              type="text"
              className="border-none focus:outline-none w-full"
              placeholder="Enter Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <button
              onClick={checkShippingAvailability}
              className="ml-2 bg-indigo-500 font-semibold hover:bg-indigo-600 py-2 px-4 text-sm text-white uppercase"
            >
              <AiOutlineCheck />
            </button>
          </div>
          {shippingAvailable && (
            <p className="mt-2 text-green-600">Shipping Available!</p>
          )}
          {!shippingAvailable && (
            <p className="mt-2 text-red-600">Shipping Not Available!</p>
          )}
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full mt-6">
            Checkout
          </button>
        </div>
      </div>
    </div>

  )
}

export default Cart
