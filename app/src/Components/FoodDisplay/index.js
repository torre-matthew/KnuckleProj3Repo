import React from "react";
import "./style.css";
import resultImage1 from "./result1.jpg";
import resultImage2 from "./result2.jpg";
import resultImage3 from "./result3.jpg";
import resultImage4 from "./result4.jpg";
import result_icon1 from "./result_icon1.png";
import result_icon2 from "./result_icon2.png";
import result_icon3 from "./result_icon3.png";
import result_icon4 from "./result_icon4.png";
function FoodDisplay() {
  return (
    <div className="pp-fd">
      <div className="container">
        <div className="row">
          <div className="col s12 center">
            <h1>Here are some meals to consider</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <div className="pp-fd-results">
              <div>
                <img src={resultImage1} />
              </div>
              <div className="pp-fd-icon">
                <img src={result_icon1} />
              </div>
              <div className="pp-fd-link">
                <a href="#">See Recipe</a>
              </div>
            </div>
          </div>
          <div className="col s6">
            <div className="pp-fd-results">
              <div>
                <img src={resultImage2} />
              </div>
              <div className="pp-fd-icon">
                <img src={result_icon2} />
              </div>
              <div className="pp-fd-link">
                <a href="#">See Product</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <div className="pp-fd-results">
              <div>
                <img src={resultImage3} />
              </div>
              <div className="pp-fd-icon">
                <img src={result_icon3} />
              </div>
              <div className="pp-fd-link">
                <a href="#">See Recipe</a>
              </div>
            </div>
          </div>
          <div className="col s6">
            <div className="pp-fd-results">
              <div>
                <img src={resultImage4} />
              </div>
              <div className="pp-fd-icon">
                <img src={result_icon4} />
              </div>
              <div className="pp-fd-link">
                <a href="#">See Product</a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default FoodDisplay;