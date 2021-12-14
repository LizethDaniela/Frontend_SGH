import React, { useEffect } from 'react';
import { MdPersonPin, MdVpnKey } from 'react-icons/md';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { authDocent, authDt } from '../../actions/logDocent';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';


export const LoginDocente = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const userData = localStorage.getItem("user");
        if(userData != null){
            dispatch(authDt(JSON.parse(userData)));
        }
    },[]);
    const { logDocent } = useSelector((state )=> state);
    const { displayName }=logDocent;
    const {msnerror}= logDocent;

    const [form, handlerChangeForm] = useForm({
        username: "Jose",
        password: "1234",
    });
    const { username, password }=form;
    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(authDocent(username, password));
    };
    return (
        <>
        {displayName == null?(<div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Login Docente</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handlerSubmit}>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                    <MdPersonPin />
                                    </span>
                                </div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="username" 
                                    autoComplete="off"
                                    name="username" 
                                    value={username} 
                                    onChange={handlerChangeForm}
                                />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <MdVpnKey />
                                    </span>
                                </div>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="password" 
                                    autoComplete="off"
                                    name="password" 
                                    value={password} 
                                    onChange={handlerChangeForm}
                                />
                            </div>
                            {msnerror && <div>{msnerror}</div>}
                            
                            <div className="form-group">
                                <input
                                    type="submit"
                                    value="Login"
                                    className="btn float-right login_btn"
                                />
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>):(<Navigate to="/docent/main"/>)}
        </>
    );
};
