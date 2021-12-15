import { useEffect } from "react";
import { enpoints } from "../types/endPoints";
import { types } from "../types/types";

export const registerHorario = (registerHorarioData) => {
    return (dispatch) => {
        fetch(enpoints.registerHorario.url, {
            method: enpoints.registerHorario.method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerHorarioData),
        })
        .then((response) => response.json())
        .then(({ horarioResponse }) => {
            console.log( horarioResponse );
            dispatch(registerhorario( horarioResponse ));
        })
        .catch((error) => {
            console.log("ERROR")
        });
    };
};

export const registerhorario = (response) => {
    return {
        type: types.registerHorario,
        payload: response,
    };
};

export const listHorarios = () => {
    return (dispatch) => {
        useEffect(() => {
            fetch(enpoints.getlistHorarios.url)
            .then((response) => response.json())
            .then(({ horarioResponse }) => {
                console.log( horarioResponse );
                dispatch(horarioslist( horarioResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            });
        });
    };
};

export const deleteHorario = ( id ) => {
    return (dispatch) => {
        Promise.all([
            fetch(`http://localhost:8000/api/1.0/horario/${id}`, {
                method: "DELETE"
            })
            .then((response) => response.json())
            .then(({ horarioResponse }) => {
                console.log( horarioResponse );
                dispatch(deletehorario( horarioResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
            fetch(enpoints.getlistHorarios.url)
            .then((response) => response.json())
            .then(({ horarioResponse }) => {
                console.log( horarioResponse );
                dispatch(horarioslist( horarioResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
        ]);
    };
};

export const editHorario = ( id, editdata ) => {
    return (dispatch) => {
        Promise.all([
            fetch(`http://localhost:8000/api/1.0/horario/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editdata),
            })
            .then((response) => response.json())
            .then(({ horarioResponse }) => {
                console.log( horarioResponse );
                dispatch(edithorario( horarioResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
            fetch(enpoints.getlistHorarios.url)
            .then((response) => response.json())
            .then(({ horarioResponse }) => {
                console.log( horarioResponse );
                dispatch(horarioslist( horarioResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
        ]);
    };
};

export const horarioslist = (responselist) => {
    return {
        type: types.listHorarios,
        payload: responselist,
    };
};

export const deletehorario = (responsedelete) => {
    return {
        type: types.deleteHorario,
        payload: responsedelete,
    };
};

export const edithorario = (responseedit) => {
    return {
        type: types.editHorario,
        payload: responseedit,
    };
};