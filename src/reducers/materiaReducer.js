import { types } from "../types/types";

export const materiaReducer = (state = {}, action) => {
    switch (action.type) {
        case types.registerMateria: {
            return { ...state, register_materia: action.payload };
        }
        case types.listMaterias: {
            return { ...state, data: action.payload };
        }
        case types.deleteMateria: {
            return { ...state, delete_materia: action.payload };
        }
        case types.editMateria: {
            return { ...state, edit_materia: action.payload };
        }
        default: {
            return state;
        }
    }
};