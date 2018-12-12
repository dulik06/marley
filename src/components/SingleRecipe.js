import React, { Component } from 'react';

class SingleRecipe extends Component {
  render() {
    const id = this.props.match.params.id;
    if(!this.props.recipes || !this.props.recipes.items) {
      return null
    } 
    const recipe = this.props.recipes.items.find(item => item.sys.id === id)
    console.log(recipe)
    return (
      <div>
        <p>{recipe.fields.title}</p>
        <p>{recipe.fields.description}</p>
        <p>{recipe.fields.chef.fields.name}</p>
        {!recipe.fields.tags ? null : <p>{recipe.fields.tags.map(tag => tag.fields.name)}</p>}
        <img src={recipe.fields.photo.fields.file.url} alt='image' /> 
      </div>
    )
  }
}

export default SingleRecipe;