import React from 'react'

export const AsignarMateriasComponent = () => {
    return (
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <input type="button" value="Mostrar" className="mostrar" onClick="contarSeleccionados()"/>
            <button type="submit" className="btn-a">Asignar</button>
        </div>
    );
};
