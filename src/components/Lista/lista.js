import axios from "axios";
import React, { useEffect, useState } from "react";
import Appbar from "../Appbar/appbar";
// import Cars from "../Cars/cars";
import './lista.css';
import ListaCars from "../ListCar/listcar";


export default function Lista(){
    const[choices, setChoice] = useState([]);
       
    const atualizaPag =()=>{
        axios.get("https://shielded-chamber-45165.herokuapp.com/api/marcas")
        .then((response)=>{
            setChoice(response.data)
            console.log(response.data)
        }).catch((error)=>{
            console.log(error);
        });
    }    
    useEffect(()=>{
        atualizaPag();
        },[]);  
    return (
        <div className="App">
            <Appbar/>
            <main className="container">
            {choices.map((choice) =>(
         <ListaCars key = {`car__${choice.id}`} id = {choice.id} title={choice.title} content = {choice.content} atualiza = {atualizaPag}></ListaCars> 
        ))}
            </main>
        </div>
    )
}
