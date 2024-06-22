import React from 'react';
import { FaHandshake, FaLock, FaThumbsUp, FaMapMarkerAlt } from 'react-icons/fa';
import img from "../../assets/WhyChooseUs/handshake.jpeg";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-white">
      <div className="w-full md:w-1/2 p-4">
        <img
          src={img}
          alt="Handshake"
          className="w-full h-full object-cover rounded-md shadow-md"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-4">WHY CHOOSE US?</h2>
        <p className="text-gray-700 mb-4">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
        </p>
        <p className="text-gray-700 mb-4">
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
        </p>
        <a href="#readmore" className="text-red-600 font-semibold hover:underline">READ MORE</a>
      </div>
      <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <FaHandshake className="text-red-600 text-3xl" />
          <span className="text-lg font-semibold">WE ARE TRUSTED</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaLock className="text-red-600 text-3xl" />
          <span className="text-lg font-semibold">THE BEST SECURITY</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaThumbsUp className="text-red-600 text-3xl" />
          <span className="text-lg font-semibold">100% GUARANTEE</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-red-600 text-3xl" />
          <span className="text-lg font-semibold">QUICK LOCATION</span>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
