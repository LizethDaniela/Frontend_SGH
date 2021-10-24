import React from 'react'
import "./styles.css";

export const AsignarMateriasComponent = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="materia">
                    <div className="card-header">
                        <form className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <input type="text" placeholder="Nombre Docente"/>
                            <button type="submit" className="btn btn-light">Buscar</button>
                        </form>
                    </div>
                    <div>
                        <h3>MATERIAS</h3>
                    </div>
                    <div className="asignar">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                   
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="submit" className="btn-a">Asignar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
