import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jumbotron from './components/Jumbotron.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './containers/Home';
import Grader from './containers/Grader';
import ArtistSpotlight from './containers/ArtistSpotlight';
import WriterSpotlight from './containers/WriterSpotlight';
import Store from './containers/Store';
import Polls from './containers/Polls';


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
        < Route exact path="/polls">
          <Polls />
        </Route>         
        < Route exact path="/artistspotlight">
          <ArtistSpotlight />
        </Route> 
        < Route exact path="/writerspotlight">
          <WriterSpotlight />
        </Route> 
        < Route exact path="/store">
          <Store />
        </Route>     
      <Jumbotron />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
