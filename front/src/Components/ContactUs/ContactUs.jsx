import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope } from 'react-icons/fa';
import img from "../../assets/ContactUs/contactus.jpg";

const ContactUs = () => {
  return (
    <div className="p-8 bg-primary">
      <h2 className="text-3xl font-semibold mb-4">WE ARE ALWAYS WITH YOU :)</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <img src={img} alt="Office supplies" className="w-full h-48 object-cover mb-4 rounded-md shadow-md" />
          <h3 className="text-xl font-semibold mb-4">QUICK FEEDBACK FORM</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Full Name" className="border p-2 rounded-md" />
            <input type="text" placeholder="Company" className="border p-2 rounded-md" />
            <input type="email" placeholder="Email" className="border p-2 rounded-md md:col-span-2" />
            <input type="text" placeholder="Phone Number" className="border p-2 rounded-md md:col-span-2" />
            <textarea placeholder="Message" className="border p-2 rounded-md md:col-span-2" rows="4"></textarea>
            <button type="submit" className="bg-red-600 text-white p-2 rounded-md md:col-span-2 hover:bg-red-700">Submit</button>
          </form>
        </div>
        <div className="md:w-1/3 flex flex-col gap-4">
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h4 className="text-lg font-semibold mb-2">CORPORATE OFFICE</h4>
            <p className="flex items-center mb-2"><FaMapMarkerAlt className="text-red-600 mr-2" /> Tigray, mekelle, near to romanat square</p>
            <p className="flex items-center mb-2"><FaPhoneAlt className="text-red-600 mr-2" /> Telephone No:+251 932091406|921323833</p>
            
            <p className="flex items-center"><FaEnvelope className="text-red-600 mr-2" /> ngsglobal2024@gmail.com</p>
          </div>
          {/* <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h4 className="text-lg font-semibold mb-2">SECTION OFFICE</h4>
            <p className="flex items-center mb-2"><FaMapMarkerAlt className="text-red-600 mr-2" /> Address: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p className="flex items-center mb-2"><FaPhoneAlt className="text-red-600 mr-2" /> Telephone No: +88 01711 123456</p>
            <p className="flex items-center mb-2"><FaFax className="text-red-600 mr-2" /> Fax No: +88 01711 123456</p>
            <p className="flex items-center"><FaEnvelope className="text-red-600 mr-2" /> Email: web24service@gmail.com</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
