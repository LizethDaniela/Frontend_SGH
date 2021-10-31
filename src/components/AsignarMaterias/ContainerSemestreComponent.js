import React from 'react'
import { Semestre1Component } from './Semestre1Component';
import { Semestre2Component } from './Semestre2Component';
import { Semestre3Component } from './Semestre3Component';
import { Semestre4Component } from './Semestre4Component';
import { Semestre5Component } from './Semestre5Component';
import { Semestre6Component } from './Semestre6Component';
import { Semestre7Component } from './Semestre7Component';
import { Semestre8Component } from './Semestre8Component';
import { Semestre9Component } from './Semestre9Component';

export const ContainerSemestreComponent = () => {
    const materias1 = ["INGLES TECNICO", "ALGEBRA", "CALCULO I", "ESTADISTICA I", "TECNICAS DE PROGRAMACION I", "COMPUTACION BASICA"];
    const materias2 = ["FISICA I", "ALGEBRA LINEAL Y TEORIA MATRICIAL", "CALCULO II", "ESTADISTICA II", "TECNICAS DE PROGRAMACION II", "SISTEMAS CONTABLES"];
    const materias3 = ["FISICA II", "CALCULO III", "ESTRUCTURA DE DATOS", "DISEÑO Y PROGRAMACION GRAFICA", "MODELOS ADMINISTRATIVOS", "ANALISIS DISCRETO"];
    const materias4 = ["BASE DE DATOS", "ANALISIS DE SISTEMAS I", "SISTEMAS DIGITALES", "ELECTRONICA", "INVESTIGACION OPERATIVA I", "TECNOLOGIAS EMERGENTES"];
    const materias5 = ["ANALISIS DE SISTEMAS II", "TALLER DE BASE DATOS", "ARQUITECTURA DE COMPUTADORAS", "REDES I", "SISTEMAS OPERATIVOS", "INVESTIGACION OPERATIVA II"];
    const materias6 = ["CONFIGURACION DE SERVIDORES", "TALLER DE REDES", "INGENIERIA DE SISTEMAS", "MODELOS ECONOMICOS", "SIMULACION DE SISTEMAS", "INGENIERIA DE SOFTWARE"];
    const materias7 = ["DINAMICA DE SISTEMAS", "SEMINARIO DE SISTEMAS", "AUDITORIA DE SISTEMAS", "PREPARACION Y EVALUACION DE PROYECTOS", "SEGURIDAD DE SISTEMAS", "METODOLOGIA DE LA INVESTIGACION"];
    const materias8 = ["GESTION DE CALIDAD", "PRACTICA LABORAL", "TALLER DE GRADO I"];
    const materias9 = ["INFORMATICA FORENSE", "TALLER DE GRADO II"];
    return (
        <>
            <div>
                <h3>MATERIAS</h3>
                <hr/>
            </div>
            <div className="asignar">
                <Semestre1Component materias={materias1}/>
                <Semestre2Component materias={materias2}/>
                <Semestre3Component materias={materias3}/>
                <Semestre4Component materias={materias4}/>
                <Semestre5Component materias={materias5}/>
                <Semestre6Component materias={materias6}/>
                <Semestre7Component materias={materias7}/>
                <Semestre8Component materias={materias8}/>
                <Semestre9Component materias={materias9}/>
            </div>
        </>
    );
};
