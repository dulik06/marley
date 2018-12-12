import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecipeList extends Component {

  render() {
    const { recipes } = this.props;
    return (
      <div>
      {recipes.length === 0 ? <h1>Loading...</h1> : 
        <ul>
          {recipes.items.map(recipe => {
            return(
              <li key={recipe.fields.title}>
                <Link to={`/recipe/${recipe.sys.id}`}><p>{recipe.fields.title}</p></Link>
                <p>{recipe.fields.description}</p>
                { !recipe.fields.tags ? null : <p>{recipe.fields.tags.map(tag => tag.fields.name)}</p> }
              </li>
            )
          })}
        </ul>
      }
      </div>
    );
  }
}

export default RecipeList;
