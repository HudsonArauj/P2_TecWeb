import axios from "axios";

export default function Car(props) {
    const interesse = ()=>{
        axios.post('https://shielded-chamber-45165.herokuapp.com/api/marcas',{'id':props.codigo,"title":props.title, "content" : props.content})
        console.log({'id':props.codigo,"title":props.title, "content" : props.content})
    }
    
    return (
        <div className="card">
            <h3 className="card-title">{props.title}</h3>
                <h2>{props.content}</h2>
                <button onClick={interesse}  className="button">interesse</button>
        </div>
    )
}