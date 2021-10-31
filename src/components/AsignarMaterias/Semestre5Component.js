import React from 'react'

export const Semestre5Component = ({materias}) => {
    const [mat1, mat2, mat3, mat4, mat5, mat6] = materias;
    return (
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
                <input type="checkbox" id="checkbox1"/>  {mat1}
                <br/> <input type="checkbox" id="checkbox2"/>  {mat2}
                <br/> <input type="checkbox" id="checkbox3"/>  {mat3}
                <br/> <input type="checkbox" id="checkbox4"/>  {mat4}
                <br/> <input type="checkbox" id="checkbox5"/>  {mat5}
                <br/> <input type="checkbox" id="checkbox6"/>  {mat6}
            </form>
        </div>
    );
};
