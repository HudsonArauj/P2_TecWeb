import axios from 'axios';
// import './cars.css';

export default function ListaCars(props){

    const deletar = (event) => {
        event.preventDefault();
        axios.delete("https://shielded-chamber-45165.herokuapp.com/api/marcas/"+props.id+"/")
        .then((res) =>{
            props.atualiza();
        })        
    }

    
    return (
        <div className="card">
            <h3 className="card-title">{props.title}</h3> 
            <button onClick={deletar} className='button'>deletar</button>
        </div>
    );
}