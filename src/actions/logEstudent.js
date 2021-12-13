import { types } from "../types/types";

export const authStudent= (username, password)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            if(username === "Gojan" && password ==="12345"){
                const userdata={
                    id: new Date().getTime(),
                    displayName:username,
                }
                localStorage.setItem("user", JSON.stringify(userdata));
                dispatch( authSt(userdata));
            } else {
                dispatch(error("Datos Incorrectos"));
            }
        },100);
    };
};

export const LogoutStudent= ()=>{
    return (dispatch)=>{
        setTimeout(()=>{
            localStorage.removeItem("user");
            dispatch(LogoutSt());
        },100);
    };
};

export const authSt = (user)=>{
    return{
        type: types.studentLogin,
        payload: user,
    };
};

export const LogoutSt = ()=>{
    return{
        type: types.studentLogout,
        payload: null,
    };
};

export const error=(msn)=>{
    return {
        type: types.studentError,
        payload:msn,
    };
};
