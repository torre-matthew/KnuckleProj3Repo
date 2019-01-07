import React from "react";
import Carousel from "react-materialize/lib/Carousel";


import "./style.css";



function Slider() {
  return (
    <div>
      <Carousel options={{ fullWidth: true, indicators: true, duration: 300}} images={[
        "/images/food1.jpg",
        "/images/food2.jpg",
        "/images/food3.jpg"
      ]} />
    </div>
  )
}

export default Slider;