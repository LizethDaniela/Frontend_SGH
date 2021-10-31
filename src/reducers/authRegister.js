import { types } from "../types/types";


export const authRegister = (state = {}, action) => {
    switch(action.type) {
        case types.authRegisterEstudents: {
            const { CI, Name, lastName, lastName2, Date, Phone } = action.payload;
            return {
                userEstudent: { CI, Name, lastName, lastName2, Date, Phone }
            };
        }
        default: {
            return state;
        }
    }
};