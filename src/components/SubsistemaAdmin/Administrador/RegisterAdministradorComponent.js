import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerAdministrador } from '../../../actions/auth';
import { useForm } from '../../../hooks/useForm';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';

export const RegisterAdministradorComponent = () => {
    const dispatch = useDispatch();
    const [form, handlerChangeForm] = useForm({
        ci: "",
        nombre: "",
        ap_paterno: "",
        ap_materno: "",
        cargo: "",
        email: "",
        username: "",
        password: "",
        fecha_nac: "",
        telefono: ""
    });

    const { ci, nombre, ap_paterno, ap_materno, cargo, email, username, password, fecha_nac, telefono } = form;
    const { auth } = useSelector((state) => state);
    const { register_admin } = auth;
    console.log(register_admin);
    
    const handlerSubmit = (e) => {
        e.preventDefault()
        dispatch(registerAdministrador({ ci, nombre, ap_paterno, ap_materno, cargo, email, username, password, fecha_nac, telefono }));
    };

    return (
        <>
            <Head/>
            <DashBoardComponent/>
            <div className="container">
                <Link to="/administrador/administradorlist"><button tipo="button" className="link"><FaUsers/> Lista de Administradores </button></Link>

                <div className="form-wrapper">
                    <h2>REGISTRO DE ADMINISTRADOR <MdAccountCircle /></h2>
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
                                placeholder="Escriba aqui"
                                type="text"
                                name="cargo"
                                value={cargo} 
                                onChange={handlerChangeForm}
                            />
                        </div>
                        <div className="simple">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                placeholder="e-mail...."
                                type="email"
                                name="email"
                                value={email} 
                                onChange={handlerChangeForm}
                                autoComplete="off"
                            />
                        </div>
                        <div className="simple">
                            <label htmlFor="username">Username:</label>
                            <input
                                placeholder="Escriba aqui"
                                type="text"
                                name="username"
                                value={username} 
                                onChange={handlerChangeForm}
                            />
                        </div>
                        <div className="simple">
                            <label htmlFor="password">Password:</label>
                            <input
                                placeholder="Escriba aqui"
                                type="password"
                                name="password"
                                value={password} 
                                onChange={handlerChangeForm}
                            />
                        </div>
                        <div className="date">
                            <label htmlFor="fecha_nac">Fecha de Nacimiento:</label>
                            <input
                                placeholder="yyyy/mm/dd"
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
