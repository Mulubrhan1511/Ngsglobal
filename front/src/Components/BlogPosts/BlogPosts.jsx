import React, { useState } from 'react';
import img1 from "../../assets/BlogPosts/ocean_freight_image.jpg";
import img2 from "../../assets/BlogPosts/foodstafe.jpeg";
import img3 from "../../assets/BlogPosts/chemicals_imports.jpg";
import img4 from "../../assets/BlogPosts/aluminum_image.jpg"; // Placeholder, update with actual image path
import img5 from "../../assets/BlogPosts/rebar_steel_image.jpg"; // Placeholder, update with actual image path
import img6 from "../../assets/BlogPosts/timber_image.jpeg"; // Placeholder, update with actual image path
import Modal from './Modal';

const blogPosts = [
  {
    title: "Copper Wire",
    description: "Maintain the integrity of your electrical and construction projects with our wide range of copper wire imports. We've established strong relationships with trusted global suppliers to source the finest copper wire, ensuring consistent quality and reliability in your supply chain. From various grades to custom specifications, our copper wire selection is designed to meet your unique requirements.",
    image: img1,
    link: "/copper-wire"
  },
  {
    title: "Food Staff",
    description: "Enhance your culinary masterpieces with our premium food imports. Whether you're a professional chef or a passionate home cook, our range of specialty ingredients, gourmet delights, and essential pantry staples will inspire your culinary creations. Trust in our unwavering commitment to quality and safety as we bring the finest global flavors directly to your kitchen, ensuring that every dish you prepare is infused with excellence.",
    image: img2,
    link: "/food-staff"
  },
  {
    title: "Chemicals",
    description: "Streamline your chemical-based operations with our diverse selection of imported compounds and formulations. Whether you require specialized solvents, catalysts, or other essential chemicals, our team is dedicated to providing you with the products you need, backed by exceptional customer service and technical support. Trust us to be your reliable partner in the chemical industry.",
    image: img3,
    link: "/chemicals"
  },
  {
    title: "Aluminum",
    description: "Discover our high-quality aluminum imports, perfect for a wide range of industrial and construction applications. Our aluminum products are sourced from leading global suppliers, ensuring durability, reliability, and compliance with international standards.",
    image: img4,
    link: "/aluminum"
  },
  {
    title: "Rebar Steel",
    description: "Strengthen your construction projects with our premium Rebar Steel imports. We offer a variety of grades and sizes, all sourced from reputable global suppliers to ensure consistent quality and structural integrity.",
    image: img5,
    link: "/rebar-steel"
  },
  {
    title: "Timber",
    description: "Choose from our extensive selection of imported timber, suitable for both structural and decorative purposes. Our timber products are sourced from sustainable forests and are processed to meet the highest quality standards.",
    image: img6,
    link: "/timber"
  }
];

const BlogPosts = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="text-center p-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-yellow-100 mb-4">Import Items</h2>
      <p className="mb-12 text-gray-600 text-lg max-w-3xl mx-auto">
        At NGS Global, we value the importance of having access to high-quality import items to support the diverse needs of businesses like yours. Whether you're in search of essential raw materials, specialized ingredients, or essential chemical compounds, we've got you covered.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {blogPosts.map((post, index) => (
          <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105" key={index}>
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <button
                onClick={() => openModal(post)}
                className="text-red-600 font-semibold hover:underline"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedPost && (
        <Modal isOpen={!!selectedPost} onClose={closeModal} content={selectedPost} />
      )}
    </div>
  );
}

export default BlogPosts;
