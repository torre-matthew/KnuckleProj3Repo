import React from "react";
import Carousel from "react-materialize/lib/Carousel";
import "./style.css";

function Slider() {
  return (
    <div>
      {/* <div className="slider-content"></div> */}
      <Carousel options={{ fullWidth: true }} images={[
        "/images/food1.jpg",
        "/images/food2.jpg",
        "/images/food3.jpg"
      ]} />
    </div>
  )
}

export default Slider;