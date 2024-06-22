import React from 'react';
import img from "../../assets/banner/shippment.jpg";

const Banner2 = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute inset-0 bg-red-800 bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
        <h3 className="text-lg mb-2">WE PROVIDE</h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">THE BEST SEA AND AIR FREIGHT SERVICES</h1>
        <p className="text-xl md:text-2xl mb-6">For Booking Your Shipping From any Country</p>
        <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">CONTACT US</a>
      </div>
    </div>
  );
};

export default Banner2;
