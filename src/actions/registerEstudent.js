import { useEffect } from "react";
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
        })
        .catch((error) => {
            console.log("ERROR")
        });
    };
};

export const register = (response) => {
    return {
        type: types.registerEstudent,
        payload: response,
    };
};

export const listStudents = () => {
    return (dispatch) => {
        useEffect(() => {
            fetch(enpoints.getlistStudents.url, {
                method: enpoints.getlistStudents.method,
            })
            .then((response) => response.json())
            .then(({ studentResponse }) => {
                console.log( studentResponse);
                dispatch(list(studentResponse));
            })
            .catch((error) => {
                console.log("ERROR");
            });
        }, []);
    };
};

export const deleteStudent = ( id ) => {
    return (dispatch) => {
        Promise.all([
            fetch(`http://localhost:8000/api/1.0/student/${id}`, {
                method: "DELETE"
            })
            .then((response) => response.json())
            .then(({ studentResponse }) => {
                console.log( studentResponse);
                dispatch(deletestudent( studentResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
            fetch(enpoints.getlistStudents.url)
            .then((response) => response.json())
            .then(({ studentResponse }) => {
                console.log( studentResponse);
                dispatch(list( studentResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
        ]);
    };
};

export const editStudent = ( id, editdata ) => {
    return (dispatch) => {
        console.log(editdata);
        Promise.all([
            fetch(`http://localhost:8000/api/1.0/student/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editdata),
            })
            .then((response) => response.json())
            .then(({ studentResponse }) => {
                console.log( studentResponse);
                dispatch(editstudent( studentResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
            fetch(enpoints.getlistStudents.url)
            .then((response) => response.json())
            .then(({ studentResponse }) => {
                console.log( studentResponse);
                dispatch(list( studentResponse ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
        ]);
    };
};

export const list = (responselist) => {
    return {
        type: types.listStudents,
        payload: responselist,
    };
};

export const deletestudent = (responsedelete) => {
    return {
        type: types.deleteStudent,
        payload: responsedelete,
    };
};

export const editstudent = (responseedit) => {
    return {
        type: types.editStudent,
        payload: responseedit,
    };
};









