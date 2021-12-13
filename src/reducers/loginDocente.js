import { types } from '../types/types';

export const loginDocente = (state={}, action) => {
    switch(action.type){
        case types.docentLogin:{
            const { displayName}=action.payload;
            return{...state, displayName};
        };
        case types.docentLogout:{
            return {};
        }
        case types.docentError:{
            return {...state, msnerror: action.payload};
        }
        default:{
            return state;
        }
    }
};
