import React, { useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { registerestudents } from '../../actions/authActionsRegisters';
import { useForm } from "../../hooks/useForm";
import "./stylesR.css";

export const RegisterEstudentsComponent=()=>{
  const [form, setForm, handlerChangeForm, resetForm] = useForm({
    ci: "",
    name: "",
    lastname: "",
    lastname2: "",
    date: "",
    phone: ""
  });
  const { ci, name, lastname, lastname2, date, phone } = form;
  const dispatch = useDispatch();
  useEffect(() => {
  const RegisterEstudents = localStorage.getItem("RegisterEstudents");
  if (RegisterEstudents != null) {
      dispatch(registerestudents(JSON.parse(RegisterEstudents)));
  }
  }, []);
  const { authRegEstudents } = useSelector(state => state);
  const { userEstudent } = authRegEstudents;
  console.log(userEstudent);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerestudents(ci, name, lastname, lastname2, date, phone));
    resetForm();
  }
  return (
    <div className="container">
        <div className="form-wrapper">
          <h1>REGISTRO DE ESTUDIANTES <MdAccountCircle /> </h1>
          
          <form onSubmit={handleSubmit}>
          <div className="simple">
              <label htmlFor="CI">C.I.:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="ci"
                value={ci} 
                onChange={handlerChangeForm}
                
                
              />
            </div>
            <div className="firstName">
              <label htmlFor="firstName">Nombre:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="name"
                value={name} 
                onChange={handlerChangeForm}
                
               
              />
            </div>
            
            <div className="lastName">
              <label htmlFor="lastName">Apellido Paterno:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="lastname"
                value={lastname} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="lastName2">
              <label htmlFor="lastName2">Apellido Materno:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="lastname2"
                value={lastname2} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="date">
              <label htmlFor="date">Fecha de Nacimiento:</label>
              <input
                placeholder="mm/dd/yyyy"
                type="date"
                name="date"
                value={date} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="simple">
              <label htmlFor="phone">Teléfono:</label>
              <input
                placeholder="Escriba aqui"
                type="tel"
                name="phone"
                value={phone} 
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
  );
};
