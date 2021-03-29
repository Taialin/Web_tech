import React, {Component} from 'react';
import './Home.css';
import tamp from './tamp.svg';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
     
      </div>
      
        );
    }
}

export default Home;