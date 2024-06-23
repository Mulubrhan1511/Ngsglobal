import React from 'react';
import img1 from "../../assets/service/img1.jpg"
import img2 from "../../assets/service/img2.jpeg"
import img3 from "../../assets/service/img3.png"
import img4 from "../../assets/service/img4.jpg"
import img6 from "../../assets/service/img6.png"



const services = [
  {
    title: "Arabica coffee",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: img1,
    link: "#"
  },
  {
    title: "oils seed",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: img2,
    link: "#"
  },
  {
    title: "sesema",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: img3,
    link: "#"
  },
    {
    title: "mustard",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: img4,
    link: "#"
  },
  {
    title: "sunflower & cereal crops",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: img2,
    link: "#"
  },
  {
    title: "pulses",
    description: " PEAS, CHICKPEAS AND SOYA BEANS ",
    image: img6,
    link: "#"
  },
];

const Services = () => {
  return (
    <div className="text-center  bg-white pb-28">
      <h2 className="text-3xl font-semibold pt-16">Export items</h2>
      <p className="mb-8 text-gray-600">We exports Agricultural products like </p>
      <div className="flex flex-wrap justify-center gap-10 pt-10">
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
