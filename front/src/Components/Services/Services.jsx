import React from 'react';
import img1 from "../../assets/service/img1.jpg"
import img2 from "../../assets/service/img2.jpeg"
import img3 from "../../assets/service/img3.png"
import img4 from "../../assets/service/img4.jpg"
import img6 from "../../assets/service/img6.png"



const services = [
  {
    title: "Arabica coffee",
    description: "Our premium Arabica coffee beans are carefully sourced from the lush, high-altitude regions of Ethiopia. Known for their rich, complex flavors and smooth, balanced acidity",
    image: img1,
    link: "#"
  },
  {
    title: "oils seed",
    description: "Sourced from the fertile farms of Ethiopia, our selection of high-quality oilseeds includes a diverse range of options,Lorem ",
    image: img2,
    link: "#"
  },
  {
    title: "sesema",
    description: "Our sesame seeds are meticulously sourced from the sun-drenched fields of Ethiopia, renowned for their exceptional quality and flavor. These small, oil-rich seeds are prized for their nutty aroma and versatile culinary applications. Whether used in the production of tahini, oil, or as a garnish, our sesame seeds offer a delightful taste experience and a rich source of essential nutrients.",
    image: img3,
    link: "#"
  },
    {
    title: "mustard",
    description: "Grown in the rich, nutrient-dense soils of Ethiopia, our mustard seeds are renowned for their pungent aroma and distinctive flavor. Whether it's the popular type of mustard, e.g., yellow, brown, or black, our mustard offerings are highly versatile, perfect for use in condiments, marinades, and various culinary preparations.",
    image: img4,
    link: "#"
  },
  {
    title: "sunflower & cereal crops",
    description: "Sourced from the sunlit fields of ethiopia, our sunflower seeds boast a rich, buttery flavor and a crunchy texture. These versatile seeds are highly valued for their high oil content, making them a popular choice for the production of edible oils, as well as in a wide range of food and feed applications. Our sunflower seeds are carefully selected and processed to meet the highest standards of quality and purity",
    image: img2,
    link: "#"
  },
  {
    title: "pulses",
    description: " Our diverse selection of premium pulses includes [list specific pulses, e.g., lentils, chickpeas, mung beans, pigeon peas]. Grown in the nutrient-rich soils of Ethiopia, these protein-packed legumes are highly sought after for their versatility in various cuisines and their excellent nutritional profile. Our pulses undergo rigorous cleaning and sorting processes to ensure consistent quality and size, making them a reliable choice for food manufacturers and processors. ",
    image: img6,
    link: "#"
  },
];

const Services = () => {
  return (
    <div className="text-center  bg-primary pb-28">
      <h2 className="text-3xl font-semibold pt-16">Export items</h2>
      <p className="mb-8 text-gray-600">We exports Agricultural products like </p>
      <div className="flex flex-wrap justify-center gap-10 pt-10">
        {services.map((service, index) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:-translate-y-2" key={index}>
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-red-600 mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              {/* <a href={service.link} className="text-red-600 font-semibold hover:underline">READ MORE</a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
