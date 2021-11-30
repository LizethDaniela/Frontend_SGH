import { types } from "../types/types";

export const studentReducer = (state = {}, action) => {
    switch (action.type) {
        case types.registerEstudent: {
            return { ...state, register_estudent: action.payload };
        }
        default: {
            return state;
        }
    } 
};
