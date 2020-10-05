import React from 'react';
import Jumbotron from './components/Jumbotron.jsx';
import Navbar from './components/Navbar.jsx'
import Forms from './components/Forms'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Forms />
      <Forms />
    </div>
  );
}

export default App;
