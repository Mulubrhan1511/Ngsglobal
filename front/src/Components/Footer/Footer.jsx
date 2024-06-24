// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-red-600 font-bold text-2xl mb-4">W SHIPPING</h2>
          <p className="text-gray-400 mb-4">
            It was popularised in the 1960s with the release of Letraset sheets containing.
          </p>
          <div className="mb-4">
            <p><span className="font-bold">Phone:</span> +88 01911 837404</p>
            <p><span className="font-bold">Email:</span> info@companyname.com</p>
            <p><span className="font-bold">Fax:</span> +88 02 123456</p>
          </div>
          <div className="flex space-x-2">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xl mb-4">QUICK LINKS</h3>
          <ul>
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
        <div>
          <h3 className="font-bold text-xl mb-4">USEFUL LINKS</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Create Shipping</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Tracking</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Shipment History</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Typography</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Button Accordion</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Tracking Result</a></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="font-bold text-xl mb-4">OPENING HOURS</h3>
          <p className="text-gray-400 mb-4">Mon to Fri: 09:30AM to 05:30PM</p>
          <p className="text-gray-400 mb-4">Sun: Closed</p>
          <form>
            <input type="email" placeholder="Enter your email" className="p-2 w-full mb-2 bg-gray-800 border border-gray-700" />
            <button type="submit" className="p-2 w-full bg-red-600 text-white">Submit</button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8">
        <p>COPYRIGHT © 2017</p>
        <p>DESIGN & DEVELOPMENT BY harifSite</p>
      </div>
    </footer>
  );
};

export default Footer;
