import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Services from "./Components/Services/Services";
import Banner2 from "./Components/Banner/Banner2";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import BlogPosts from "./Components/BlogPosts/BlogPosts";
import ContactUs from "./Components/ContactUs/ContactUs";
import VisionMissionValues from "./Components/VisionMissionValues/VisionMissionValues";


const App = () => {
  

  return (
    <BrowserRouter>
      <div className="  ">
        
        <div className="">
          
          <Navbar />
          <Banner />
          <BlogPosts />   
          <Banner2 />

          <Services />
          <WhyChooseUs />
          <ContactUs />
          <VisionMissionValues />
        </div>
        
      </div>
    </BrowserRouter>
  );
};

export default App;