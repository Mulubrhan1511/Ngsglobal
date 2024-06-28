import React from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import img1 from "../../assets/BlogPosts/ocean_freight_image.jpeg";
import img2 from "../../assets/BlogPosts/truck_image.jpg";
import img3 from "../../assets/BlogPosts/plane_image.jpg";

const blogPosts = [
  {
    title: "Copper wire",
    description: "Maintain the integrity of your electrical and construction projects with our wide range of copper wire imports. We've established strong relationships with trusted global suppliers to source the finest copper wire, ensuring consistent quality and reliability in your supply chain. From various grades to custom specifications, our copper wire selection is designed to meet your unique requirements..",
    image: img1,
    link: "#"
  },
  {
    title: "Food staff",
    description: "Elevate your culinary creations with our extensive range of food-related imports. From specialty ingredients and gourmet items to essential pantry staples, our food staff selection caters to the discerning tastes of both professional chefs and passionate home cooks. Rely on our commitment to quality and safety to bring the best global flavors to your kitchen.",
    image: img2,
    link: "#"
  },
  {
    title: "Chemicals",
    description: "Streamline your chemical-based operations with our diverse selection of imported compounds and formulations. Whether you require specialized solvents, catalysts, or other essential chemicals, our team is dedicated to providing you with the products you need, backed by exceptional customer service and technical support. Trust us to be your reliable partner in the chemical industry.",
    image: img3,
    link: "#"
  }
];

const BlogPosts = () => {
  return (
    <div className="text-center p-8 bg-white">
      <h2 className="text-3xl font-semibold mb-4">Import items</h2>
      <p className="mb-8 text-gray-600">At NGS global , we give value the importance of having access to high-quality import items to support the diverse needs of businesses like yours. Whether youre in search of essential raw materials, specialized ingredients, or essential chemical compounds, we've got you covered..</p>
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
