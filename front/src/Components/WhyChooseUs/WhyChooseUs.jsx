import React, { useState } from 'react';
import { FaHandshake, FaLock, FaThumbsUp, FaMapMarkerAlt } from 'react-icons/fa';
import img from "../../assets/WhyChooseUs/handshake.jpeg";

const WhyChooseUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-primary">
      <div className="w-full md:w-1/2 p-4">
        <img
          src={img}
          alt="Handshake"
          className="w-full h-full object-cover rounded-md shadow-md"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-4 text-green-50">WHY CHOOSE US?</h2>
        <p className="text-gray-700 mb-4">
          At NGS Global Trading, we excel in providing comprehensive import and export services that connect businesses to international markets.
        </p>
        <p className="text-gray-700 mb-4">
          Our extensive network and industry expertise ensure that your products reach their destination efficiently and safely. 
          Choosing us means partnering with a dedicated team that prioritizes your needs, offering personalized solutions tailored to your business requirements. 
          With a commitment to transparency and reliability, we facilitate global trade, allowing you to focus on growing your business while we manage the logistics.
        </p>
        <button 
          onClick={handleOpen} 
          className="text-green-400 font-semibold hover:underline"
        >
          READ MORE
        </button>
      </div>
      <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <FaHandshake className="text-green-400 text-3xl" />
          <span className="text-lg font-semibold">WE ARE TRUSTED</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaLock className="text-green-400 text-3xl" />
          <span className="text-lg font-semibold">THE BEST SECURITY</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaThumbsUp className="text-green-400 text-3xl" />
          <span className="text-lg font-semibold">100% GUARANTEE</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-green-400 text-3xl" />
          <span className="text-lg font-semibold">QUICK LOCATION</span>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white w-full md:w-3/4 lg:w-1/2 p-6 rounded-lg shadow-lg max-h-screen overflow-y-auto">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-green-600 hover:text-green-800 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <img
              src={img}
              alt="Why Choose Us"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-4">
              We offer exceptional value through our unwavering commitment to quality, security, and customer satisfaction. 
              Here’s why we stand out:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="mb-2">Trusted Partnerships: We build lasting relationships based on trust and reliability.</li>
              <li className="mb-2">Top-Notch Security: Our operations are safeguarded by the highest security standards.</li>
              <li className="mb-2">Guaranteed Quality: We ensure that our services and products meet the highest quality standards.</li>
              <li className="mb-2">Efficient Location Services: Our location services are streamlined for quick and easy access.</li>
            </ul>
            <p className="text-gray-700">
              With our expertise and dedication, we aim to exceed your expectations and deliver exceptional results. Choose us for a reliable and secure experience.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyChooseUs;