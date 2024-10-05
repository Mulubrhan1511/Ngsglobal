import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/banner/car.png";
import Image2 from "../../assets/banner/plane.jpg";
import Image3 from "../../assets/banner/shippment.jpg";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "WELCOME TO NGS GLOBAL TRADING",
    description:
      "We import and export high-quality products, offering the best selection for our customers worldwide.",
  },
  {
    id: 2,
    img: Image2,
    title: "Explore Our Exclusive Range",
    description:
      "Discover a diverse range of imported goods, carefully selected to meet your needs.",
  },
  {
    id: 3,
    img: Image3,
    title: "Quality Products, Global Reach",
    description:
      "From import to export, we ensure top-notch products reach you wherever you are.",
  },
];

const Banner = ({ handleOrderPopup }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false, // Change to false to allow manual control
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    afterChange: (current) => setCurrentSlide(current),
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    sliderRef.slickGoTo(index); // Navigate to the specific slide
  };

  let sliderRef;

  return (
    <div className="relative w-full">
      <Slider ref={(slider) => (sliderRef = slider)} {...settings} className="w-full">
        {ImageList.map((data) => (
          <div
            key={data.id}
            className="relative h-screen flex justify-center items-center"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${data.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.7,
              }}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
              <p className="text-sm">{data.description}</p>
              <button
                onClick={handleOrderPopup}
                className="mt-4 bg-gradient-to-r from-primary to-gold hover:scale-105 duration-200 text-white px-4 rounded-full"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {ImageList.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={() => goToSlide((currentSlide - 1 + ImageList.length) % ImageList.length)}
          className="bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200"
        >
          &#10094; {/* Left arrow */}
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={() => goToSlide((currentSlide + 1) % ImageList.length)}
          className="bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200"
        >
          &#10095; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default Banner;