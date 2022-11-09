
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Lista from './components/Lista/lista';
import Cars from './components/Cars/cars'
import Home from './components/';
import Modelos from './components/Modelos/modelos';
import "./App.css";


  function App(){
    return (
        <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/Cars" element={<Cars />}/>
          <Route path ="/listCars" element={<Lista />}/>
          <Route path ="/informacoes/:codigo" element={<Modelos />}/>
        </Routes>
        
      </BrowserRouter>
      
  );
  }
  


export default App;
