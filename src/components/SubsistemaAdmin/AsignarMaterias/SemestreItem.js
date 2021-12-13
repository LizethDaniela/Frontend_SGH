import React from 'react';

export const SemestreItem = ({ semestre, grupo }) => {
    return (
        <div className="custom-control custom-radio">
            <input type="radio" className="custom-control-input" id="customControlValidation" name="radio-stacked" required />
            <label className="custom-control-label" htmlFor="customControlValidation">{semestre} {' '} {'-->'} {' '} {'GRUPO: '} {grupo}</label>
        </div>
    );
};
