import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="p-8 bg-primary">
      <h2 className="text-3xl font-semibold mb-6 text-center text-white">WE ARE ALWAYS WITH YOU :)</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h3 className="text-xl font-semibold mb-4 text-white">QUICK FEEDBACK FORM</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-lg">
            <input type="text" placeholder="Your Full Name" className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" />
            <input type="text" placeholder="Company" className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" />
            <input type="email" placeholder="Email" className="border border-gray-300 p-3 rounded-md md:col-span-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
            <input type="text" placeholder="Phone Number" className="border border-gray-300 p-3 rounded-md md:col-span-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
            <textarea placeholder="Message" className="border border-gray-300 p-3 rounded-md md:col-span-2 focus:outline-none focus:ring-2 focus:ring-red-600" rows="4"></textarea>
            <button type="submit" className="bg-yellow-400 text-white p-3 rounded-md md:col-span-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">Submit</button>
          </form>
        </div>
        <div className="md:w-1/3 flex flex-col gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">CORPORATE OFFICE</h4>
            <p className="flex items-center mb-3 text-gray-700"><FaMapMarkerAlt className="text-yellow-400 mr-3 text-xl" /> Tigray, Mekelle, near Romanat Square</p>
            <p className="flex items-center mb-3 text-gray-700"><FaPhoneAlt className="text-yellow-400 mr-3 text-xl" /> Telephone No: +251 932091406 | 921323833</p>
            <p className="flex items-center text-gray-700"><FaEnvelope className="text-yellow-400 mr-3 text-xl" /> ngsglobal2024@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
