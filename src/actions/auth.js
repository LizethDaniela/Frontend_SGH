import { types } from "../types/types";
import { enpoints } from "../types/endPoints";
import { useEffect } from "react";

export const authAsync = (email, password) => {
  return (dispatch) => {
    fetch(enpoints.login.url, {
      method: enpoints.login.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.status === 300) {
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          console.log(data);
          localStorage.setItem("token", data.serverResponse);
          console.log(data.serverResponse);
          dispatch(auth(data.serverResponse));
          return;
        }
        dispatch(error("Credenciales incorrectas"));
      });
  };
};

export const authLogoutAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      localStorage.removeItem("token");
      dispatch(logout());
    }, 100);
  };
};

export const auth = (token) => {
  return {
    type: types.authLogin,
    payload: token,
  };
};
export const logout = () => {
  return {
    type: types.authLogout,
    payload: null,
  };
};
export const error = (msn) => {
  return {
    type: types.authError,
    payload: msn,
  };
};

export const registerAdministrador = (registerAdministradorData) => {
  return (dispatch) => {
      fetch(enpoints.register.url, {
          method: enpoints.register.method,
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(registerAdministradorData),
      })
      .then((response) => response.json())
      .then(({ serverResponse }) => {
          console.log( serverResponse );
          dispatch(registeradministrador( serverResponse ));
      })
      .catch((error) => {
          console.log("ERROR");
      });
  };
};

export const registeradministrador = (response) => {
  return {
      type: types.registerAdministrador,
      payload: response,
  };
};

export const listAdministradores = () => {
  return (dispatch) => {
      useEffect(() => {
          fetch(enpoints.getusers.url)
          .then((response) => response.json())
          .then(({ serverResponse }) => {
              console.log( serverResponse );
              dispatch(adminlist( serverResponse ));
          })
          .catch((error) => {
              console.log("ERROR");
          });
      });
  };
};

export const obtenerAdministrador = (id) => {
  return (dispatch) => {
      fetch(`http://localhost:8000/api/1.0/user/${id}`, {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      })
      .then((response) => response.json())
      .then(({ serverResponse }) => {
          console.log( serverResponse );
          dispatch(getadmin( serverResponse ));
      })
      .catch((error) => {
          console.log("ERROR");
      });
  };
};

export const deleteAdministrador = ( id ) => {
  return (dispatch) => {
      Promise.all([
          fetch(`http://localhost:8000/api/1.0/user/${id}`, {
              method: "DELETE"
          })
          .then((response) => response.json())
          .then(({ serverResponse }) => {
              console.log( serverResponse );
              dispatch(deleteadministrador( serverResponse ));
          })
          .catch((error) => {
              console.log("ERROR");
          }),
          fetch(enpoints.getusers.url)
          .then((response) => response.json())
          .then(({ serverResponse }) => {
              console.log( serverResponse );
              dispatch(adminlist( serverResponse ));
          })
          .catch((error) => {
              console.log("ERROR");
          }),
      ]);
  };
};

export const editAdministrador = ( id, editdata ) => {
  return (dispatch) => {
      Promise.all([
          fetch(`http://localhost:8000/api/1.0/user/${id}`, {
              method: "PUT",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(editdata),
          })
          .then((response) => response.json())
          .then(({ serverResponse }) => {
              console.log( serverResponse );
              dispatch(editadministrador( serverResponse ));
          })
          .catch((error) => {
              console.log("ERROR");
          }),
          fetch(enpoints.getusers.url)
          .then((response) => response.json())
          .then(({ serverResponse }) => {
              console.log( serverResponse );
              dispatch(adminlist( serverResponse ));
          })
          .catch((error) => {
              console.log("ERROR");
          }),
      ]);
  };
};

export const adminlist = (responselist) => {
  return {
      type: types.listAdministradores,
      payload: responselist,
  };
};

export const getadmin = (responseadmin) => {
  return {
    type: types.getAdmin,
    payload: responseadmin,
  };
};

export const deleteadministrador = (responsedelete) => {
  return {
      type: types.deleteAdministrador,
      payload: responsedelete,
  };
};

export const editadministrador = (responseedit) => {
  return {
      type: types.editAdministrador,
      payload: responseedit,
  };
};

export const listAdminRoles = () => {
  return (dispatch) => {
      useEffect(() => {
          fetch(enpoints.getadminroles.url)
          .then((response) => response.json())
          .then(({ serverResponse }) => {
              console.log( serverResponse );
              dispatch(adminroleslist( serverResponse ));
          })
          .catch((error) => {
              console.log("ERROR");
          });
      });
  };
};

export const adminroleslist = (responseadminroles) => {
  return {
      type: types.getAdminroles,
      payload: responseadminroles,
  };
};


