export const enpoints = {
  //administrador
  register: { url: "http://localhost:8000/api/1.0/user", method: "POST" },
  login: { url: "http://localhost:8000/api/1.0/user/singin", method: "POST" },
  getusers: { url: "http://localhost:8000/api/1.0/user", method: "GET" },

  //roles
  registerRol: { url: "http://localhost:8000/api/1.0/roles", method: "POST" },
  getlistRoles: { url: "http://localhost:8000/api/1.0/roles", method: "GET" },

  //estudiante
  registerEstudent: { url: "http://localhost:8000/api/1.0/student", method: "POST" },
  getlistStudents: { url: "http://localhost:8000/api/1.0/student", method: "GET" },

  //docente
  registerDocente: { url: "http://localhost:8000/api/1.0/teacher", method: "POST" },
  getlistDocentes: { url: "http://localhost:8000/api/1.0/teacher", method: "GET" },

  //materia
  registerMateria: { url: "http://localhost:8000/api/1.0/materia", method: "POST" },
  getlistMaterias: { url: "http://localhost:8000/api/1.0/materia", method: "GET" },

  //ambiente
  registerAmbiente: { url: "http://localhost:8000/api/1.0/ambiente", method: "POST" },
  getlistAmbientes: { url: "http://localhost:8000/api/1.0/ambiente", method: "GET" },

  //semestre
  registerSemestre: { url: "http://localhost:8000/api/1.0/semestre", method: "POST" },
  getlistSemestres: { url: "http://localhost:8000/api/1.0/semestre", method: "GET" }

};
