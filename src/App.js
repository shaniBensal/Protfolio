import React, { Component } from 'react';

//CSS
import './App.css';

//Routes additions
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// //render nav-bar in all the app as header
// import NavBar from './components/NavBar/NavBar'

//Routes to pages
import ProtfolioApp from './pages/ProtfolioApp/ProtfolioApp'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';

import '@fortawesome/fontawesome-free/css/all.css';

class App extends Component {
  state = {
    showNavBar: false
  }

  render() {
    return (
      <Router>
        <div className="app text-align-center">
          <Switch>
            <Route exact component={ProtfolioApp} path='/' />
            <Route exact component={ProjectDetails} path='/ProjectDetails/:_id' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
