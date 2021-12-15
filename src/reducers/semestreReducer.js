import { types } from "../types/types";

export const semestreReducer = (state = {}, action) => {
    switch (action.type) {
        case types.registerSemestre: {
            return { ...state, register_semestre: action.payload };
        }
        case types.listSemestres: {
            return { ...state, data: action.payload };
        }
        case types.getSemestre: {
            return { ...state, obtener_semestre: action.payload };
        }
        case types.deleteSemestre: {
            return { ...state, delete_semestre: action.payload };
        }
        case types.editSemestre: {
            return { ...state, edit_semestre: action.payload };
        }
        default: {
            return state;
        }
    }
};