import React from 'react';
import { FaEye, FaBullseye, FaStar } from 'react-icons/fa';

const VisionMissionValues = () => {
  return (
    <div className="p-8 bg-primary">
      <h2 className="text-3xl font-semibold mb-8 text-center  text-yellow-400 px-6">About Us</h2>
      <h6 className="text-xl font-txt mb-6 text-center">
        NGS Global Trading
        <br />
        NGS Global Trading is a private limited company registered under the laws of Ethiopia, located in Mekelle, Tigray region.
        Established in 2024 by two Ethiopian shareholders with an initial capital of 500,000 birr, NGS Global Trading focuses on importing
        high-value products, including industry materials, construction supplies, foodstuffs, chemicals, and stationery, for its own operations.
        The company is committed to contributing to the country's development by providing quality products and services directly to consumers.
        <br /><br />
        Mr. Nigus Teklay, the founder and general manager, brings nearly 10 years of experience in government communication, construction, logistics,
        and human resources. With five years of business experience in the import and electromechanical sectors as a general manager, Mr. Teklay has 
        built a reputation for excellence. Under his leadership, NGS Global Trading is poised for growth, leveraging his extensive experience and connections.
      </h6>
      
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Vision Section */}
        <div className="flex-1 p-4 border border-gray-200 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaEye className="text-yellow-400 mr-4 text-3xl" />
            <h3 className="text-2xl font-semibold">Vision</h3>
          </div>
          <p className="text-gray-700">
            To become a leading company in Ethiopia, recognized for excellence in importing and exporting high-quality products,
            ensuring sustainable growth and creating value for our stakeholders.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex-1 p-4 border border-gray-200 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaBullseye className="text-yellow-400 mr-4 text-3xl" />
            <h3 className="text-2xl font-semibold">Mission</h3>
          </div>
          <p className="text-gray-700">
            Our mission is to efficiently import and export quality products that meet the evolving needs of the Ethiopian market. 
            We aim to strengthen our internal operations and enhance our market presence by leveraging innovation, maintaining high ethical standards, 
            and fostering strong relationships with our partners and customers. We are committed to sustainable practices and making a positive impact 
            on the communities we serve.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="flex-1 p-4 border border-gray-200 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaStar className="text-yellow-400 mr-4 text-3xl" />
            <h3 className="text-2xl font-semibold">Core Values</h3>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>Integrity: Commitment to honesty, transparency, and ethical behavior in all dealings.</li>
            <li>Customer Focus: Dedication to understanding and meeting the needs of our customers with high-quality products.</li>
            <li>Innovation: Embracing creativity and continuous improvement to excel in the competitive market.</li>
            <li>Excellence: Striving for excellence in every aspect of our business operations and customer service.</li>
            <li>Teamwork: Promoting collaboration and respect among colleagues, fostering a supportive work environment.</li>
            <li>Sustainability: Acting responsibly towards the environment and society, promoting sustainable practices.</li>
            <li>Accountability: Taking responsibility for our actions and decisions, and delivering on our commitments.</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default VisionMissionValues;
