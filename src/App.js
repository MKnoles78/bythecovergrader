import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jumbotron from './components/Jumbotron.jsx';
import Navbar from './components/Navbar.jsx'
import Forms from './components/Forms'
import Home from './containers/Home'
import Grader from './containers/Grader'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        < Route exact path="/grader">
          <Grader />
        </Route>
      <Jumbotron />
      <Forms />
      <Forms />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
