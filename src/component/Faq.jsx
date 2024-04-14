import React, { useState } from 'react';
import { BsPlusLg } from "react-icons/bs";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      "title": "<h3 style=\"color: #333;\">ORDERING AND SHIPPING</h3>",
      "questions": [
        {
          "question": "Can orders be canceled or modified after they are placed?",
          "answer": "Orders can be canceled within 24 hours of placement without any charges. However, if an order is canceled after 24 hours of placement, cancellation charges apply. Once an order is out for delivery, it cannot be canceled or replaced. However, DumYum Chocolates will consider the request and respond accordingly if possible."
        },
        {
          "question": "Who is responsible for ensuring accurate shipping information and tracking delivery of orders?",
          "answer": "It is the purchaser's responsibility to ensure the accuracy of shipping information and to track the delivery of orders with the shipping service. DumYum Chocolates cannot be held responsible for incomplete or erroneous delivery instructions."
        },
        {
          "question": "What happens after DumYum Chocolates accepts an order?",
          "answer": "After accepting an order, DumYum Chocolates will prepare and send it to the shipping service. It is then the purchaser's responsibility to verify receipt with the shipping service."
        },
        {
          "question": "Who is responsible for loss or damage caused by environmental conditions after the product is delivered according to shipping instructions?",
          "answer": "Neither DumYum Chocolates nor the shipping service can be held responsible for loss or damage caused by environmental conditions after the product is delivered according to shipping instructions."
        },
        {
          "question": "What is DumYum Chocolates' policy regarding delays in delivery?",
          "answer": "DumYum Chocolates will not be responsible for delays caused by events beyond its control, including strikes, natural disasters, or terrorism."
        },
        {
          "question": "What should I do if my shipment is returned or needs to be rerouted due to an incorrect address?",
          "answer": "Shipments that are returned or require rerouting due to incorrect addresses will be subject to additional charges for reshipment and/or re-labeling by the carrier. If you have any questions or concerns regarding your order, please contact us at [email protected] We are here to assist you!"
        }
      ]
    },
    {
      "title": "<h3 style=\"color: #333;\">ORDER TRACKING</h3>",
      "questions": [
        {
          "question": "Will I receive an order confirmation?",
          "answer": "An order receipt will be sent immediately to your email address after placing your order. You will receive an order confirmation email with your order number, order total, and optional gift message within two hours of placing your order. Please review this information as soon as possible to ensure all addresses, items and arrival dates are correct. If you need to make any changes to your order, contact us at dumyumchocolates@gmail.com"
        },
        {
          "question": "How can I track the status of my orders?",
          "answer": "You can track the status of your orders by logging into your account on our website and checking the order tracking information."
        }
      ]
    },
    {
      "title": "<h3 style=\"color: #333;\">CARE AND STORAGE</h3>",
      "questions": [
        {
          "question": "What is the guarantee on the quality and freshness of DumYum Chocolates products?",
          "answer": "DumYum Chocolates guarantees the quality and freshness of its products for three weeks from the time they leave our place, provided they are handled and stored as indicated on the packaging. However, except as outlined in this section, DumYum Chocolates does not make any express or implied representations or warranties regarding its products, including any warranties regarding the fitness of its products for a particular purpose. Any additional warranties are hereby disclaimed."
        },
        {
          "question": "How should I store chocolate to keep it fresh for longer than two weeks?",
          "answer": "For extended freshness, store your chocolate in an airtight container or box and place it in the refrigerator. This can help maintain the chocolate's flavor and quality for up to two months."
        }
      ]
    },
    {
      "title": "<h3 style=\"color: #333;\">GENERAL QUESTIONS</h3>",
      "questions": [
        {
          "question": "What types of personal information does DumYum Chocolates collect?",
          "answer": "DumYum Chocolates may collect personal information such as your name, address, phone number, payment information, age, location information, IP address, and email addresses of your contacts. This information is used to enhance and refine their offerings to provide top-notch products and services."
        },
        {
          "question": "Does DumYum Chocolates sell customers' personal information to others?",
          "answer": "No, DumYum Chocolates does not sell customers' personal information to others. Sharing of personal information is done only as described in their Privacy Notice, and with subsidiaries that adhere to similar privacy practices. Third-party service providers enlisted by DumYum Chocolates have access to personal information only for performing specific functions and are not permitted to use it for other purposes."
        },
        {
          "question": "Can I choose not to provide certain information to DumYum Chocolates?",
          "answer": "Yes, you have the choice not to provide certain information to DumYum Chocolates. However, this may limit your ability to fully utilize DumYum Chocolates services. You can add or update specific information on pages mentioned in the \"What Information Can I Access?\" section. When you make updates, DumYum Chocolates typically retains a copy of the previous version for their records."
        }
      ]
    }
  ];
  

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return ( 
    <div className="bg-white min-h-screen flex justify-center items-center max-w-7xl mx-auto">
    <div className="wrapper">
      <div className='flex justify-center py-4'><h1 className="text-3xl font-bold mb-8">FAQs</h1></div>
      {faqData.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-8">
          <h2 className="text-md font-semibold mb-16 mt-12 text-center" dangerouslySetInnerHTML={{ __html: group.title }}></h2>
          <div className="container">
            {group.questions.map((question, index) => (
              <div className="question border-b border-gray-300 mb-4" key={index} onClick={() => toggleAccordion(groupIndex * 100 + index)}>
                <div className="flex items-center justify-between py-5 cursor-pointer transition-colors duration-300 ">
                  <span className="text-xl font-normal">{question.question}</span>
                  <BsPlusLg className={`w-6 h-6 black ${activeIndex === groupIndex * 100 + index ? 'transform rotate-45' : ''} transition-transform duration-500`} />
                </div>
                <div className={`answercont transition-max-height duration-300 ease-in-out overflow-hidden ${activeIndex === groupIndex * 100 + index ? 'max-h-full' : 'max-h-0'}`}>
                  <div className="answer py-6" dangerouslySetInnerHTML={{ __html: question.answer }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Faq;
