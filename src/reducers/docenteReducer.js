import { types } from "../types/types";

export const docenteReducer = (state = {}, action) => {
    switch (action.type) {
        case types.registerDocente: {
            return { ...state, register_docente: action.payload };
        }
        case types.listDocentes: {
            return { ...state, data: action.payload };
        }
        case types.getTeacher: {
            return { ...state, obtener_docente: action.payload };
        }
        case types.deleteDocente: {
            return { ...state, delete_docente: action.payload };
        }
        case types.editDocente: {
            return { ...state, edit_docente: action.payload };
        }
        default: {
            return state;
        }
    } 
};