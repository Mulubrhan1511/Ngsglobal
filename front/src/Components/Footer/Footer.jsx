// Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Company Info */}
        <div className="md:col-span-1">
          <h2 className="text-red-600 text-3xl font-bold mb-4">NGS GLOBAL TRADING</h2>
          <div className="mb-4">
            <p><span className="font-semibold">Phone:</span> +251 932091406 | 921323833</p>
            <p><span className="font-semibold">Email:</span> ngsglobal2024@gmail.com</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF className="text-xl" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter className="text-xl" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram className="text-xl" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn className="text-xl" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Company Overview</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Our Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Media & Publications</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Freight Gallery</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Image Gallery</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Create Shipping</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Tracking</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Shipment History</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Typography</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Button Accordion</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Tracking Result</a></li>
          </ul>
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
              className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition"
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
