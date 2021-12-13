import React from 'react';
import { MdPersonPin, MdVpnKey } from 'react-icons/md';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { authStudent } from '../../actions/logEstudent';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


export const LoginEst = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const { logStudent } = useSelector((state )=> state);
    const { displayName }=logStudent;
    const {msnerror}= logStudent;

    const [form, handlerChangeForm, handlerResetForm] = useForm({
        username: "Gojan",
        password: "12345",
    });
    const { username, password }=form;
    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(authStudent(username, password));
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
                            <div>{msnerror}</div>
                            
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
        </div>):(<>{ history("/estudent/main")}</>)}
        </>
    );
};
