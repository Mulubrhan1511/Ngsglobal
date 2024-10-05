import React, { useState } from 'react';
import img1 from "../../assets/BlogPosts/ocean_freight_image.jpg";
import img2 from "../../assets/BlogPosts/foodstafe.jpeg";
import img3 from "../../assets/BlogPosts/chemicals_imports.jpg";
import img4 from "../../assets/BlogPosts/alumunium.jpeg"; // Placeholder, update with actual image path
import img5 from "../../assets/BlogPosts/rebar_steel_image.jpg"; // Placeholder, update with actual image path
import img6 from "../../assets/BlogPosts/timber_image.jpeg"; // Placeholder, update with actual image path
import Modal from './Modal';

const blogPosts = [
  {
    title: "Aluminum Billet",
    description: "We import high-quality aluminum billets suitable for various industrial applications, ensuring durability and compliance with international standards.",
    image: img4,
    link: "/aluminum-billet"
  },
  {
    title: "Rebar",
    description: "Strengthen your construction projects with our premium rebar imports. We offer various grades and sizes, sourced from reputable suppliers to ensure consistent quality.",
    image: img5,
    link: "/rebar"
  },
  {
    title: "Chemicals",
    description: "Streamline your operations with our diverse selection of imported chemicals. We provide essential compounds and formulations backed by exceptional customer service.",
    image: img3,
    link: "/chemicals"
  },
  {
    title: "Timber",
    description: "Choose from our extensive selection of imported timber, suitable for both structural and decorative purposes, sourced from sustainable forests.",
    image: img6,
    link: "/timber"
  },
  {
    title: "Food Items",
    description: "Enhance your culinary creations with our premium food imports, including oil, sugar, wheat, and other essential ingredients to inspire your kitchen.",
    image: img2,
    link: "/food-items"
  },
  {
    title: "Raw Materials",
    description: "Access a variety of raw materials essential for your business operations, ensuring quality and reliability in your supply chain.",
    image: img1,
    link: "/raw-materials"
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
        At NGS Global Trading, we import a diverse range of essential goods, including aluminum billets, rebar, chemicals, raw materials, timber, and food items like oil, sugar, and wheat. We value the importance of providing high-quality import items to support the diverse needs of businesses like yours.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {blogPosts.map((post, index) => (
          <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105" key={index}>
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.description}</p>
              
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