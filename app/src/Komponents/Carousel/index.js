import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./style.css";

export default () => (
  <Carousel autoPlay showThumbs={false} showStatus={false} transitionTime={500} interval={7000} dynamicHeight={true}>
    <div>
      <img src="/images/food1.jpg" alt="A tasty dish!" />
    </div>
    <div>
      <img src="/images/food2.jpg" alt="A tasty dish!" />  
    </div>
    <div>
      <img src="/images/food3.jpg" alt="A tasty dish!" />
    </div>

  </Carousel>
);