export const types = {
  //administrador
  authLogin: "auth/login",
  authLogout: "auth/logout",
  authError: "auth/error",

  registerAdministrador: "register/admin",
  listAdministradores: "list/administradores",
  getAdmin: "obtener/admin",
  editAdministrador: "edit/administrador",
  deleteAdministrador: "delete/administrador",
  getAdminroles: "get/adminroles",

  //roles
  registerRol: "register/rol",
  listRoles: "list/roles",
  editRol: "edit/rol",
  deleteRol: "delete/rol",
  addRolAdmin: "add/roladmin",

  //estudiante
  registerEstudent: "register/student",
  listStudents: "list/students",
  editStudent: "edit/student",
  deleteStudent: "delete/student",

  //docente
  registerDocente: "register/docente",
  listDocentes: "list/docentes",
  getTeacher: "obtener/teacher",
  editDocente: "edit/docente",
  deleteDocente: "delete/docente",
  getDocentematerias: "get/docentematerias",

  //materia
  registerMateria: "register/materia",
  listMaterias: "list/materias",
  editMateria: "edit/materia",
  deleteMateria: "delete/materia",
  addMateriaTeacher: "add/materiateacher",

  //ambiente
  registerAmbiente: "register/ambiente",
  listAmbientes: "list/ambientes",
  editAmbiente: "edit/ambiente",
  deleteAmbiente: "delete/ambiente",
  getAmbiente: "obtener/ambiente",

  //semestre
  registerSemestre: "register/semestre",
  listSemestres: "list/semestres",
  editSemestre: "edit/semestre",
  deleteSemestre: "delete/semestre",
  getSemestre: "obtener/semestre",

  //horario
  registerHorario: "register/horario",

  //Subsistemas Docente
  docentLogin:"docent/login",
  docentLogout:"docent/logout",
  docentError:"docentError",

  //Subsistemas Estudiante
  studentLogin:"estudent/login",
  studentLogout:"estudent/logout",
  studentError:"estudentError",

};
