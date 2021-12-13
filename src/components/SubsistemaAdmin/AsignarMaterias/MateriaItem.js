import React from 'react';

export const MateriaItem = ({ subject, semestre }) => {
    return (
        <div className="card-body">
            <form className="form-control">
                <div className="mb-3">
                    <h4>Semestre { semestre }</h4>
                </div>
                <input type="checkbox" id="checkbox"/>{ subject }
            </form>
        </div>
    );
};
