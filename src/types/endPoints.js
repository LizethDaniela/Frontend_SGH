export const enpoints = {
  //administrador
  register: { url: "http://localhost:8000/api/1.0/user/", method: "POST" },
  login: { url: "http://localhost:8000/api/1.0/user/singin", method: "POST" },
  getusers: { url: "http://localhost:8000/api/1.0/user/", method: "GET" },

  //estudiante
  registerEstudent: { url: "http://localhost:8000/api/1.0/student", method: "POST" },
  getlistStudents: { url: "http://localhost:8000/api/1.0/student", method: "GET" },

  //docente
  registerDocente: { url: "http://localhost:8000/api/1.0/teacher", method: "POST" },
  getlistDocentes: { url: "http://localhost:8000/api/1.0/teacher", method: "GET" },
};
