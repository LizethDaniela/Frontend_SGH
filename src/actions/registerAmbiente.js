import { useEffect } from "react";
import { enpoints } from "../types/endPoints";
import { types } from "../types/types";

export const registerAmbiente = (registerAmbienteData) => {
    return (dispatch) => {
        fetch(enpoints.registerAmbiente.url, {
            method: enpoints.registerAmbiente.method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerAmbienteData),
        })
        .then((response) => response.json())
        .then(({ ambienteResponse }) => {
            console.log( ambienteResponse );
            dispatch(registerambiente( ambienteResponse ));
        })
        .catch((error) => {
            console.log("ERROR")
        });
    };
};

export const registerambiente = (response) => {
    return {
        type: types.registerAmbiente,
        payload: response,
    };
};

export const listAmbientes = () => {
    return (dispatch) => {
        useEffect(() => {
            fetch(enpoints.getlistAmbientes.url)
            .then((response) => response.json())
            .then(({ ambienteResponse }) => {
                console.log( ambienteResponse );
                dispatch(ambienteslist( ambienteResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            });
        }, []);
    };
};

export const deleteAmbiente = ( id ) => {
    return (dispatch) => {
        Promise.all([
            fetch(`http://localhost:8000/api/1.0/ambiente/${id}`, {
                method: "DELETE"
            })
            .then((response) => response.json())
            .then(({ ambienteResponse }) => {
                console.log( ambienteResponse );
                dispatch(deleteambiente( ambienteResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
            fetch(enpoints.getlistAmbientes.url)
            .then((response) => response.json())
            .then(({ ambienteResponse }) => {
                console.log( ambienteResponse );
                dispatch(ambienteslist( ambienteResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
        ]);
    };
};

export const editAmbiente = ( id, editdata ) => {
    return (dispatch) => {
        Promise.all([
            fetch(`http://localhost:8000/api/1.0/ambiente/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editdata),
            })
            .then((response) => response.json())
            .then(({ ambienteResponse }) => {
                console.log( ambienteResponse );
                dispatch(editambiente( ambienteResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
            fetch(enpoints.getlistAmbientes.url)
            .then((response) => response.json())
            .then(({ ambienteResponse }) => {
                console.log( ambienteResponse );
                dispatch(ambienteslist( ambienteResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
        ]);
    };
};

export const ambienteslist = (responselist) => {
    return {
        type: types.listAmbientes,
        payload: responselist,
    };
};

export const deleteambiente = (responsedelete) => {
    return {
        type: types.deleteAmbiente,
        payload: responsedelete,
    };
};

export const editambiente = (responseedit) => {
    return {
        type: types.editAmbiente,
        payload: responseedit,
    };
};