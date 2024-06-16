import React, { useState } from 'react'

const ShippingPolicy = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const ShippingData = [
    {
      title: 'Accuracy of Shipping Information',
      content:
        'It is crucial for purchasers to provide accurate shipping information to ensure proper delivery of orders.',
      content2:
        'DumYum Chocolates cannot be held responsible for incomplete or erroneous delivery instructions provided by the purchaser.',
    },
    {
      title: 'Responsibility for Delivery',
      content:
        'After accepting an order, DumYum Chocolates will prepare and send it to the shipping service.',
      content2:
        "While we strive to ensure delivery to most specified locations, it is the purchaser's responsibility to verify receipt with the shipping service.",
    },
    {
      title: 'Claim Procedures',
      content:
        "Failure to properly identify delivery problems to the shipping service may result in the purchaser's inability to make a successful claim.",
      content2: 'Most shipping services require a signature upon delivery.',
    },
    {
      title: 'Loss or Damage',
      content:
        'Once the product is delivered according to shipping instructions, neither DumYum Chocolates nor the shipping service can be held responsible for loss or damage caused by environmental conditions.',
    },
    {
      title: 'Delays and Events Beyond Control',
      content:
        'DumYum Chocolates will not be responsible for delays caused by events beyond its control, including strikes, natural disasters, or terrorism.',
    },
    {
      title: 'Holiday/Festival Seasons',
      content:
        'Shipping times may be longer during busy holiday/festival seasons such as Republic Day, Rakshabandhan, Independence Day, Ganesh Chaturthi, Dussehra, Diwali, New Year, etc.',
    },
    {
      title: 'Customer Support',
      content:
        "For any inquiries or assistance regarding shipping, customers can contact DumYum Chocolates' customer support team for prompt assistance.",
    },
    {
      title: 'Additional Charges',
      content:
        'Shipments that are returned or require rerouting due to incorrect addresses will be subject to additional charges for reshipment and/or re-labeling by the carrier.',
      content2:
        'Please contact us at [email protected] if you have any questions or concerns regarding your order. We are here to assist you!',
    },
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <div className="bg-gray-100 py-7 min-h-screen flex justify-center items-center  ">
      <div className="wrapper w-4/5 ">
        <div className="flex justify-center py-4">
          <h1 className="cedarville-cursive-regular text-lg lg:text-3xl text-black font-cursive font-semibold mb-4 text-center">
            Shipping Policy
          </h1>
        </div>

        <div className="container">
          {ShippingData.map((item, index) => (
            <div
              className="question border-b border-gray-300 mb-4"
              key={index}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center justify-between py-4 px-6 cursor-pointer">
                <span
                  className="text-lg font-medium text-[#333]"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></span>
                <span
                  className={`icon ${
                    activeIndex === index ? 'transform rotate-45' : ''
                  }`}
                >
                  &#43;
                </span>
              </div>
              <div
                className={`answercont transition-max-height duration-300 overflow-hidden ${
                  activeIndex === index ? 'max-h-full' : 'max-h-0'
                }`}
              >
                <div
                  className="answer px-6"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
                <div
                  className="answer px-6 pt-2"
                  dangerouslySetInnerHTML={{ __html: item.content2 }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShippingPolicy
