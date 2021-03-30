import React, {Component} from 'react';
import './Home.css';
import gost from './gost.svg';
import tamp from './tamp.png';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import minilogo from './minilogo.svg';




class Home extends Component {
    render() {
        return (
            
            <div className="Home"> 
      <header className="App-ack">
      <Container >
  <Row>
    <Col><img className="App-tamp" src={tamp}  alt=""/></Col>
    <Col><img className="App-tamp" src={tamp}  alt=""/></Col>
    <Col><img className="App-tamp" src={tamp}  alt=""/></Col>
  </Row>
</Container>

      </header>
      <nav class="navbar navbar-black ">
      <a class="App-logosmall">
      
      </a>
     </nav>
      </div>
      
        );
    }
    
}

export default Home;