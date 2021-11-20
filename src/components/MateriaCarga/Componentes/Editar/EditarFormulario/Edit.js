import React, {useState} from 'react'

export const Edit = () => {

    const [editar, setEditar]= useState({
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
        setEditar({
            ...editar,
            [e.target.name] : e.target.value
        })
    }

    const enviar = (e) => {
        e.preventDefault();
        console.log(editar.codigo + ' ' + editar.materia + ' lunes: ' + editar.lunes 
        + ' martes: ' + editar.martes + ' miercoles: ' + editar.miercoles + ' jueves: ' 
        + editar.jueves + ' viernes: ' + editar.viernes + ' sabados: ' + editar.sabado);
    }

    return (
        <div>
            <h1>EDITAR MATERIA</h1>
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
                    <button className="btn btn-primary">ACTUALIZAR</button>
                </div>
            </form>
            
        </div>
    )
}