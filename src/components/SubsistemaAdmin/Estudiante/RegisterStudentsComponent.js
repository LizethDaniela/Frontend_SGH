import React from "react";
import {Link} from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { useForm } from "../../../hooks/useForm";
import Head from "../../head/Head";
import { DashBoardComponent } from "../dashboard/DashBoardComponent";
import { registerEstudent } from "../../../actions/registerEstudent";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./stylesStudent.css";

export const RegisterStudentsComponent=()=>{
  const dispatch = useDispatch();
  const [form, handlerChangeForm] = useForm({
    ci: "",
    ru: "",
    nombre: "",
    ap_paterno: "",
    ap_materno: "",
    cargo: "",
    semestre: "",
    email: "",
    fecha_nac: "",
    telefono: ""
  });

  const { ci, ru, nombre, ap_paterno, ap_materno, cargo, semestre, email, fecha_nac, telefono } = form;
  const { student } = useSelector((state) => state);
  const { register_student } = student;
  console.log(register_student);
  
  const handlerSubmit = (e) => {
    e.preventDefault()
    dispatch(registerEstudent({ nombre, ap_paterno, ap_materno, ci, ru, cargo, semestre, email, fecha_nac, telefono }));
  }

  return (
    <>
      <Head/>
      <DashBoardComponent/>
      <div className="container">
        <Link to="/students/estudentslist"><button tipo="button" className="link"><FaUsers/> Lista de Estudiantes </button></Link>

        <div className="form-wrapper">
          <h2>REGISTRO DE ESTUDIANTES <MdAccountCircle /></h2>
          
          <form onSubmit={handlerSubmit}>
            <div className="simple">
              <label htmlFor="ci">C.I.:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="ci"
                value={ci} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="simple">
              <label htmlFor="ru">R.U.:</label>
              <input
                placeholder="Escriba aqui"
                type="number"
                name="ru"
                value={ru} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="firstName">
              <label htmlFor="nombre">Nombre:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="nombre"
                value={nombre} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="lastName">
              <label htmlFor="ap_paterno">Apellido Paterno:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="ap_paterno"
                value={ap_paterno} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="lastName2">
              <label htmlFor="ap_materno">Apellido Materno:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="ap_materno"
                value={ap_materno} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="simple">
              <label htmlFor="cargo">Cargo:</label>
              <input
                placeholder="estudiante"
                type="text"
                name="cargo"
                value={cargo} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="simple">
              <label htmlFor="semestre">Semestre:</label>
              <input
                placeholder="S01"
                type="text"
                name="semestre"
                value={semestre} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="simple">
              <label htmlFor="email">e-mail:</label>
              <input
                placeholder="e-mail...."
                type="email"
                name="email"
                value={email} 
                onChange={handlerChangeForm}
                autoComplete="off"
              />
            </div>
            <div className="date">
              <label htmlFor="fecha_nac">Fecha de Nacimiento:</label>
              <input
                placeholder="mm/dd/yyyy"
                type="date"
                name="fecha_nac"
                value={fecha_nac} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="simple">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                placeholder="Escriba aqui"
                type="number"
                name="telefono"
                value={telefono} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Registrar</button>
              <small>Asegurese de que todos los datos sean correctos</small>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
