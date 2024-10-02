import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="p-8  from-blue-700 to-blue-900">
      <h2 className="text-3xl font-semibold mb-6 text-center text-white">WE ARE ALWAYS WITH YOU :)</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Quick Feedback Form */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">QUICK FEEDBACK FORM</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Full Name" className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="text" placeholder="Company" className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="email" placeholder="Email" className="border border-gray-300 p-3 rounded-md md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="text" placeholder="Phone Number" className="border border-gray-300 p-3 rounded-md md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea placeholder="Message" className="border border-gray-300 p-3 rounded-md md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4"></textarea>
            <button type="submit" className="bg-blue-600 text-white p-3 rounded-md md:col-span-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
          </form>
        </div>

        {/* Center Divider (Updated) */}
        <div className="hidden md:flex items-center justify-center relative">
          <div className="absolute w-1 bg-blue-600 h-full"></div>
          
        </div>

        {/* Contact Information */}
        <div className="md:w-1/2 flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4 text-blue-800">CONTACT INFORMATION</h4>
          <p className="flex items-center mb-3 text-gray-700"><FaMapMarkerAlt className="text-blue-800 mr-3 text-xl" /> Mekelle, Kebele 17</p>
          <p className="flex items-center mb-3 text-gray-700"><FaPhoneAlt className="text-blue-800 mr-3 text-xl" /> Telephone No: +251 11 70 35 05 | +251 21 32 38 33</p>
          <p className="flex items-center text-gray-700"><FaEnvelope className="text-blue-800 mr-3 text-xl" /> nigusteklay3@gmail.com</p>
          <p className="flex items-center text-gray-700"><FaEnvelope className="text-blue-800 mr-3 text-xl" /> www.darmacapital.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
