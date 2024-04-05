import React, { useState } from 'react';

const TermConditions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      "title": "<h3 style=\"color: #333;\">1. ONLINE STORE TERMS</h3>",
      "content": "<p style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6;\">By agreeing to these Terms of Service, you confirm that you are legally able to enter into a contract (which typically means you are at least the age of majority in your state or province of residence). If you are not of legal age, you affirm that you have obtained consent from your parent or legal guardian to use this site. Our products must not be used for any unlawful or unauthorized purpose, and you agree not to violate any laws in your jurisdiction (including copyright laws) while using our service. You are prohibited from transmitting any worms or viruses or any code that may harm or disrupt our service. Violation of any of these terms will result in the immediate termination of your services.</p>"
    },
    {
      "title": "<h3 style=\"color: #333;\">2. GENERAL CONDITIONS</h3>",
      "content": "<p style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6;\">We reserve the right to refuse service to anyone at our discretion, for any reason, and at any time. You acknowledge that your content (excluding credit card information) may be transferred unencrypted and could involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service without our express written permission. The headings used in this agreement are for convenience only and will not limit or otherwise affect these Terms.</p>"
    },
    {
      "title": "<h3 style=\"color: #333;\">3. REQUESTS AND CONFIRMATION</h3>",
      "content": "<p style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6;\">Orders can be placed through our website, dumyumchocolates.com, at any time, Monday through Sunday, 24 hours a day, 7 days a week. Cancellation charges apply if an order is canceled after 24 hours of placement. Once an order is out for delivery, it cannot be canceled or replaced. However, DumYum Chocolates will consider the request and will respond accordingly if possible. Each order is subject to approval by DumYum Chocolates. We reserve the right to reject any order due to insufficient stock, incomplete customer information, or any other lawful reason. If there is an issue filling an order, we will notify the purchaser within 2 business days of receiving the order.</p>"
    },
    {
      "title": "<h3 style=\"color: #333;\">4. MODIFICATIONS TO THE SERVICE AND PRICES</h3>",
      "content": "<p style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6;\">Prices for our products are subject to change without prior notice. DumYum Chocolates reserves the right to modify or discontinue the Service (or any part thereof) at any time without notice. We shall not be liable to you or any third-party for any modification, price change, suspension, or discontinuance of the Service. Unless otherwise specified, all DumYum Chocolates pricing and charges are stated in INR and include 18% GST. Prices are subject to change. Shipping charges, which are the responsibility of the purchaser, are additional and vary by destination. Shipping details are available upon request from DumYum Chocolates.</p>"
    },
    {
      "title": "<h3 style=\"color: #333;\">5. Products or services</h3>",
      "content": "<p style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6;\">We strive to accurately display the colors and images of our products on the website, but we cannot guarantee whether the actual representation will be the same. We reserve the right to limit the sale of our products or services to certain individuals, geographic regions, or jurisdictions, and may do so on a case-by-case basis. Additionally, we may limit the quantities of products or services offered. Descriptions of products or pricing are subject to change without notice, and we reserve the right to discontinue any product at any time. The items display the products generally available from DumYum Chocolates. Occasionally, products may be out of stock or unavailable. Please visit our website regularly to check our new products. Some special products are unique and handmade, so they are only available in limited quantities. To confirm availability, check our website in a timely manner.</p>"
    },
    {
      "title": "<h3 style=\"color: #333;\">6. Delivery of Products</h3>",
      "content": "<p style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6;\">Ensuring the accuracy of shipping information provided by the purchaser is crucial for the proper delivery of orders and to allow DumYum Chocolates customers to enjoy our products for the full extent of their shelf life. DumYum Chocolates cannot be held responsible for incomplete or erroneous delivery instructions. After accepting an order, DumYum Chocolates will prepare and send it to the shipping service. While DumYum Chocolates can ensure delivery to most specified locations, it is the purchaser's responsibility to verify receipt with the shipping service. Failure to properly identify delivery problems to the shipping service may result in the purchaser's inability to make a successful claim. Most shipping services require a signature upon delivery. Once the product is delivered according to shipping instructions, neither DumYum Chocolates nor the shipping service can be held responsible for loss or damage caused by environmental conditions. DumYum Chocolates will not be responsible for delays caused by events beyond its control, including strikes, natural disasters, or terrorism. Shipping times may be longer during busy holiday/festival seasons (Republic Day, Rakshabandhan, Independence Day, Ganesh Chaturthi, Dussehra, Diwali, New Year, etc.).</p>"
    },
    {
      "title": "<h3 style=\"color: #333;\">7. User Comments, Feedback, and Other Submissions</h3>",
      "content": "<p style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6;\">If you send us specific submissions at our request (such as contest entries) or without a request from us, including creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate, and otherwise use in any medium any comments that you send to us.</p> <ul style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6; list-style-type: decimal; padding-left: 20px;\"> <li style=\"margin-bottom: 5px;\">Keep any comments confidential;</li> <li style=\"margin-bottom: 5px;\">Pay compensation for any comments;</li> <li style=\"margin-bottom: 5px;\">Respond to any comments.</li> </ul> <p style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6;\">We may, but have no obligation to, monitor, edit, or remove content that we determine in our sole discretion is unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene, or otherwise objectionable or violates any party's intellectual property or these Terms of Service. You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality, or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive, or obscene material, or contain any computer virus or other malware that could affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.</p>"
    },
    {
      "title": "<h3 style=\"color: #333;\">8. Warranty</h3>",
      "content": "<p style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6;\">DumYum Chocolates guarantees the quality and freshness of its products for three weeks from the time they leave our place, provided they are handled and stored as indicated on the packaging.</p> <p style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6;\">Except as outlined in this section, DumYum Chocolates does not make any express or implied representations or warranties regarding its products, including any warranties regarding the fitness of its products for a particular purpose. Any additional warranties are hereby disclaimed.</p>"
    },
    {
      "title": "<h3 style=\"color: #333;\">9. Governing Law</h3>",
      "content": "<p style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6;\">These Terms of Service and any separate agreements under which we provide you Services are governed by and construed in accordance with the laws of India, with jurisdiction in Ahmedabad, Gujarat.</p>"
    },
    {
      "title": "<h3 style=\"color: #333;\">10. Changes to Terms of Service:</h3>",
      "content": "<p style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6;\">You can always view the most current version of our Terms of Service on this page. We reserve the right, at our discretion, to update, change, or replace any part of these Terms of Service by posting updates and changes on our website. It is your responsibility to check our website regularly for changes. Your continued use of or access to our website or the Service after we post any changes to these Terms of Service constitutes your acceptance of those changes.</p>"
    },
    {
      "title": "<h3 style=\"color: #333;\">11. No Resale</h3>",
      "content": "<p style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6;\">Consumers agree that products purchased from DumYum Chocolates are for personal use (including gift-giving) and shall not be resold. Thank you for shopping with us.</p> <p style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6;\">Note: The photos of our website may not be accurate depictions of the products featured therein.</p>"
    },
    {
      "title": "<h3 style=\"color: #333;\">12. Contact Information</h3>",
      "content": "<p style=\"text-align: justify; color: #666; font-size: 16px; line-height: 1.6;\">Questions about the Terms of Service should be sent to us at </p>"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
    

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="wrapper w-4/5">
        <div className='flex justify-center py-4'><h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1></div>
        
        <div className="container">
          {faqData.map((item, index) => (
            <div className="question border-b border-gray-300 mb-4" key={index} onClick={() => toggleAccordion(index)}>
              <div className="flex items-center justify-between py-4 px-6 cursor-pointer">
                <span className="text-lg font-semibold"dangerouslySetInnerHTML={{ __html: item.title }}></span>
                <span className={`icon ${activeIndex === index ? 'transform rotate-45' : ''}`}>&#43;</span>
              </div>
              <div className={`answercont transition-max-height duration-300 overflow-hidden ${activeIndex === index ? 'max-h-full' : 'max-h-0'}`}>
                <div className="answer p-6" dangerouslySetInnerHTML={{ __html: item.content }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermConditions;
