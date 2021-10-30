import React, {useState} from 'react';
import './Login.css';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';
const Login = () => {
    const [user, setUser]=useState('');
    const [password, setPassword]=useState('');
    function handleChange(name, value){
        if(name==='usuario'){
            //variable para almacenar
            setUser(value)
        } else{
            setPassword(value)
        }
    };
    console.log('usuario:', user);
    console.log('password:', password);
    function handleSubmit(){
        let account={user, password}
        if(account){
            console.log('acount:', account);
        }
    }
    return (
        <div className="login-container">
            <Title/>
            <Label text="USUARIO:"/>
            <Input
            atributo={{
                id:'usuario',
                name:'usuario',
                type:'text',
                placeholder:'Ingrese su usario'
            
            }}
            handleChange={handleChange}
            />
            <Label text="CONTRASEÑA:"/>
            <Input 
            atributo={{
                id:'contraseña',
                name:'contraseña',
                type:'password',
                placeholder:'Ingrese su contraseña'
            }}
            handleChange={handleChange}
            />
            <div className="login-button">
                <button onClick={handleSubmit} 
                    >INICIAR SESION
                </button>
            </div>
            
        </div>
    )
};

export default Login;

