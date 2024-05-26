
import React from 'react';

function AboutUs() {

    const DivyeshImage="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=996&t=st=1716381579~exp=1716382179~hmac=0ac3f98551146f949c25a2cba971eff4a0e5a639260d782070c192d80f15a0fc"
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      {/* About Us */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl mb-4">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">Welcome to DumYum Chocolate, where we redefine the artistry of chocolate. Established in 2024, we are driven by a vision to craft confections that embody excellence, freshness, and love in every bite. At DumYum, we believe in the power of the human touch, infusing our chocolates with emotional depth and authenticity that machine-made treats simply can't replicate.</p>
      </div>

      {/* Our Mission */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-700 leading-relaxed">Our mission is simple: to create chocolates of unparalleled quality and taste. We meticulously select only the finest ingredients, ensuring each piece is not only hygienic and fresh but also a true testament to craftsmanship. Every chocolate that leaves our kitchen is handmade with care, reflecting our commitment to excellence and dedication to delighting your senses.</p>
      </div>

      {/* Meet Our Founders */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Meet Our Founders</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Divyesh Patel */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={DivyeshImage} alt="Divyesh Patel" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800">Divyesh Patel</h4>
              <p className="mt-2 text-gray-600">Co-Founder and Branding Maestro</p>
              <p className="mt-4 text-gray-700 leading-relaxed">Divyesh Patel is the creative force behind DumYum's captivating brand identity. With expertise in design, branding, and marketing, Divyesh ensures that every aspect of DumYum, from its logo to its packaging, reflects our brand's essence.</p>
            </div>
          </div>

          {/* Foram Bhatt */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={DivyeshImage} alt="Foram Bhatt" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800">Foram Bhatt</h4>
              <p className="mt-2 text-gray-600">Co-Founder and Master Chocolatier</p>
              <p className="mt-4 text-gray-700 leading-relaxed">Foram Bhatt is the genius behind our exquisite handmade chocolates. With a passion for culinary artistry, Foram meticulously selects fresh ingredients to craft chocolates that surpass expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

// Export the component
export default AboutUs;
