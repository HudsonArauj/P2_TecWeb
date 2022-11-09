import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";
import Formulario from './Formulario/formulario';
import Cars from "./Cars/cars";
import { Link } from 'react-router-dom';
import Appbar from "./Appbar/appbar";

function Home() {
    const [cars, setCars] = useState([]);
  
    const procuraCars = () => {
      axios
      .get("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then((response) => {
        
        setCars(response.data);
        console.log(response.data)
       
      })
    }
useEffect(()=>{
    procuraCars();  
  }, []);
  
    return (
        <div className="App">
          <Appbar/>
        
        <Formulario procura={procuraCars}/>
        <main className="container">
        {cars.map((car) => (
          <Link to = {{
            pathname : "/informacoes/"+car.codigo,
          }}>
          <Cars key = {`car__${car.codigo}`} title={car.nome}></Cars>
          </Link>
      ))}
      </main>
    </div>

    );
      
}
export default Home;
