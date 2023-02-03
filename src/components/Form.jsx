import {FaRegTrashAlt} from "react-icons/fa"
import { useState } from "react";
import "./Form.css";
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

const Form = (props) => {

    
    const {onSave} = props;

    const [text, setText] = useState();
    const [menssage, setMenssage] = useState();

    
    
    const descarte = () => {
      setText("");
      setMenssage("");
      arquivo.src = props.logo;
      props.setImag("");
    }

    const apagar = () => {
      arquivo.src = props.logo;
    }

    return(
        <div className="form">
          
        < form  onSubmit={(e) =>  {
          onSave( text,menssage, e);
          setText("");
          setMenssage("");
          arquivo.src = props.logo;
          props.setImag("");
        }}>
          <div className="perfil">
            <div className="image-perfil"  onClick={() => props.carroselImagem(arquivo)}>
              <img id="arquivo"  src={props.logo}/>
            </div>
              {props.imag &&(
                <FaRegTrashAlt  onClick={() => apagar(props.setImag(""))}></FaRegTrashAlt>
              )}
          </div>
         

          <div className="input-nome">
            <input
                type="text"
                name="texto"
                id="texto"
                value={text || ""}
                placeholder="Digite seu nome"
                required
                onChange={(e) => setText(e.target.value)}               
             />

          </div>
            
          <div className="input-email">
            <input 
                type="text"
                name="menssagem"
                id="menssagem"
                value={menssage || ""}
                placeholder="Menssagem"
                required
                onChange={(e) => setMenssage(e.target.value)}
                />
          </div>
         
          <div className="action">
            <button className="descartar" onClick={() => descarte()}><a href='#'>Descartar</a></button>
            {text && menssage && props.imag ?(
              <button style={{background:"green"}} type="submit">Publicar</button>
            ): (
              <button type="submit" disabled >Publicar</button>
            )}
           
          </div>
        </form>
      </div>
    )
   
}



export default Form
