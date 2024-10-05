import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a4275] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Company Info */}
        <div className="md:col-span-1">
          <h2 className="text-yellow-400 text-3xl font-bold mb-4">NGS GLOBAL TRADING</h2>
          <div className="mb-4">
            <p><span className="font-semibold">Phone:</span> +251 91 170 3505</p>
            <p><span className="font-semibold">Email:</span> ngsglobal2024@gmail.com</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><FaFacebookF className="text-xl" /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><FaTwitter className="text-xl" /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><FaInstagram className="text-xl" /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><FaLinkedinIn className="text-xl" /></a>
          </div>
        </div>

        {/* Services Offered */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition">Import Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition">Export Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition">Customs Clearance</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition">Logistics Management</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition">Supply Chain Solutions</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 mb-2">We are a new company specializing in the import and export of goods, ensuring quality and efficiency.</p>
          <p className="text-gray-400 mb-4">Our mission is to connect global markets and provide seamless trade solutions.</p>
        </div>

        {/* Opening Hours */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
          <p className="text-gray-400 mb-2">Mon to Fri: 09:30 AM to 05:30 PM</p>
          <p className="text-gray-400 mb-4">Sun: Closed</p>
          <form>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 w-full mb-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400"
            />
            <button 
              type="submit" 
              className="w-full bg-yellow-400 text-white p-2 rounded-md hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8">
        <p>COPYRIGHT © {new Date().getFullYear()} NGS GLOBAL TRADING. ALL RIGHTS RESERVED.</p>
        <p className="text-gray-500">Design & Development by HarifSite</p>
      </div>
    </footer>
  );
};

export default Footer;