import React, { useState } from 'react';
import img1 from "../../assets/BlogPosts/ocean_freight_image.jpg";
import img2 from "../../assets/BlogPosts/food_items_image.jpg";
import img3 from "../../assets/BlogPosts/chemicals_imports.jpg";
import img4 from "../../assets/BlogPosts/Aluminium.jpg";
import img5 from "../../assets/BlogPosts/rebar_steel_image.jpg";
import img6 from "../../assets/BlogPosts/timber_image.jpeg";
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
    title: "Copper Wire",
    description: "Access a variety of raw materials essential for your business operations, ensuring quality and reliability in your supply chain.",
    image: img1, // You can replace this with the appropriate image for copper wire
    link: "/raw-materials"
  }
];

const BlogPosts = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  
  // Get today's date formatted as 'DD MMMM YYYY'
  const today = new Date().toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="p-4 font-[sans-serif] bg-white"> {/* Set background to white here */}
      <div className="max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-12 text-center leading-10">
          Import Items
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          {blogPosts.map((post, index) => (
            <div className="bg-white rounded overflow-hidden" key={index}>
              <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-500 text-sm">{post.description}</p>
                <p className="text-gray-800 text-[13px] font-semibold mt-4">{today}</p>
                <a href={post.link} className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-green-500 hover:bg-green-500 text-white text-[13px]">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedPost && (
        <Modal isOpen={!!selectedPost} onClose={closeModal} content={selectedPost} />
      )}
    </div>
  );
};

export default BlogPosts;
