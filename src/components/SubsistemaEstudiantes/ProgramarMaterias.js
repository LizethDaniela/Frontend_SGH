import React, { useState } from 'react'
import Head from '../head/Head';
import { DashEstudiante } from './DashEstudiante';
import './stylos.css';

export const ProgramarMaterias= () => {

    const data=[
        {id:1, semestre:'1', sigla:'MAT100', materia:'Algebra', grupo:'1'},
        {id:2, semestre:'1', sigla:'MAT101', materia:'CalculoI', grupo:'1'},
        {id:3, semestre:'1', sigla:'MAT102', materia:'EstadisticaI', grupo:'1'},
        {id:4, semestre:'1', sigla:'SIS110', materia:'Programacion ', grupo:'1'},
        {id:5, semestre:'1', sigla:'LIN140', materia:'InglesI', grupo:'1'},
        {id:6, semestre:'1', sigla:'SIS141', materia:'Computacion', grupo:'1'},
    ]
    const [prog, setProg] = useState([{
        semestre:"",
        sigla:"",
        materia:"",
        grupo:"",
    }])
    const handlerSubmit=(e)=>{
        e.preventDefault();
        
    }
    return (
        <>
            
            <Head/>
            <DashEstudiante/>
            <div className="containerC">
                <div className="containerPM">
                    {data.map((item)=>(<>
                    {item.semestre==='1' && item.sigla==='MAT100'?(<>
                    <ul className="col-sm-3">
                        <li className="list"> Semestre:{item.semestre} </li>
                        <li className="list"> Sigla:{item.sigla} </li>
                        <li className="list"> Materia:{item.materia} </li>
                            Grupo:<select className="sel">
                                <option>---</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                    </ul>    
                    </>):(<></>)}
                    </>))}
                <button type="submit" className="butonP" onClick={handlerSubmit} >PROGRAMAR</button>
                </div>

                <div className="containerPM">
                    {data.map((item)=>(<>
                    {item.semestre==='1' && item.sigla==='MAT101'?(<>
                    <ul className="col-sm-3">
                        <li className="list"> Semestre:{item.semestre} </li>
                        <li className="list"> Sigla:{item.sigla} </li>
                        <li className="list"> Materia:{item.materia} </li>
                            Grupo:<select className="sel">
                                <option>---</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                    </ul>    
                    </>):(<></>)}
                    </>))}
                <button type="submit" className="butonP" onClick={handlerSubmit} >PROGRAMAR</button>
                </div>

                <div className="containerPM">
                    {data.map((item)=>(<>
                    {item.semestre==='1' && item.sigla==='MAT102'?(<>
                    <ul className="col-sm-3">
                        <li className="list"> Semestre:{item.semestre} </li>
                        <li className="list"> Sigla:{item.sigla} </li>
                        <li className="list"> Materia:{item.materia} </li>
                            Grupo:<select className="sel">
                                <option>---</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                    </ul>    
                    </>):(<></>)}
                    </>))}
                <button type="submit" className="butonP" onClick={handlerSubmit} >PROGRAMAR</button>
                </div>
            </div>
            <div className="containerC">
            <div className="containerPM">
                    {data.map((item)=>(<>
                    {item.semestre==='1' && item.sigla==='SIS141'?(<>
                    <ul className="col-sm-3">
                        <li className="list"> Semestre:{item.semestre} </li>
                        <li className="list"> Sigla:{item.sigla} </li>
                        <li className="list"> Materia:{item.materia} </li>
                            Grupo:<select className="sel">
                                <option>---</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                    </ul>    
                    </>):(<></>)}
                    </>))}
                <button type="submit" className="butonP" onClick={handlerSubmit} >PROGRAMAR</button>
                </div>

                <div className="containerPM">
                    {data.map((item)=>(<>
                    {item.semestre==='1' && item.sigla==='LIN140'?(<>
                    <ul className="col-sm-3">
                        <li className="list"> Semestre:{item.semestre} </li>
                        <li className="list"> Sigla:{item.sigla} </li>
                        <li className="list"> Materia:{item.materia} </li>
                            Grupo:<select className="sel">
                                <option>---</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                    </ul>    
                    </>):(<></>)}
                    </>))}
                <button type="submit" className="butonP" onClick={handlerSubmit} >PROGRAMAR</button>
                </div>

                <div className="containerPM">
                    {data.map((item)=>(<>
                    {item.semestre==='1' && item.sigla==='SIS110'?(<>
                    <ul className="col-sm-3">
                        <li className="list"> Semestre:{item.semestre} </li>
                        <li className="list"> Sigla:{item.sigla} </li>
                        <li className="list"> Materia:{item.materia} </li>
                            Grupo:<select className="sel">
                                <option>---</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                    </ul>    
                    </>):(<></>)}
                    </>))}
                <button type="submit" className="butonP" onClick={handlerSubmit} >PROGRAMAR</button>
                </div>
            </div>
            
        </>
    );
};