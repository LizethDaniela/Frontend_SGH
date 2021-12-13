import { types } from '../types/types';

export const loginEstudent = (state={}, action) => {
    switch(action.type){
        case types.studentLogin:{
            const { displayName}=action.payload
            return{...state, displayName};
        }
        case types.studentLogout:{
            return {};
        }
        case types.studentError:{
            return {...state, msnerror: action.payload};
        }
        default:{
            return state;
        }
    };
};