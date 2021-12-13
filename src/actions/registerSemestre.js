import { useEffect } from "react";
import { enpoints } from "../types/endPoints";
import { types } from "../types/types";

export const registerSemestre = (registerSemestreData) => {
    return (dispatch) => {
        fetch(enpoints.registerSemestre.url, {
            method: enpoints.registerSemestre.method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerSemestreData),
        })
        .then((response) => response.json())
        .then(({ semestreResponse }) => {
            console.log( semestreResponse );
            dispatch(registersemestre( semestreResponse ));
        })
        .catch((error) => {
            console.log("ERROR")
        });
    };
};

export const registersemestre = (response) => {
    return {
        type: types.registerSemestre,
        payload: response,
    };
};

export const listSemestres = () => {
    return (dispatch) => {
        useEffect(() => {
            fetch(enpoints.getlistSemestres.url)
            .then((response) => response.json())
            .then(({ semestreResponse }) => {
                console.log( semestreResponse );
                dispatch(semestreslist( semestreResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            });
        });
    };
};

export const deleteSemestre = ( id ) => {
    return (dispatch) => {
        Promise.all([
            fetch(`http://localhost:8000/api/1.0/semestre/${id}`, {
                method: "DELETE"
            })
            .then((response) => response.json())
            .then(({ semestreResponse }) => {
                console.log( semestreResponse );
                dispatch(deletesemestre( semestreResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
            fetch(enpoints.getlistSemestres.url)
            .then((response) => response.json())
            .then(({ semestreResponse }) => {
                console.log( semestreResponse );
                dispatch(semestreslist( semestreResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
        ]);
    };
};

export const editSemestre = ( id, editdata ) => {
    return (dispatch) => {
        Promise.all([
            fetch(`http://localhost:8000/api/1.0/semestre/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editdata),
            })
            .then((response) => response.json())
            .then(({ semestreResponse }) => {
                console.log( semestreResponse );
                dispatch(editsemestre( semestreResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
            fetch(enpoints.getlistSemestres.url)
            .then((response) => response.json())
            .then(({ semestreResponse }) => {
                console.log( semestreResponse );
                dispatch(semestreslist( semestreResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
        ]);
    };
};

export const semestreslist = (responselist) => {
    return {
        type: types.listSemestres,
        payload: responselist,
    };
};

export const deletesemestre = (responsedelete) => {
    return {
        type: types.deleteSemestre,
        payload: responsedelete,
    };
};

export const editsemestre = (responseedit) => {
    return {
        type: types.editSemestre,
        payload: responseedit,
    };
};