import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jumbotron from './components/Jumbotron.jsx';
import Navbar from './components/Navbar.jsx'
import Forms from './components/Forms'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Jumbotron />
      <Forms />
      <Forms />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
