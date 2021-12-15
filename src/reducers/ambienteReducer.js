import { types } from "../types/types";

export const ambienteReducer = (state = {}, action) => {
    switch (action.type) {
        case types.registerAmbiente: {
            return { ...state, register_ambiente: action.payload };
        }
        case types.listAmbientes: {
            return { ...state, data: action.payload };
        }
        case types.getAmbiente: {
            return { ...state, obtener_ambiente: action.payload };
        }
        case types.deleteAmbiente: {
            return { ...state, delete_ambiente: action.payload };
        }
        case types.editAmbiente: {
            return { ...state, edit_ambiente: action.payload };
        }
        default: {
            return state;
        }
    }
};