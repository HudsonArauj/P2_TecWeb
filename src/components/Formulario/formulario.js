import axios from 'axios';
import React, {useState} from 'react';
import './formulario.css';

export default function Formulario(props){
    const [marcas, setMarca] = useState("");
    
    const acessaMarca= (event) =>{
        event.preventDefault();
        console.log(marcas);
        axios
            .get("https://parallelum.com.br/fipe/api/v1/carros/marcas")
            .then((response) =>{
                const lista_de_marcas = response.data;
                const results = lista_de_marcas.filter((marca) => {return marca.nome === marcas});
                window.location.assign("/informacoes/"+results[0].codigo);
            })
    }

    const marcaChanged = (event)=>{
        setMarca(event.target.value);
        
    }
    return (
        <form className="form-card" onSubmit={acessaMarca}>
        <textarea
          className="autoresize"
          name="detalhes"
          placeholder="Digite a marca..."
          onChange={marcaChanged}
          value={marcas}
        ></textarea>
        <button className="button" type="submit">Ver</button>
      </form>
    );
}