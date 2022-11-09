import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Car from "../Car/car";
import Appbar from "../Appbar/appbar";

export default function Modelos() {
    const {codigo} = useParams();
    const [models, setModels] = useState([]);
    
    
    
    useEffect(()=>{
        axios.get("https://parallelum.com.br/fipe/api/v1/carros/marcas/"+codigo+"/modelos")
        .then((response) =>{
            setModels(response.data.modelos);
            console.log(response.data);
        });    },[]);
    return (
        <div className="App">
            <Appbar/>
            <main className="container">
                {models.map((model)=>(
                <Car key = {`car__${model.codigo}`} title ={model.nome} content = {''} ></Car>
            ))};
            </main>
            
        </div>
    );
};

