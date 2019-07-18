import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h3>navbar</h3>
      <Router>
        <div className="nav">
          {}
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/contact">Contact</Link>
        
          
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/About" component={About}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </div>
        <h3>footer</h3>
       
      </Router>
    </div>
  );
}

export default App;
