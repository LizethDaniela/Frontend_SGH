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