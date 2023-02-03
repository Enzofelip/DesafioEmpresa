
import './App.css'
import { useState } from "react"
import Publicando from "./components/Publicando"
import Form from "./components/Form"
import Logo from "./components/img/image.png"
import Imagem1 from "./components/img/photo1.png"
import Photo from "./components/img/photo-base.png"

function App() {

  const [tasks, setTask] = useState([]);
  const [imag, setImag] = useState();

  {imag && (
    <h1>Vai dar certo!!</h1>
  )}
  const addTasks = (valor,menssage, e) =>{
    e.preventDefault();

    const salvando ={
      name: valor,
      menssagem:menssage,
      elemento:foto,
    }

    console.log(salvando);
    setTask([...tasks, salvando]);

  }
  
  const deletar = (index) =>{
    let newTest = [...tasks];
    newTest.splice(index, 1);
    
    console.log(index);

    setTask(newTest);
  }

  let foto;
  
  const image = [
    Photo,
    Imagem1
  ]

  console.log(image);


  let index = Math.floor(Math.random() * image.length);
  foto = image[index];

  const carroselImagem = (arquivo) => {

    arquivo.src = foto;
    
    setImag(arquivo)
  }


  return (
    <div className="App">
      <header>
        <h1>buildbox</h1>
        <p>WEP CHALENGE</p>
      </header>
      
      <Form onSave={addTasks} logo={Logo} carroselImagem={carroselImagem} imag={imag} setImag={setImag} setTask={setTask} tasks={tasks}/>
      <Publicando tasks={tasks} deletar={deletar} imag={imag}/>

    </div>
  )
}



export default App
