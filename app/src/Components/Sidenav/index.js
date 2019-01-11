import React from "react";
import SideNav from "react-materialize/lib/SideNav";
import SideNavItem from "react-materialize/lib/SideNavItem";
import Button from "react-materialize/lib/Button";
import "./style.css";

class Sidenav extends React.Component {
  state = {
    yourName: "",
    yourEmail: "",
    yourImage: "",
    savedRecipes: [
      {
        name: "You have no saved recipes"
      }
    ]
  }

componentDidMount() {
  this.displayNameOrGuest();
  this.getSavedRecipesFromSessionStorage();
}

displayNameOrGuest = () => {
let yourName = sessionStorage.getItem("un");
let yourEmail = sessionStorage.getItem("em");
let yourImage = sessionStorage.getItem("img");

  if (yourName === null) {
    this.setState ({
      yourName: "Guest",
      yourEmail: "guest@guest.com",
      yourImage: "images/dc.png"
    })
  }
  else {
    this.setState ({
      yourName: yourName,
      yourEmail: yourEmail,
      yourImage: yourImage
    })    
  }
}

getSavedRecipesFromSessionStorage = () => {
  let recipesObj = JSON.parse(sessionStorage.getItem("savedRecipes"));
  console.log(recipesObj);

  if (recipesObj != null) {
    this.setState({
      savedRecipes: recipesObj
    });
  }
}

render() {
  return (
    
<SideNav className="sm-side-nav"
  trigger={<Button className="side-nav-btn"><i className="fas fa-bars"></i></Button>}
  options={{ closeOnClick: true }}
>
    <SideNavItem className="no-hover" userView
    user={{
      background: 'images/pantry.jpg',
      image: this.state.yourImage,
      name: this.state.yourName,
      email: this.state.yourEmail
    }}
  />
  {/* <SideNavItem href='#!icon' icon='cloud'>Saved Meals</SideNavItem> */}
      <SideNavItem className="no-hover" subheader>Saved Recipes</SideNavItem>
  <SideNavItem divider />
    {this.state.savedRecipes.map(recipes => (
      <SideNavItem waves href="">{recipes.name}</SideNavItem>
    ))}
</SideNav>
  )
}
}
export default Sidenav;