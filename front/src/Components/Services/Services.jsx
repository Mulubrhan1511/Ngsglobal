import React from 'react';
import img1 from "../../assets/service/img1.jpg"
import img2 from "../../assets/service/img2.jpeg"
import img3 from "../../assets/service/img3.png"


const services = [
  {
    title: "OCEAN FREIGHT SHIPPING",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: img1,
    link: "#"
  },
  {
    title: "AIR FREIGHT SHIPPING",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: img2,
    link: "#"
  },
  {
    title: "CAR SHIPPING",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: img3,
    link: "#"
  }
];

const Services = () => {
  return (
    <div className="text-center  bg-white pb-28">
      <h2 className="text-3xl font-semibold pt-16">OUR SERVICES</h2>
      <p className="mb-8 text-gray-600">we NGS global are the revival of new area .</p>
      <div className="flex flex-wrap justify-center gap-8 pt-10">
        {services.map((service, index) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:-translate-y-2" key={index}>
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-red-600 mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <a href={service.link} className="text-red-600 font-semibold hover:underline">READ MORE</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
