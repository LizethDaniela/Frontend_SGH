import React, { useState } from 'react'
import { MdAccountCircle } from "react-icons/md";
import { useForm } from '../../hooks/useForm';
import "./stylesR.css";

export const RegisterDocentsComponent = () => {
    const [form, setForm, handlerChangeForm] = useForm({
        ci: '',
        name: '',
        lastname: '',
        lastname2: '',
        date: '',
        phone: ''

    });
    const [validations, setValidations] = useState({
        ci: '',
        name: '',
        lastname: '',
        lastname2: '',
        date: '',
        phone: ''
    })
      const validateAll = () => {
        const { ci, name, lastname, lastname2, date, phone } = form;
        const validations = { ci:'',name: '', lastname: '', lastname2: '',date:'', phone:'' };
        let isValid = true;
        if (!name) {
            validations.name = 'Name is required'
            isValid = false
          }
          
          if (name && name.length < 3 || name.length > 50) {
            validations.name = 'Name must contain between 3 and 50 characters'
            isValid = false
          }
          
          if (lastname && lastname.length < 3 || lastname.length > 50) {
            validations.lastname = 'Name must contain between 3 and 50 characters'
            isValid = false
          }
          if (lastname2 && lastname2.length < 3 || lastname2.length > 50) {
            validations.lastname2 = 'Name must contain between 3 and 50 characters'
            isValid = false
          }
         
          if (!isValid) {
            setValidations(validations)
          }
          
          return isValid
        }
        const validateOne = (e) => {
            const { name } = e.target;
            const value = form[name];
            let message = '';
            
            if (!value) {
              message = `${name} es required`
            }
            
            if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
              message = 'Name must contain between 3 and 50 characters'
            }
        
            setValidations({...validations, [name]: message })
          }
          const handleSubmit = (e) => {
            e.preventDefault()
            const isValid = validateAll()
            
            if (!isValid) {
              return false
            }
            console.log(form);
            setForm({ci:'',name: '', lastname: '', lastname2: '',date:'', phone:''});
          }
          
          const { ci,name, lastname, lastname2, date, phone } = form;
        
          const { 
            ci: ciVal, 
            name: nameVal, 
            lastname: lastnameVal,
            lastname2: lastname2Val, 
            date: dateVal, 
            phone: phoneVal 
          } = validations
    return (
        <div className="container">
        <div className="form-wrapper">
          <h1>REGISTRO DE DOCENTES <MdAccountCircle /> </h1>
          
          <form onSubmit={handleSubmit} noValidate>
          <div className="simple">
              <label htmlFor="CI">C.I.:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="ci"
                value={ci} 
                onChange={handlerChangeForm}
                onBlur={validateOne}
                
              />
             <div>{ciVal}</div>
            </div>
            <div className="firstName">
              <label htmlFor="firstName">Nombre:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="name"
                value={name} 
                onChange={handlerChangeForm}
                onBlur={validateOne}
               
              />
             <div>{nameVal}</div>
            </div>
            
            <div className="lastName">
              <label htmlFor="lastName">Apellido Paterno:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="lastname"
                value={lastname} 
                onChange={handlerChangeForm}
                onBlur={validateOne}
              />
             <div>{lastnameVal}</div>
            </div>
            <div className="lastName2">
              <label htmlFor="lastName2">Apellido Materno:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="lastname2"
                value={lastname2} 
                onChange={handlerChangeForm}
                onBlur={validateOne}
              />
            <div>{lastname2Val}</div>
            </div>
            <div className="date">
              <label htmlFor="date">Fecha de Nacimiento:</label>
              <input
                placeholder="mm/dd/yyyy"
                type="date"
                name="date"
                value={date} 
                onChange={handlerChangeForm}
                onBlur={validateOne}
              />
              <div>{dateVal}</div>
            </div>
            <div className="simple">
              <label htmlFor="phone">Teléfono:</label>
              <input
                placeholder="Escriba aqui"
                type="tel"
                name="phone"
                value={phone} 
                onChange={handlerChangeForm}
                onBlur={validateOne}
              />
              <div>{phoneVal}</div>
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
