import { types } from "../types/types";

export const studentReducer = (state = {}, action) => {
    switch (action.type) {
        case types.registerEstudent: {
            return { ...state, register_student: action.payload };
        }
        case types.listStudents: {
            return { ...state, data: action.payload };
        }
        case types.deleteStudent: {
            /* const id = action.payload;
            const ID = String(id);
            const { data } = state;
            console.log(data);
            return data.map.filter((item) => item._id !== ID ); */
            return { ...state, delete_student: action.payload };
        }
        case types.editStudent: {
            return { ...state, edit_student: action.payload };
        }
        default: {
            return state;
        }
    } 
};
