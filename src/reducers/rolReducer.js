import { types } from "../types/types";

export const rolReducer = (state = {}, action) => {
    switch (action.type) {
        case types.registerRol: {
            return { ...state, register_rol: action.payload };
        }
        case types.listRoles: {
            return { ...state, dataRoles: action.payload };
        }
        case types.deleteRol: {
            return { ...state, delete_rol: action.payload };
        }
        case types.editRol: {
            return { ...state, edit_rol: action.payload };
        }
        case types.addRolAdmin: {
            return { ...state, add_roladmin: action.payload };
        }
        default: {
            return state;
        }
    }
};