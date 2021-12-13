import React from 'react';

export const MateriasItem = ({ subject, sigla, semestre }) => {
    return (
        <>
            { subject } {' --> '}
            {'sigla = '} { sigla } {' / '}
            {'SEMESTRE '} { semestre }
            <br/>
        </>
    );
};
