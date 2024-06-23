import React from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import img1 from "../../assets/BlogPosts/ocean_freight_image.jpeg";
import img2 from "../../assets/BlogPosts/truck_image.jpg";
import img3 from "../../assets/BlogPosts/plane_image.jpg";

const blogPosts = [
  {
    title: "CONSTRUCTION MATTERIAL",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor aenean massa.",
    image: img1,
    link: "#"
  },
  {
    title: "Car spare",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor aenean massa.",
    image: img2,
    link: "#"
  },
  {
    title: "Electronics device",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor aenean massa.",
    image: img3,
    link: "#"
  }
];

const BlogPosts = () => {
  return (
    <div className="text-center p-8 bg-white">
      <h2 className="text-3xl font-semibold mb-4">Import items</h2>
      <p className="mb-8 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="flex flex-wrap justify-center gap-8">
        {blogPosts.map((post, index) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden" key={index}>
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center text-gray-600 mb-2">
             
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPosts;
