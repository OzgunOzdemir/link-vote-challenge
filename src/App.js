import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout.js';
import AddLinks from './containers/AddLinks/AddLinks.js';
import ListLinks from './containers/ListLinks/ListLinks.js';

class App extends Component {
  render() {
    return (
      <Router>
          <Layout>
            <Switch>
              <Route path="/" exact strict component={ListLinks} />
              <Route path="/add-link" exact strict component={AddLinks} />
              <Route component={Error} />
            </Switch>
          </Layout>
      </Router>
    );
  }
}

const Error = () => {
  return (
    <h1>This page was not found.</h1>
  )
}

export default App;