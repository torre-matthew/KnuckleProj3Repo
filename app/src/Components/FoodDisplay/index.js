import React, { Component } from "react";
import "./style.css";
import result_icon1 from "./result_icon1.png";
import result_icon2 from "./result_icon2.png";
import result_icon3 from "./result_icon3.png";
import result_icon4 from "./result_icon4.png";
import API from "../../utils/API";
import recipe from "../Ingredients";

let iconArray = [result_icon1, result_icon2, result_icon3, result_icon4];
let randomIcon = iconArray[Math.floor(Math.random()*iconArray.length)];


 class SaveFavorite extends Component {
   constructor(props) {
     super(props)
     this.state = {
       status: false
     }
     this.handleClick = this.handleClick.bind(this)
   }
   handleClick() {
     this.setState({
       status: !this.state.status
     })
     console.log(this.state.status); // this is consoling true/false when heart is clicked
     let target = document.getElementById("favorite").parentNode.parentNode.parentNode;

     let targetName = target.getAttribute("data-name");

     let targetImage = document.getElementById("recipeImage");
     
     let targetImageSrc = targetImage.getAttribute("src");

     let targetLink = document.getElementById("recipeLink");

     let targetLinkSrc = targetLink.getAttribute("href");

     if (this.state.status === false) {
       console.log("saving");
       API.saveRecipe({
        name: targetName,
        image: targetImageSrc,
        recipeID: targetLinkSrc
       })
       console.log(recipe);
       console.log(target.getAttribute("data-name"));
       console.log(targetImageSrc);
       console.log(targetLinkSrc);
     } else 
      console.log("not saving");

   }
   render() {
     return (
       <SaveFavoriteChild className={this.state.status ? "fas fa-heart pp-sm-heart" : "far fa-heart pp-sm-heart"} toggleClassName={this.handleClick}></SaveFavoriteChild>
     )
   }
 }

 class SaveFavoriteChild extends React.Component {
   render() {
     return (
       <span id="favorite" className="pp-sm-favme">
       <i className={ this.props.className }
           onClick={this.props.toggleClassName}
       >
       { this.props.children }
         </i></span>
     )
   }
 }

//This is a functional component that displays a card for each recipe that we get back from Edamam.
//It only displays these cards if the state(renderComponent) from our ingredients component is passed
//as true.
export function FoodDisplayCard(props){
  let renderComponent = props.renderComponent;
//The function showRecipe from our Ingredients component is passed as a prop to the FoodDisplayCard Component,
//and this function is run given the recipeID as a parameter. 
  if(renderComponent){
    return(
      <div id="theRecipe" data-name={props.name} className="col s12 m6">
        <div className="pp-fd-results">
          <div className="pp-sm-fav-btn">
            <SaveFavorite />
          </div>
          <div>
            <img id="recipeImage" src={props.image} alt="food"/>
          </div>
          <div className="pp-fd-icon">
            <img src={randomIcon} alt="food icon" />
          </div>
          <div className="pp-fd-link">
            <span class="hidden-link"><a id="recipeLink"  href={props.link}></a></span>
            
            <a data-scroll href="#getStarted" data-recipeID={props.recipeID} onClick={() => props.showRecipe(props.recipeID)}>See Recipe</a>
            {/* props.buttonClick */}
          </div>
        </div>
      </div>
    );
  }
}

//This is a functional component that acts as the container for the cards.
export function FoodDisplay({children}) {
  return (
    <div className="pp-fd">
      <div className="container">
        <div className="row">
          <div className="col s12 center">
            <h1>Here are some meals to consider</h1>
          </div>
        </div>
        <div className="row">
          {children}
        </div>
      </div> 
    </div>
  );
}

// export default {FoodDisplay, FoodDisplayCard}; 