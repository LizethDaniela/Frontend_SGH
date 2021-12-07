import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.authLogin: {
      const token = action.payload;
      return {
        token,
      };
    }
    case types.authLogout: {
      return {};
    }
    case types.authError: {
      return { ...state, msnerror: action.payload };
    }
    case types.registerAdministrador: {
      return { ...state, register_admin: action.payload };
    }
    case types.listAdministradores: {
      return { ...state, data: action.payload };
    }
    case types.deleteAdministrador: {
      return { ...state, delete_admin: action.payload };
    }
    case types.editAdministrador: {
      return { ...state, edit_admin: action.payload };
    }
    default: {
      return state;
    }
  }
};
