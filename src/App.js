import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Redirect
} from "react-router-dom";
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
        <Route exact path="/website/" component={Home}/>
        
        <Route exact path="/website//service" component={Service}/>
        
        <Route exact path="/website//about" component={About}/>
         
        <Route exact path="/website//contact" component={Contact}/>

      <Redirect exact path="/website/" component={Home}/>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
