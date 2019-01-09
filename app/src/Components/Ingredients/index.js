import React, { Component }  from "react";
import Button from "react-materialize/lib/Button";
import "./style.css";
import API from "../../utils/API";


class ListOfingredients extends Component {
  
  state = {
    ingredients: [""]
  }

  handleText = i => e => {
    let ingredients = [...this.state.ingredients]
    ingredients[i] = e.target.value
    this.setState({
      ingredients
    })
    console.log(ingredients);
  }

  handleDelete = i => e => {
    e.preventDefault()
    let ingredients = [
      ...this.state.ingredients.slice(0, i),
      ...this.state.ingredients.slice(i + 1)
    ]
    this.setState({
      ingredients
    })

  }

  addIngredient = e => {
    e.preventDefault()
    let ingredients = this.state.ingredients.concat([''])
    this.setState({
      ingredients
    })
  }

  searchEdamam = event => {
    event.preventDefault();
    let queryString = this.state.ingredients;
    API.search(queryString)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    console.log(queryString);
  }
  
  render() {
    return (
      <div className="pp-foh-list row">
        <div className="col s12 m6">
        <ul className="pp-foh-items">
        {this.state.ingredients.map((ingredient, index) => (
          <li key={index}>
            <input
              type="text"
              className="pp-foh-text"
              onChange={this.handleText(index)}
              value={ingredient}
            />
            <button id="del" className="pp-foh-remove pp-red" onClick={this.handleDelete(index)}><i className="tiny material-icons">close</i></button>
          </li>
        ))}
        </ul>
        </div>
        <div className="pp-foh-controls col s12 m6">
          <Button waves='light' className="pp-red pp-foh-search" onClick={this.searchEdamam}>Search</Button>
          <button className="btn-floating pp-red pp-foh-add" onClick={this.addIngredient}><i className="material-icons">add</i></button>
        </div>
        <script></script>
      </div>
    )
  }
}

export default ListOfingredients;