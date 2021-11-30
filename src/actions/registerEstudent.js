import { enpoints } from "../types/endPoints";
import { types } from "../types/types";

export const registerEstudent = (studentRegisterData) => {
    return (dispatch) => {
        fetch(enpoints.registerEstudent.url, {
        method: enpoints.registerEstudent.method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(studentRegisterData),
        })
        .then((response) => response.json())
        .then(({ studentResponse }) => {
            console.log( studentResponse);
            dispatch(register(studentResponse));
        });
    };
};

export const register = (response) => {
    return {
        type: types.registerEstudent,
        payload: response,
    };
};