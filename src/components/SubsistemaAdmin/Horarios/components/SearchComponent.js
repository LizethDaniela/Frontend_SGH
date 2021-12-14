import React from 'react'
import {
    Link
} from "react-router-dom";

import {Button} from 'reactstrap';
import ".././horario.css";



export const SearchComponent = () => {
    return (
        <div>
            <div className="cab">
                <hr/>
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Semestre</option>
                                    <option value="1">1° Semestre</option>
                                    <option value="2">2° Semestre</option>
                                    <option value="3">3° Semestre</option>
                                    <option value="4">4° Semestre</option>
                                    <option value="5">5° Semestre</option>
                                    <option value="6">6° Semestre</option>
                                    <option value="7">7° Semestre</option>
                                    <option value="8">8° Semestre</option>
                                    <option value="9">9° Semestre</option>

                                </select>
                                <hr/>
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Grupo</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">    
                                    <Link to="/modificar" ><Button  className="btn-op"color="primary">BUSCAR</Button></Link>
                                </div> 
                                <hr/>           
                </div>
        </div>
    )
}
