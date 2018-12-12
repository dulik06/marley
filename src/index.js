import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import SingleRecipe from './components/SingleRecipe';
import RecipeList from './components/RecipeList';
import * as serviceWorker from './serviceWorker';
const contentful = require("contentful");

const client = contentful.createClient({
  space: 'kk2bw5ojx476',
  accessToken: '7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c'
})

class Router extends Component {
  state = {
    recipes: [],
  }

  componentDidMount() {
   client.getEntries({ content_type: 'recipe' }).then(response => this.setState({ recipes: response }));
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/recipe/:id' render={(props) => <SingleRecipe {...props} {...this.state} />} /> 
            <Route path='/' render={(props) => <RecipeList {...props} {...this.state} />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <Router />
,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
