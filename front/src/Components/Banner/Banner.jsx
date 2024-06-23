import React from "react";
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
    title: "WELCOME TO NGS GLOBAL TRADING OFFICAL WEBSITE",
    description:
      " We handle your import and export needs efficiently and reliably.",
  },
  {
    id: 2,
    img: Image2,
    title: "Grow Your Business Globally",
    description:
      "Expert Import & Export Services"
  },
  {
    id: 3,
    img: Image3,
    title: "Streamline Your Global Trade with us",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Banner = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <Slider {...settings} className="w-full">
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
              opacity: 0.7, // Adjust opacity for better text readability
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
            <p className="text-sm">{data.description}</p>
            <button
              onClick={handleOrderPopup}
              className="mt-4 bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white  px-4 rounded-full"
            >
              Order Now
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
