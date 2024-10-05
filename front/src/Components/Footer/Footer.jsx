import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../../assets/Navbar/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-white p-10 font-[sans-serif] tracking-wide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:flex lg:items-center">
          <a href="javascript:void(0)">
            <img src={Logo} alt="logo" className="w-52" />
          </a>
        </div>

        <div className="lg:flex lg:items-center">
          <ul className="flex space-x-6">
            <li>
              <a href="javascript:void(0)">
                <FaFacebookF className="fill-gray-300 hover:fill-white w-7 h-7" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <FaTwitter className="fill-gray-300 hover:fill-white w-7 h-7" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <FaInstagram className="fill-gray-300 hover:fill-white w-7 h-7" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <FaLinkedinIn className="fill-gray-300 hover:fill-white w-7 h-7" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
          <ul className="space-y-4">
            <li>
              <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">Email: ngsglobal2024@gmail.com</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">Phone: +251 91 170 3505</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">Address: Mekelle, Ethiopia</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-white">Information</h4>
          <ul className="space-y-4">
            <li>
              <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">About Us</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">Services</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">Terms of Service</a>
            </li>
          </ul>
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