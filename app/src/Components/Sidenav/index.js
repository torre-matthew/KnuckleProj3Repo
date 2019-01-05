import React from "react";
import SideNav from "react-materialize/lib/SideNav";
import SideNavItem from "react-materialize/lib/SideNavItem";
import Button from "react-materialize/lib/Button";
import "./style.css";

var yourName = sessionStorage.getItem("un");
var yourEmail = sessionStorage.getItem("em");

if (yourName == null) {
  yourName = "Guest";
}
if (yourEmail == null) {
  yourEmail = "";
}
class Sidenav extends React.Component {
render() {
  return (
<SideNav className="sm-side-nav"
  trigger={<Button className="side-nav-btn"><i className="fas fa-bars"></i></Button>}
  options={{ closeOnClick: true }}
>
    <SideNavItem className="no-hover" userView
    user={{
      background: 'images/pantry.jpg',
      image: 'images/dc.png',
      name: yourName,
      email: yourEmail
    }}
  />
  {/* <SideNavItem href='#!icon' icon='cloud'>Saved Meals</SideNavItem> */}
      <SideNavItem className="no-hover" subheader>Saved Meals</SideNavItem>
  <SideNavItem divider />
      <SideNavItem waves href="">Mini Caramel Rolls</SideNavItem>
      <SideNavItem waves href="">Onion Beef au Jus</SideNavItem>
      <SideNavItem waves href="">Creamy Italian Chicken</SideNavItem>
      <SideNavItem waves href="">Chocolate Maple Bars</SideNavItem>
      <SideNavItem waves href="">Delicious Pumpkin Bread</SideNavItem>
      
</SideNav>
  )
}
}
export default Sidenav;