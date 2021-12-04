import { useEffect } from "react";
import { enpoints } from "../types/endPoints";
import { types } from "../types/types";

export const registerDocente = (registerTeacherData) => {
    return (dispatch) => {
        fetch(enpoints.registerDocente.url, {
            method: enpoints.registerDocente.method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerTeacherData),
        })
        .then((response) => response.json())
        .then(({ teacherResponse }) => {
            console.log( teacherResponse );
            dispatch(registerdocente( teacherResponse ));
        });
    };
};

export const registerdocente = (response) => {
    return {
        type: types.registerDocente,
        payload: response,
    };
};

export const listDocentes = () => {
    return (dispatch) => {
        useEffect(() => {
            fetch(enpoints.getlistDocentes.url)
            .then((response) => response.json())
            .then(({ teacherResponse }) => {
                console.log( teacherResponse );
                dispatch(docenteslist( teacherResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            });
        }, []);
    };
};

export const deleteDocente = ( id ) => {
    return (dispatch) => {
        Promise.all([
            fetch(`http://localhost:8000/api/1.0/teacher/${id}`, {
                method: "DELETE"
            })
            .then((response) => response.json())
            .then(({ teacherResponse }) => {
                console.log( teacherResponse );
                dispatch(deletedocente( teacherResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
            fetch(enpoints.getlistDocentes.url)
            .then((response) => response.json())
            .then(({ teacherResponse }) => {
                console.log( teacherResponse );
                dispatch(docenteslist( teacherResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
        ]);
    };
};

export const editDocente = ( id, editdata ) => {
    return (dispatch) => {
        Promise.all([
            fetch(`http://localhost:8000/api/1.0/teacher/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editdata),
            })
            .then((response) => response.json())
            .then(({ teacherResponse }) => {
                console.log( teacherResponse );
                dispatch(editdocente( teacherResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
            fetch(enpoints.getlistDocentes.url)
            .then((response) => response.json())
            .then(({ teacherResponse }) => {
                console.log( teacherResponse );
                dispatch(docenteslist( teacherResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
        ]);
    };
};

export const docenteslist = (responselist) => {
    return {
        type: types.listDocentes,
        payload: responselist,
    };
};

export const deletedocente = (responsedelete) => {
    return {
        type: types.deleteDocente,
        payload: responsedelete,
    };
};

export const editdocente = (responseedit) => {
    return {
        type: types.editDocente,
        payload: responseedit,
    };
};