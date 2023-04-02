import React from "react";
import ImageSlider from './homeslider'


const Homesld = () => {
  const slides = [
    
    { url: "http://localhost:3000/goodheart-app/imgb1.png", title: "NRLPhoto"},
    { url: "http://localhost:3000/goodheart-app/imgb2.png", title: "NRLPhoto"},
    { url: "http://localhost:3000/goodheart-app/imgb3.png", title: "NRLPhoto"},
    { url: "http://localhost:3000/goodheart-app/imgb4.png", title: "NRLPhoto"},
    { url: "http://localhost:3000/goodheart-app/imgb5.png", title: "NRLPhoto"},
    
  ];

  const containerStyles = {
    width: "1300px",
    height: "800px",
    margin:"0 auto",
    padding:"100px",
    
  };

  return (
    
    <div id="Home">
  
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
        
      </div>
    
    </div>

  );
};

export default Homesld;
