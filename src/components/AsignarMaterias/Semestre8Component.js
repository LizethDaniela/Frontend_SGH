import React from 'react'

export const Semestre8Component = ({materias}) => {
    const [mat1, mat2, mat3] = materias;
    return (
        <div className="card-body">
            <form className="form-control">
                <div class="mb-3">
                    <h4>8° Semestre</h4>
                </div>
                <input type="checkbox" id="checkbox1"/>  {mat1}
                <br/> <input type="checkbox" id="checkbox2"/>  {mat2}
                <br/> <input type="checkbox" id="checkbox3"/>  {mat3}
            </form>
        </div>
    );
};
