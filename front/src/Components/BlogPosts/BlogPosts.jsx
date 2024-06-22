import React from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import img1 from "../../assets/BlogPosts/ocean_freight_image.jpeg";
import img2 from "../../assets/BlogPosts/truck_image.jpg";
import img3 from "../../assets/BlogPosts/plane_image.jpg";

const blogPosts = [
  {
    title: "SHIPPING CONTAINER ALL INTERNATIONAL TRANSPORT",
    date: "18 March 2017",
    author: "Admin",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor aenean massa.",
    image: img1,
    link: "#"
  },
  {
    title: "LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING.",
    date: "18 March 2017",
    author: "Admin",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor aenean massa.",
    image: img2,
    link: "#"
  },
  {
    title: "ALL SHIPPING CONTAINER ARE INTERNATIONAL TRANSPORT",
    date: "18 March 2017",
    author: "Admin",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor aenean massa.",
    image: img3,
    link: "#"
  }
];

const BlogPosts = () => {
  return (
    <div className="text-center p-8 bg-white">
      <h2 className="text-3xl font-semibold mb-4">LATEST BLOG POST</h2>
      <p className="mb-8 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="flex flex-wrap justify-center gap-8">
        {blogPosts.map((post, index) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden" key={index}>
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center text-gray-600 mb-2">
                <FaCalendarAlt className="mr-2" />
                <span>{post.date}</span>
                <FaUser className="ml-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <a href={post.link} className="text-red-600 font-semibold hover:underline">READ MORE</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPosts;
