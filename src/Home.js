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
      <nav class="navbar" navbar-light bg-light>
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
    
      <h3>ИНТЕРАКТИВНАЯ КАРТА </h3>
      <img src={grodno} className="Home-grodno"/>
      <p>Прогуляйтесь по улицам Гродно и найдите ваше место</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     className="Home-gost"
      src={tamp}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>ГОТОВЫЕ ВАРИАНТЫ ПРОГУЛОК</h3>
      <p>В Гродно множество интересных мест, хранящих свои тайны, легенды и предания. Туристам, проводящим отдых в Беларуси, будет интересно, познавательно, а главное приятно прогуляться по старинным улицам, посмотреть убранство костелов, монастырей, соборов и насладиться живописной панорамой города с берегов Немана. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     
      className="Home-gost"
      src={tamp}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h3>
      <img src={grodno} className="Home-grodno"/>
      <p>Хотите заказать цветы, такси или билеты, вот пару ссылок для бронирования</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
      
      
        );
    }
    
}

export default Home;