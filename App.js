
import logo from './logo.svg';
import back from './YJ4k5zVMjZA.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />   
      </header>
      <img src={back} className="App-back" alt=""/>
      <Button className="App-link" variant="outline-dark" >TAP</Button>{' '}

    </div>
    

    
    
  );
}

export default App;
