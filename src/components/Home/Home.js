import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store from '../../store'

class Home extends Component {
  constructor(props) {
    super(props);

    const reduxStore = store.getState()

    this.state = {
      recipes: reduxStore.recipes
    };
  }

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true

    store.subscribe(() => {
      const reduxStore = store.getState()
      if (this._isMounted) {
      this.setState({
        recipes: reduxStore.recipes
      })}
    })
  }


  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          index={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
