import React from 'react';
import img1 from "../../assets/service/img1.jpg";
import img2 from "../../assets/service/img2.jpeg";
import img3 from "../../assets/service/img3.png";
import img4 from "../../assets/service/img4.jpg";
import img6 from "../../assets/service/img6.png";

const services = [
  {
    title: "Arabica Coffee",
    description: "Our premium Arabica coffee beans are carefully sourced from the lush, high-altitude regions of Ethiopia. Known for their rich, complex flavors and smooth, balanced acidity.",
    image: img1,
    link: "#"
  },
  {
    title: "Oil Seeds",
    description: "Sourced from the fertile farms of Ethiopia, our selection of high-quality oilseeds includes a diverse range of options. These seeds are known for their versatility and nutritional benefits.",
    image: img2,
    link: "#"
  },
  {
    title: "Sesame",
    description: "Our sesame seeds are meticulously sourced from the sun-drenched fields of Ethiopia, renowned for their exceptional quality and flavor. These small, oil-rich seeds are prized for their nutty aroma and versatile culinary applications.",
    image: img3,
    link: "#"
  },
  {
    title: "Mustard",
    description: "Grown in the rich, nutrient-dense soils of Ethiopia, our mustard seeds are renowned for their pungent aroma and distinctive flavor. Available in various types such as yellow, brown, and black, perfect for condiments, marinades, and culinary preparations.",
    image: img4,
    link: "#"
  },
  {
    title: "Sunflower & Cereal Crops",
    description: "Sourced from the sunlit fields of Ethiopia, our sunflower seeds boast a rich, buttery flavor and a crunchy texture. These versatile seeds are highly valued for their oil content and are used in a wide range of food and feed applications.",
    image: img2,
    link: "#"
  },
  {
    title: "Pulses",
    description: "Our diverse selection of premium pulses includes lentils, chickpeas, mung beans, and pigeon peas. Grown in Ethiopia's nutrient-rich soils, these protein-packed legumes are ideal for various cuisines and have an excellent nutritional profile.",
    image: img6,
    link: "#"
  },
];

const Services = () => {
  return (
    <div className="text-center bg-gray-100 pb-28">
      <h2 className="text-4xl font-semibold pt-16 text-gray-800">Export Items</h2>
      <p className="mb-12 text-gray-600 text-lg max-w-4xl mx-auto px-4">
        We export high-quality agricultural products from Ethiopia, including a diverse range of oilseeds, pulses, and other valuable crops. Our products are carefully selected to meet international standards and ensure maximum satisfaction for our clients.
      </p>
      <div className="flex flex-wrap justify-center gap-10 pt-10 px-4">
        {services.map((service, index) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2" key={index}>
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4 text-lg">{service.description}</p>
              <a href={service.link} className="text-red-600 font-semibold hover:underline">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
