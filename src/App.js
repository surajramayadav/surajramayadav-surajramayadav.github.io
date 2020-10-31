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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <NavBar/>
    <Switch>
        
        <Route exact path='/' render={(props)=><Home {...props}/>} />
        
        <Route exact path="/service" component={Service}/>
        
        <Route exact path="/about" component={About}/>
         
        <Route exact path="/contact" component={Contact}/>

      <Redirect to="/"/>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
