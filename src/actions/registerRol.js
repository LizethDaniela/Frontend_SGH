import { useEffect } from "react";
import { enpoints } from "../types/endPoints";
import { types } from "../types/types";

export const registerRol = (registerRolData) => {
    return (dispatch) => {
        fetch(enpoints.registerRol.url, {
            method: enpoints.registerRol.method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerRolData),
        })
        .then((response) => response.json())
        .then(({ serverResponse }) => {
            console.log( serverResponse );
            dispatch(registerrol( serverResponse ));
        })
        .catch((error) => {
            console.log("ERROR")
        });
    };
};

export const registerrol = (response) => {
    return {
        type: types.registerRol,
        payload: response,
    };
};

export const listRoles = () => {
    return (dispatch) => {
        useEffect(() => {
            fetch(enpoints.getlistRoles.url)
            .then((response) => response.json())
            .then(({ serverResponse }) => {
                console.log( serverResponse  );
                dispatch(roleslist( serverResponse  ));
            })
            .catch((error) => {
                console.log("ERROR");
            });
        });
    };
};

export const deleteRol = ( id ) => {
    return (dispatch) => {
        Promise.all([
            fetch(`http://localhost:8000/api/1.0/roles/${id}`, {
                method: "DELETE"
            })
            .then((response) => response.json())
            .then(({ serverResponse }) => {
                console.log( serverResponse  );
                dispatch(deleterol( serverResponse  ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
            fetch(enpoints.getlistRoles.url)
            .then((response) => response.json())
            .then(({ serverResponse  }) => {
                console.log( serverResponse  );
                dispatch(roleslist( serverResponse  ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
        ]);
    };
};

export const editRol = ( id, editdata ) => {
    return (dispatch) => {
        Promise.all([
            fetch(`http://localhost:8000/api/1.0/roles/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editdata),
            })
            .then((response) => response.json())
            .then(({ serverResponse  }) => {
                console.log( serverResponse  );
                dispatch(editrol( serverResponse  ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
            fetch(enpoints.getlistRoles.url)
            .then((response) => response.json())
            .then(({ serverResponse  }) => {
                console.log( serverResponse  );
                dispatch(roleslist( serverResponse  ));
            })
            .catch((error) => {
                console.log("ERROR");
            }),
        ]);
    };
};

export const roleslist = (responselist) => {
    return {
        type: types.listRoles,
        payload: responselist,
    };
};

export const deleterol = (responsedelete) => {
    return {
        type: types.deleteRol,
        payload: responsedelete,
    };
};

export const editrol = (responseedit) => {
    return {
        type: types.editRol,
        payload: responseedit,
    };
};

export const addRol = (idAdmin, idRol) => {
    return (dispatch) => {
        fetch(`http://localhost:8000/api/1.0/addrol/${idAdmin}/${idRol}`, {
            method: "POST"
        })
        .then((response) => response.json())
        .then(({ serverResponse }) => {
            console.log( serverResponse );
            dispatch(addrol( serverResponse ));
        })
        .catch((error) => {
            console.log("ERROR");
        });
    };
};

export const addrol = (responseaddrol) => {
    return {
        type: types.addRolAdmin,
        payload: responseaddrol,
    };
};