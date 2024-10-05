import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white rounded-lg py-6 px-10 pb-12 p-16">
      <div className="grid lg:grid-cols-3 items-center">
        <div className="grid sm:grid-cols-2 gap-4 z-20 relative lg:left-16 max-lg:px-4">
          <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
            <FaMapMarkerAlt className="w-7 fill-blue-600" />
            <h4 className="text-gray-800 text-base font-bold mt-4">Visit office</h4>
            <p className="text-sm text-gray-600 mt-2">Mekelle, Ethiopia</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
            <FaPhoneAlt className="w-7 fill-blue-600" />
            <h4 className="text-gray-800 text-base font-bold mt-4">Call us</h4>
            <p className="text-sm text-gray-600 mt-2">+251 91 170 3505</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
            <FaEnvelope className="w-7 fill-blue-600" />
            <h4 className="text-gray-800 text-base font-bold mt-4">Email us</h4>
            <p className="text-sm text-gray-600 mt-2">ngsglobal2024@gmail.com</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
            <FaEnvelope className="w-7 fill-blue-600" />
            <h4 className="text-gray-800 text-base font-bold mt-4">Fax</h4>
            <p className="text-sm text-gray-600 mt-2">+251 91 170 3505</p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-[#0a4275] rounded-lg sm:p-10 p-4 z-10 max-lg:-order-1 max-lg:mb-8">
          <h2 className="text-3xl text-white text-center font-bold mb-6">Contact us</h2>
          <form>
            <div className="max-w-md mx-auto space-y-3">
              <input type='text' placeholder='Name'
                className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none" />
              <input type='email' placeholder='Email'
                className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none" />
              <input type='text' placeholder='Phone No.'
                className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none" />
              <textarea placeholder='Message' rows="6"
                className="w-full bg-gray-100 rounded-lg px-6 text-sm outline-none" />
              <button type="submit" className="w-full bg-blue-600 text-white rounded-lg py-3">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <div className="pb-8" /> {/* Added padding at the bottom */}
    </div>
  );
};

export default ContactUs;