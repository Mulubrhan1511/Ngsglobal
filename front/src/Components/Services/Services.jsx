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
  const currentDate = new Date().toLocaleDateString(); // Get the current date

  return (
    <div className="p-4 font-[sans-serif] bg-white">
      <div className="max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-12 text-center leading-10">
          Export Items
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          {services.map((service, index) => (
            <div className="bg-white rounded overflow-hidden" key={index}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
                <p className="text-gray-800 text-[13px] font-semibold mt-4">
                  {currentDate} {/* Display today's date */}
                </p>
                <a
                  href={service.link}
                  className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
