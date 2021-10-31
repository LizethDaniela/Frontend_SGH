import { types } from '../types/types';

export const registerestudents = (ci, name, lastname, lastname2, date, phone) => {
    const RegisterEstudents = {
        CI: ci,
        Name: name,
        lastName: lastname,
        lastName2: lastname2,
        Date: date,
        Phone: phone
    }
    localStorage.setItem("RegisterEstudents", JSON.stringify(RegisterEstudents));
    return {
        type: types.authRegisterEstudents,
        payload: RegisterEstudents
    }
};