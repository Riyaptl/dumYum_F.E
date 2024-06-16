import React, { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'

const RefundPolicy = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const RefundData = [
    {
      title: 'Our Commitment to Quality',
      content:
        'At DumYum Chocolate, we are dedicated to delivering our chocolates to you in impeccable condition. However, if you find that your order does not meet your expectations, we are here to assist you.',
    },
    {
      title: 'Quality Concerns',
      content:
        'Should you have any concerns about the quality of your order, please reach out to our Customer Care team within 24 hours of receiving your chocolates. Provide a detailed description along with photographs of the issue to help us understand the situation and offer a suitable solution.',
    },
    {
      title: 'Replacement or Exchange',
      content:
        'We are committed to ensuring your satisfaction. If your chocolates are not up to standard due to an error on our part, we will promptly replace the item with a better product of equal or greater value. This will be done at no additional cost to you.',
    },
    {
      title: 'Process and Timeframe',
      content:
        'The replacement process will be initiated within 5 days of your contact with Customer Care. Please note that claims submitted without proper support will not be eligible for reshipment. We reserve the right to limit replacements, and refunds are not offered.',
    },
    {
      title: 'Questions or Concerns',
      content:
        'Our goal is to make sure you receive the best chocolates and service possible. If you have any questions or concerns, please contact us at [email protected] We are here to assist you!',
    },
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <div className="bg-gray-100 min-h-screen py-7 flex justify-center ">
      <div className="wrapper w-4/5 ">
        <div className="flex justify-center py-4">
          <h1 className="cedarville-cursive-regular text-lg lg:text-3xl text-black font-cursive font-semibold mb-4 text-center">
            Refund Policy
          </h1>
        </div>

        <div className="container">
          {RefundData.map((item, index) => (
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
                  className={`icon w-6 h-6 black ${
                    activeIndex === index ? 'transform rotate-45' : ''
                  }`}
                >
                  <BsPlusLg />
                </span>
              </div>
              <div
                className={`answercont transition-max-height duration-300 overflow-hidden ${
                  activeIndex === index ? 'max-h-full' : 'max-h-0'
                }`}
              >
                <div
                  className="answer px-6 text-[#666] font-[16px]"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RefundPolicy
