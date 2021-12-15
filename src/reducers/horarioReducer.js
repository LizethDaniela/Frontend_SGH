import { types } from "../types/types";

export const horarioReducer = (state = {}, action) => {
    switch (action.type) {
        case types.registerHorario: {
            return { ...state, register_horario: action.payload };
        }
        case types.listHorarios: {
            return { ...state, data: action.payload };
        }
        case types.deleteHorario: {
            return { ...state, delete_horario: action.payload };
        }
        case types.editHorario: {
            return { ...state, edit_horario: action.payload };
        }
        default: {
            return state;
        }
    }
};