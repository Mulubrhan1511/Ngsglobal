import React from 'react';
import { FaEye, FaBullseye, FaStar } from 'react-icons/fa';

const VisionMissionValues = () => {
  return (
    <div className="p-8 bg-primary text-white">
      <h2 className="text-3xl font-semibold mb-8 text-center">About Us</h2>
      <p className="text-xl font-primary mb-6 text-left">
        NGS Global Trading PLC is a premier trading company founded with the vision of connecting Ethiopia’s rich resources with international markets while bringing essential goods from abroad to meet local demands. Established in 2024, the company has quickly grown to become a trusted partner in the trade of various goods, offering unmatched quality and service. Headquartered in Mekelle, Ethiopia, NGS Global Trading operates across the country, as well as in key international markets, making it a well-respected player in both import and export sectors.
        <br /><br />
        The core mission of NGS Global Trading PLC is to bridge the gap between Ethiopian agricultural producers and international buyers, while also ensuring the availability of crucial imports for the local economy. The company’s scope of work is diverse, encompassing the importation of commodities such as rebar, metal billets, sheet metal, aluminum, timber, and food products like wheat, sunflower oil, palm oil, and sugar. This wide range of goods supports various industries including construction, manufacturing, and food processing, which are vital for Ethiopia's growing economy.
        <br /><br />
        In addition to imports, NGS Global Trading is a key exporter of Ethiopia’s finest agricultural products. The company proudly supplies high-quality Ethiopian coffee, sesame, oil seeds, fruits, vegetables, and khat to markets across the globe. By connecting local farmers and producers to international customers, NGS Global is contributing to the growth and global recognition of Ethiopia’s agricultural sector. The company works diligently to uphold high standards in both sourcing and delivering products, ensuring that the unique qualities of Ethiopian produce are appreciated worldwide.
        <br /><br />
        NGS Global Trading PLC will build its foundation of trust, reliability, and efficiency because of its experienced experts. The company leverages a vast network of suppliers, manufacturers, and clients, both locally and internationally, to ensure seamless operations. Its well-organized logistics and supply chain systems enable NGS Global to meet the needs of diverse clients, from government contracts to private sector businesses. Whether dealing with construction materials for large-scale projects or agricultural exports for foreign markets, the company is recognized for its commitment to quality and timely delivery.
        <br /><br />
        Looking ahead, NGS Global Trading PLC is poised for continued growth and expansion. As it strengthens its partnerships and explores new opportunities, the company aims to play an even greater role in Ethiopia’s economic development. With its comprehensive approach to trade and a deep understanding of both local and global markets, NGS Global Trading PLC is well positioned to thrive in the years to come.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Vision Section */}
        <div className="flex-1 p-4 border border-gray-200 rounded-lg shadow-md bg-white text-black">
          <div className="flex items-center mb-4">
            <FaEye className="text-secondary mr-4 text-3xl" />
            <h3 className="text-2xl font-semibold">Vision</h3>
          </div>
          <p className="text-gray-700">
            To become a leading company in Ethiopia, recognized for excellence in importing and exporting high-quality products, ensuring sustainable growth and creating value for our stakeholders.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex-1 p-4 border border-gray-200 rounded-lg shadow-md bg-white text-black">
          <div className="flex items-center mb-4">
            <FaBullseye className="text-secondary mr-4 text-3xl" />
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
        <div className="flex-1 p-4 border border-gray-200 rounded-lg shadow-md bg-white text-black">
          <div className="flex items-center mb-4">
            <FaStar className="text-secondary mr-4 text-3xl" />
            <h3 className="text-2xl font-semibold">Core Values</h3>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>Integrity: Commitment to honesty, transparency, and ethical behavior in all dealings.</li>
            <li>Customer Focus: Dedication to understanding and meeting the needs of our customers with high-quality products.</li>
            <li>Innovation: Embracing creativity and continuous improvement to excel in the competitive market.</li>
            <li>Excellence: Striving for excellence in every aspect of our business operations and customer service.</li>
            <li>Teamwork: Promoting collaboration and respect among colleagues, fostering a supportive work environment.</li>
            <li>Sustainability: Acting responsibly towards the environment and society, promoting sustainable practices.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VisionMissionValues;
