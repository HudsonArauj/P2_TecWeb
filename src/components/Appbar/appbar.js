import "./appbar.css";
import { Link } from 'react-router-dom';

export default function Appbar() {

  return (
    <div className="appbar">
      <img src="./cars.jpg" className="logo" alt="logo"/>
      <text className="subtitle">carros</text>
          
          <button className="button2">
          <Link to ="/listCars">
          lista de carros
          </Link>
          </button>
        <Link to = "/">
          <img className="logo" src="./home.png" alt="home"></img>
        </Link>
    </div>
  );
}