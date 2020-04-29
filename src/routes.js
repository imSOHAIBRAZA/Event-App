import React, { Component } from 'react';

import './App.css';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';

import Marketplace from './WebSite/containers/Marketplace/Marketplace';
import EventDetail from './WebSite/containers/Marketplace/EventDetail';
import ContactUs from './WebSite/components/ContactUs/ContactUs';
import Home from './WebSite/containers/Home/Home';

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
