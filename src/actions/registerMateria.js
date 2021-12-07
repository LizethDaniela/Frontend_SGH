import { useEffect } from "react";
import { enpoints } from "../types/endPoints";
import { types } from "../types/types";

export const registerMateria = (registerMateriaData) => {
    return (dispatch) => {
        fetch(enpoints.registerMateria.url, {
            method: enpoints.registerMateria.method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerMateriaData),
        })
        .then((response) => response.json())
        .then(({ materiaResponse }) => {
            console.log( materiaResponse );
            dispatch(registermateria( materiaResponse ));
        })
        .catch((error) => {
            console.log("ERROR")
        });
    };
};

export const registermateria = (response) => {
    return {
        type: types.registerMateria,
        payload: response,
    };
};

export const listMaterias = () => {
    return (dispatch) => {
        useEffect(() => {
            fetch(enpoints.getlistMaterias.url)
            .then((response) => response.json())
            .then(({ materiaResponse }) => {
                console.log( materiaResponse  );
                dispatch(materiaslist( materiaResponse  ));
            })
            .catch((error) => {
                console.log("ERROR");
            });
        }, []);
    };
};

export const deleteMateria = ( id ) => {
    return (dispatch) => {
        Promise.all([
            fetch(`http://localhost:8000/api/1.0/materia/${id}`, {
                method: "DELETE"
            })
            .then((response) => response.json())
            .then(({ materiaResponse }) => {
                console.log( materiaResponse  );
                dispatch(deletemateria( materiaResponse  ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
            fetch(enpoints.getlistMaterias.url)
            .then((response) => response.json())
            .then(({ materiaResponse  }) => {
                console.log( materiaResponse  );
                dispatch(materiaslist( materiaResponse  ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
        ]);
    };
};

export const editMateria = ( id, editdata ) => {
    return (dispatch) => {
        Promise.all([
            fetch(`http://localhost:8000/api/1.0/materia/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editdata),
            })
            .then((response) => response.json())
            .then(({ materiaResponse  }) => {
                console.log( materiaResponse  );
                dispatch(editmateria( materiaResponse  ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
            fetch(enpoints.getlistMaterias.url)
            .then((response) => response.json())
            .then(({ materiaResponse  }) => {
                console.log( materiaResponse  );
                dispatch(materiaslist( materiaResponse  ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
        ]);
    };
};

export const materiaslist = (responselist) => {
    return {
        type: types.listMaterias,
        payload: responselist,
    };
};

export const deletemateria = (responsedelete) => {
    return {
        type: types.deleteMateria,
        payload: responsedelete,
    };
};

export const editmateria = (responseedit) => {
    return {
        type: types.editMateria,
        payload: responseedit,
    };
};




