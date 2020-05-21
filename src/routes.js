import React, { Component } from 'react';

import './App.css';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';
import "./css/style2.css";
import "./css/body.css";
import "./css/responsive.css";
import "./css/style.css";
import "./css/style1.css";
import Marketplace from './containers/Marketplace/Marketplace';
import EventDetail from './containers/Marketplace/EventDetail';


import createhistory from 'history/createBrowserHistory'
const history = createhistory()
class App extends Component {

  render() {

    return (
      <>
        <Router history={history}>

          <Route exact path="/" component={Marketplace} />
          <Route
            exact
            path="/event-detail/:id"
            component={EventDetail}
          />
          <Route
            exact
            path="/NotFound"
            component={() => <h1>Not Found</h1>}
          />

        </Router>
      </>
    );
  }
}


export default App;
