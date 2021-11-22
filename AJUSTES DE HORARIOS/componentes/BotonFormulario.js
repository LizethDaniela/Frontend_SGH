import React, {useState, Fragment} from 'react';
import "./botonAjuste.css";



const BotonFormulario = () => {

    /* const[todos, setTodos]= useState([]);  */
    const [task, setTask] = useState({
        materia:"",
        dia:"",
        hora:"",
        motivo:""
    });
    const { materia }=task;
    const handlerChange = ({ target }) => {
        /* const { materia } = target; */
        const { value } = target;
        setTask({...task, materia: value, dia: false, hora: false, motivo:false });
    };
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(task);
    };


    return (
        <Fragment>
            {/* <ol>
                {todos.map((item)=>(
                    <li>
                        {item.name} age {item.age}{" "}
                    </li>
                ))}
            </ol> */}
            <form action="" onSubmit={onSubmitForm}>
                <select className="materia" name="materia" value={materia} onChange={handlerChange}>
                    <option className="color">SELECCIONE UNA MATERIA</option>
                    <option className="color">Programacion 1</option>
                    <option className="color">Base de Datos</option>
                    <option className="color">Taller de Base de Datos</option>
                </select> <br /><br />
                <select className="dia" >
                    <option className="color" value="">DIA</option>
                    <option className="color" value="lunes">LUNES</option>
                    <option className="color" value="martes">MARTES</option>
                    <option className="color" value="miercoles">MIERCOLES</option>
                    <option className="color" value="jueves">JUEVES</option>
                    <option className="color" value="viernes">VIERNES</option>
                    <option className="color" value="sabado">SABADO</option>
                </select>
                <input className="tiempo" type="time"></input><br />
                <textarea className="motivo" placeholder="MOTIVO"></textarea><br />
                <input className="cancelar" type="submit" value="CANCELAR"></input>
                <input className="enviar" type="submit" value="ENVIAR"></input>
            </form>
        </Fragment>
    );
};

export default BotonFormulario;