import { types } from "../types/types";

export const authDocent= (username, password)=>{
    return (dispatch)=>{
        /*id,
        displayName*/
        setTimeout(()=>{
            if(username === "Jose" && password ==="1234"){
                const userdata={
                    id: new Date().getTime(),
                    displayName:username,
                }
                localStorage.setItem("user", JSON.stringify(userdata));
                dispatch( authDt(userdata));
            } else {
                dispatch(error("Datos Incorrectos"));
            }
        },100);
    };
};

export const LogoutDocent= ()=>{
    return (dispatch)=>{
        setTimeout(()=>{
            localStorage.removeItem("user");
            dispatch(LogoutDt());
        },100);
    };
};

export const authDt = (user)=>{
    return{
        type: types.docentLogin,
        payload: user,
    };
};

export const LogoutDt = ()=>{
    return{
        type: types.docentLogout,
        payload: null,
    };
};

export const error=(msn)=>{
    return {
        type: types.docentError,
        payload:msn,
    };
};