import React from 'react';
import { FaEye, FaBullseye, FaStar } from 'react-icons/fa';

const VisionMissionValues = () => {
  return (
    <div className="p-8 bg-primary">
      <h2 className="text-3xl font-semibold mb-8 text-center">About us</h2>
      <h6 className="text-xl font-txt mb-6 text-center">NGS GOLBAL TRADING 
NGS Global Trading is a private limited company registered under the law of the country in Mekelle, Tigray region, Ethiopia.
NGS Global Trading PLC was founded in 2024 by two Ethiopian share holders with an initial capital of 500000 birr. It is a new founding
 company focused on import industry materials, construction materials, food staff, chemicals, stationery, and other materials that have high 
 value in the countrys development.
Mr. Nigus Teklay, the company founder and general manager, has around 10 years of experience in government communication, construction, l
ogistics, and human resources. And he has five years of experience in business, practically in the import and electromechanical areas
of the private sector, as the general manager of two private companies. Mr. Nigus Teklay was the best project manager, so NGS Global Trading 
has a chance to be raised by the founder and general managers experiences and connections.
</h6>
      
      
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Vision Section */}
        <div className="flex-1 p-4 border border-gray-200 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaEye className="text-red-600 mr-4 text-3xl" />
            <h3 className="text-2xl font-semibold">Vision</h3>
          </div>
          <p className="text-gray-700">
          To be a leading global trading company renowned for excellence, innovation, and integrity 
          in delivering high-quality products and services, fostering sustainable growth, and creating 
          value for our stakeholders
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex-1 p-4 border border-gray-200 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaBullseye className="text-red-600 mr-4 text-3xl" />
            <h3 className="text-2xl font-semibold">Mission</h3>
          </div>
          <p className="text-gray-700">
          To consistently provide superior products and services that meet the evolving needs of our customers worldwide. 
          To build and maintain strong, mutually beneficial relationships with our partners, suppliers, and customers. 
          To embrace innovation and leverage technology to enhance our operational efficiency and market reach. To operate
           with the highest standards of ethics, transparency, and corporate governance. To contribute positively to the communities 
           we serve and promote sustainable and environmentally responsible practices. To foster a dynamic and inclusive work environment 
           that attracts, develops, and retains talented individuals.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="flex-1 p-4 border border-gray-200 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaStar className="text-red-600 mr-4 text-3xl" />
            <h3 className="text-2xl font-semibold">Core Values</h3>
          {/* <p className="text-gray-700">
          The core values of NGS Global Trading plc typically reflect the principles and beliefs that
           guide their operations and interactions. Here are some common core values of NGS Global Trading plc:
            </p> */}

          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>Integrity:Commitment to honesty, transparency, and ethical behavior in all dealings.</li>
            <li> Customer Focus: Dedication to understanding and meeting the needs of customers with high-quality products and services</li>
            <li> Innovation: Embracing creativity and continuous improvement to stay ahead in a competitive global market.</li>
            <li> Excellence: Striving for excellence in every aspect of business operations and customer service.</li>
            <li>Teamwork: Collaboration and respect among colleagues, fostering a supportive and inclusive work environment.</li>
            <li>Sustainability: Acting responsibly towards the environment and society, promoting sustainable practices.</li>
            <li>Accountability: Taking responsibility for actions and decisions, delivering on commitments.</li>


          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default VisionMissionValues;
