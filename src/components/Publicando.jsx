import {FaBreadSlice, FaRegTimesCircle} from "react-icons/fa"

const Publicando = ({tasks, deletar, imag}) => {
    
    return(
        <div className="publication">
            <p>Feed</p>
          
            {tasks.map((task, index) => {
                return(

                <div className="publicar" key={index}>
                        <div className="icone">
                            <FaRegTimesCircle onClick={() => deletar(index)} ></FaRegTimesCircle>
                        </div>
                           
                        <div className="temas">
                            <div className="image-pessoa">
                                <img  src={task.elemento} alt="Foto" />
                                
                            </div>
           
                            <div className="descricao">
                                <p>{task.menssagem}</p>

                                <h2>Enviado Por:</h2>
                                <h2>{task.name}</h2>
                            </div>

                        </div>
                </div>
                );
            })}  
      </div>
    )

}

export default Publicando