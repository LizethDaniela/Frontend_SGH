import React, { useState } from "react";
//import { UsergroupAddOutlined  } from '@ant-design/icons';
import "./stylesEs.css";

export const RegisterEstudentsComponent=()=>{
    const [values, setValues] = useState({
        ci: '',
        name: '',
        lastname: '',
        lastname2: '',
        date: '',
        phone: ''

      })
      const [validations, setValidations] = useState({
        ci: '',
        name: '',
        lastname: '',
        lastname2: '',
        date: '',
        phone: ''
      })
      const validateAll = () => {
        const { ci,name, lastname, lastname2, date, phone } = values
        const validations = { ci:'',name: '', lastname: '', lastname2: '',date:'', phone:'' }
        let isValid = true
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
            const { name } = e.target
            const value = values[name]
            let message = ''
            
            if (!value) {
              message = `${name} es required`
            }
            
            if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
              message = 'Name must contain between 3 and 50 characters'
            }
        
            setValidations({...validations, [name]: message })
          }
          const handleChange = (e) => {
            const { name, value } = e.target
            setValues({...values, [name]: value })
          }
          const handleSubmit = (e) => {
            e.preventDefault()
            const isValid = validateAll()
            
            if (!isValid) {
              return false
            }
            console.log(values);
            setValues({ci:'',name: '', lastname: '', lastname2: '',date:'', phone:''});
          }
          
          const { ci,name, lastname, lastname2,date,phone } = values
        
          const { 
            ci: ciVal, 
            name: nameVal, 
            lastname: lastnameVal,
            lastname2: lastname2Val, 
            date: dateVal, 
            phone: phoneVal 
          } = validations        

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>REGISTRO DE ESTUDIANTE</h1>
          
          <form onSubmit={handleSubmit} noValidate>
          <div className="simple">
              <label htmlFor="CI">CI</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="ci"
                value={ci} 
                onChange={handleChange}
                onBlur={validateOne}
                
              />
             <div>{ciVal}</div>
            </div>
            <div className="firstName">
              <label htmlFor="firstName">Nombre</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="name"
                value={name} 
                onChange={handleChange}
                onBlur={validateOne}
               
              />
             <div>{nameVal}</div>
            </div>
            
            <div className="lastName">
              <label htmlFor="lastName">Apellido Paterno</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="lastname"
                value={lastname} 
                onChange={handleChange}
                onBlur={validateOne}
              />
             <div>{lastnameVal}</div>
            </div>
            <div className="lastName2">
              <label htmlFor="lastName2">Apellido Materno</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="lastname2"
                value={lastname2} 
                onChange={handleChange}
                onBlur={validateOne}
              />
            <div>{lastname2Val}</div>
            </div>
            <div className="date">
              <label htmlFor="date">Fecha de Nacimiento</label>
              <input
                placeholder="dd/mm/yyyy"
                type="date"
                name="date"
                value={date} 
                onChange={handleChange}
                onBlur={validateOne}
              />
              <div>{dateVal}</div>
            </div>
            <div className="simple">
              <label htmlFor="phone">Teléfono</label>
              <input
                placeholder="Escriba aqui"
                type="number"
                name="phone"
                value={phone} 
                onChange={handleChange}
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
}
