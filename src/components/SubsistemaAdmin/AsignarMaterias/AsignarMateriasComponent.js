import React from 'react'
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import "./stylesAM.css";

export const AsignarMateriasComponent = () => {
    return (
        <>
        <Head/>
        <DashBoardComponent/>
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="materia">
                    <div className="card-header">
                        <form className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <input type="search" placeholder="Nombre Docente"/>
                            <button type="submit" className="btn btn-light">Buscar</button>
                        </form>
                    </div>
                    <div>
                        <h3>Materias</h3>
                        <hr/>
                    </div>
                    <div className="asignar">
                        <div className="card-body">
                            <form className="form-control">
                                <div class="mb-3">
                                    <h4>1° Semestre</h4>
                                </div>
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Grupo</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                <input type="checkbox" id="checkbox1"/>INGLES TECNICO
                                <br/> <input type="checkbox" id="checkbox2"/>ALGEBRA
                                <br/> <input type="checkbox" id="checkbox3"/>CALCULO I
                                <br/> <input type="checkbox" id="checkbox4"/>ESTADISTICA I
                                <br/> <input type="checkbox" id="checkbox5"/>TECNICAS DE PROGRAMACION I
                                <br/> <input type="checkbox" id="checkbox6"/>COMPUTACION BASICA
                            </form>
                        </div>
                    
                        <div className="card-body">
                            <form className="form-control">
                                <div class="mb-3">
                                    <h4>2° Semestre</h4>
                                </div>
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Grupo</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                <input type="checkbox" id="checkbox1"/>FISICA I
                                <br/> <input type="checkbox" id="checkbox2"/>ALGEBRA LINEAL Y TEORIA MATRICIAL
                                <br/> <input type="checkbox" id="checkbox3"/>CALCULO II
                                <br/> <input type="checkbox" id="checkbox4"/>ESTADISTICA II
                                <br/> <input type="checkbox" id="checkbox5"/>TECICAS DE PROGRAMACION II
                                <br/> <input type="checkbox" id="checkbox6"/>SISTEMAS CONTABLES
                            </form>
                        </div>
                    
                        <div className="card-body">
                            <form className="form-control">
                                <div class="mb-3">
                                    <h4>3° Semestre</h4>
                                </div>
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Grupo</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                <input type="checkbox" id="checkbox1"/>FISICA II
                                <br/> <input type="checkbox" id="checkbox2"/>CALCULO III
                                <br/> <input type="checkbox" id="checkbox3"/>ESTRUCTURA DE DATOS
                                <br/> <input type="checkbox" id="checkbox4"/>DISEÑO Y PROGRAMACION GRAFICA
                                <br/> <input type="checkbox" id="checkbox5"/>MODELOS ADMINISTRATIVOS
                                <br/> <input type="checkbox" id="checkbox6"/>ANALISIS DISCRETO
                            </form>
                        </div>
                   
                        <div className="card-body">
                            <form className="form-control">
                                <div class="mb-3">
                                    <h4>4° Semestre</h4>
                                </div>
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Grupo</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                <input type="checkbox" id="checkbox1"/>BASE DE DATOS
                                <br/> <input type="checkbox" id="checkbox2"/>ANALISIS DE SISTEMAS I
                                <br/> <input type="checkbox" id="checkbox3"/>SISTEMAS DIGITALES
                                <br/> <input type="checkbox" id="checkbox4"/>ELECTRONICA
                                <br/> <input type="checkbox" id="checkbox5"/>INVESTIGACION OPERATIVA I
                                <br/> <input type="checkbox" id="checkbox6"/>TECNOLOGIAS EMERGENTES
                            </form>
                        </div>

                        <div className="card-body">
                            <form className="form-control">
                                <div class="mb-3">
                                    <h4>5° Semestre</h4>
                                </div>
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Grupo</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                <input type="checkbox" id="checkbox1"/>ANALISIS DE SISTEMAS II
                                <br/> <input type="checkbox" id="checkbox2"/>TALLER DE BASE DATOS
                                <br/> <input type="checkbox" id="checkbox3"/>ARQUITECTURA DE COMPUTADORAS
                                <br/> <input type="checkbox" id="checkbox4"/>REDES I
                                <br/> <input type="checkbox" id="checkbox5"/>SISTEMAS OPERATIVOS
                                <br/> <input type="checkbox" id="checkbox6"/>INVESTIGACION OPERATIVA II
                            </form>
                        </div>

                        <div className="card-body">
                            <form className="form-control">
                                <div class="mb-3">
                                    <h4>6° Semestre</h4>
                                </div>
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Grupo</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                <input type="checkbox" id="checkbox1"/>CONFIGURACION DE SERVIDORES
                                <br/> <input type="checkbox" id="checkbox2"/>TALLER DE REDES
                                <br/> <input type="checkbox" id="checkbox3"/>INGENIERIA DE SISTEMAS
                                <br/> <input type="checkbox" id="checkbox4"/>MODELOS ECONOMICOS
                                <br/> <input type="checkbox" id="checkbox5"/>SIMULACION DE SISTEMAS
                                <br/> <input type="checkbox" id="checkbox6"/>INGENIERIA DE SOFTWARE
                            </form>
                        </div>

                        <div className="card-body">
                            <form className="form-control">
                                <div class="mb-3">
                                    <h4>7° Semestre</h4>
                                </div>
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Grupo</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                <input type="checkbox" id="checkbox1"/>DINAMICA DE SISTEMAS
                                <br/> <input type="checkbox" id="checkbox2"/>SEMINARIO DE SISTEMAS
                                <br/> <input type="checkbox" id="checkbox3"/>AUDITORIA DE SISTEMAS
                                <br/> <input type="checkbox" id="checkbox4"/>PREPARACION Y EVALUACION DE PROYECTOS
                                <br/> <input type="checkbox" id="checkbox5"/>SEGURIDAD DE SISTEMAS
                                <br/> <input type="checkbox" id="checkbox6"/>METODOLOGIA DE LA INVESTIGACION
                            </form>
                        </div>

                        <div className="card-body">
                            <form className="form-control">
                                <div class="mb-3">
                                    <h4>8° Semestre</h4>
                                </div>
                                <input type="checkbox" id="checkbox1"/>GESTION DE CALIDAD
                                <br/> <input type="checkbox" id="checkbox2"/>PRACTICA LABORAL
                                <br/> <input type="checkbox" id="checkbox3"/>TALLER DE GRADO I
                            </form>
                        </div>

                        <div className="card-body">
                            <form className="form-control">
                                <div class="mb-3">
                                    <h4>9° Semestre</h4>
                                </div>
                                <input type="checkbox" id="checkbox1"/>INFORMATICA FORENSE
                                <br/> <input type="checkbox" id="checkbox2"/>TALLER DE GRADO II
                            </form>
                        </div>

                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <input type="button" value="Mostrar" className="mostrar" onClick="contarSeleccionados()"/>
                        <button type="submit" className="btn-a">Asignar</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
