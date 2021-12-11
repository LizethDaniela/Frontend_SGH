import React from 'react';

export const RolItem = ({ name, method, url}) => {
    return (
        <>
            { name } {' / '}
            {'method = '} { method } {' ( '}
            {'url = '} { url } {' ) '}
            <br/>
        </>
    );
};
