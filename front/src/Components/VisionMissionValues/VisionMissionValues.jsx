import React from 'react';
import { FaEye, FaBullseye, FaStar } from 'react-icons/fa';

const VisionMissionValues = () => {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-3xl font-semibold mb-8 text-center">Our Vision, Mission, and Core Values</h2>
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Vision Section */}
        <div className="flex-1 p-4 border border-gray-200 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaEye className="text-red-600 mr-4 text-3xl" />
            <h3 className="text-2xl font-semibold">Vision</h3>
          </div>
          <p className="text-gray-700">
            Our vision is to become the leading provider of logistics solutions, renowned for our dedication to innovation, excellence, and unparalleled customer service.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex-1 p-4 border border-gray-200 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaBullseye className="text-red-600 mr-4 text-3xl" />
            <h3 className="text-2xl font-semibold">Mission</h3>
          </div>
          <p className="text-gray-700">
            Our mission is to deliver reliable, efficient, and tailored logistics solutions that exceed our clients' expectations and drive their business success.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="flex-1 p-4 border border-gray-200 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaStar className="text-red-600 mr-4 text-3xl" />
            <h3 className="text-2xl font-semibold">Core Values</h3>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>Integrity: We adhere to the highest standards of honesty and ethical conduct.</li>
            <li>Customer Focus: Our clients are at the heart of everything we do.</li>
            <li>Innovation: We constantly seek new ways to improve and evolve our services.</li>
            <li>Excellence: We strive for excellence in every aspect of our business.</li>
            <li>Teamwork: We work together, across boundaries, to meet the needs of our customers.</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default VisionMissionValues;
