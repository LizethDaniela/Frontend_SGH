import React, {useState} from 'react'

export const FormMateria = () => {

    const [datos, setDatos]= useState({
        codigo: '',
        materia: '',
        lunes: '',
        martes: '',
        miercoles: '',
        jueves: '',
        viernes: '',
        sabado: ''
    })

    const handlerChangeForm = (e) => {
        // console.log(e.target.value);
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const enviar = (e) => {
        e.preventDefault();
        console.log(datos.codigo + ' ' + datos.materia + ' lunes: ' + datos.lunes 
        + ' martes: ' + datos.martes + ' miercoles: ' + datos.miercoles + ' jueves: ' 
        + datos.jueves + ' viernes: ' + datos.viernes + ' sabados: ' + datos.sabado);
    }

    return (
        <div>
            <h1>CREAR MATERIA</h1>
            <form className="row" onSubmit={enviar}>
                <div className="col-md-3">
                    <b>CODIGO</b>
                    <input placeholder="Ingrese el codigo" 
                    className="form-control "
                    type="text"
                    name="codigo"
                    onChange={handlerChangeForm}
                    />
                </div>
                <div className="col-md-3">
                    <b>MATERIA</b>
                    <input placeholder="Ingrese la materia" 
                    className="form-control"
                    type="text"
                    name="materia"
                    onChange={handlerChangeForm}
                    />
                </div>
                {/* lunes a sabados */}
                <div className="col-md-3">
                    <b>LUNES</b>
                    <input type="number"
                    className="form-control"
                    name="lunes"
                    onChange={handlerChangeForm}
                    />
                </div>
                <div className="col-md-3">
                    <b>MARTES</b>
                    <input type="number"
                    className="form-control"
                    name="martes"
                    onChange={handlerChangeForm}
                    />
                </div>
                <div className="col-md-3">
                    <b>MIERCOLES</b>
                    <input type="number"
                    className="form-control"
                    name="miercoles"
                    onChange={handlerChangeForm}
                    />
                </div>
                <div className="col-md-3">
                    <b>JUEVES</b>
                    <input type="number"
                    className="form-control"
                    name="jueves"
                    onChange={handlerChangeForm}
                    />
                </div>
                <div className="col-md-3">
                    <b>VIERNES</b>
                    <input type="number"
                    className="form-control"
                    name="viernes"
                    onChange={handlerChangeForm}
                    />
                </div>
                <div className="col-md-3">
                    <b>SABADO</b>
                    <input type="number"
                    className="form-control"
                    name="sabado"
                    onChange={handlerChangeForm}
                    />
                </div>


                <div className="col-md-3">
                    <br></br>
                    <button className="btn btn-primary">Registrar</button>
                </div>
            </form>
            
        </div>
    )
}
