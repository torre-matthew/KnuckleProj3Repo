import React from "react";
import SideNav from "react-materialize/lib/SideNav";
import SideNavItem from "react-materialize/lib/SideNavItem";
import Button from "react-materialize/lib/Button";
import "./style.css";

class Sidenav extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      yourName: "",
      yourEmail: "",
      yourImage: "",
      savedRecipes: [
        {
          name: "You have no saved recipes"
        }
      ]
    }
}

componentDidMount() {
  this.displayNameOrGuest();
  this.getSavedRecipesFromSessionStorage();
}

// This function checks to see if there is logged in user info stored in session storage. 
// If there is, it will display name, email, and image in the side nave. If not, the experience
// defaults to the guest experience.
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

// This function is getting a logged in user's saved recipes from the db and storing it in session storage
// for easy access whenever we need it.
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
      <SideNavItem waves href="#pp-all-meals" key={recipes._id}>{recipes.name}</SideNavItem>
    ))}
</SideNav>
  )
}
}
export default Sidenav;