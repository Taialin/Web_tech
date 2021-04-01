import React, {Component} from 'react';
import './Home.css';
import grodno from './grodno1.png';
import tamp from './tamp.png';
import Carousel from 'react-bootstrap/Carousel';


class Home extends Component {
    render() {
        return (
            <div className="Home"> 
         
      <header className="App-ack">
        
      </header>
      <nav class="navbar navbar-black ">
      <a class="App-logosmall">
      </a>
     </nav>
     <Carousel className="Home-carusel">
  <Carousel.Item>
    <img
      className="Home-gost"
      src={tamp}
      
    />
    <Carousel.Caption>
    
      <h3>First slide label </h3>
      <img src={grodno} className="Home-grodno"/>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     className="Home-gost"
      src={tamp}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     
      className="Home-gost"
      src={tamp}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
      
      
        );
    }
    
}

export default Home;