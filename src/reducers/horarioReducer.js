import { types } from "../types/types";

export const horarioReducer = (state = {}, action) => {
    switch (action.type) {
        case types.registerHorario: {
            return { ...state, register_horario: action.payload };
        }
        default: {
            return state;
        }
    }
};