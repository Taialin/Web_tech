import logo from './logo.svg';
import gost from './gost.svg';
import back from './YJ4k5zVMjZA.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom'
import Home from './Home';

  class App extends Component {
    render() {
    return (
        <HashRouter>
       <div className="App"> 
      <header className="App-header">
      <img src={back} className="App-back" alt=""/>
      <img src={logo} className="App-logo" alt="logo" />  
      <img src={gost} className="App-gost" alt="gost" />   
      </header>
      <NavLink to="/Home" className="App-link" variant="dark">TAP</NavLink>
    </div>
    <div className="content">
    <Route path="/Home" component={Home} /></div>
    </HashRouter>

    
    
    );
    }
}

export default App;
