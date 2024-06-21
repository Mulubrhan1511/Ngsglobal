import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";


const App = () => {
  

  return (
    <BrowserRouter>
      <div className="bg-blue-500  ">
        
        <div className="">
          <div className="bg-services bg-cover">
          <Navbar />
          
          </div>
        </div>
        
      </div>
    </BrowserRouter>
  );
};

export default App;