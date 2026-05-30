// simulamos una base de datos guardando la informacion en un objeto
let infoCursos = {
  // arreglo con los cursos de programacion
  programacion: [
    {
      id: 1,
      titulo: "Aprende Python",
      lenguaje: "python",
      vistas: 15000,
      nivel: "basico",
    },
    {
      id: 2,
      titulo: "Python Intermedio",
      lenguaje: "python",
      vistas: 12000,
      nivel: "intermedio",
    },
    {
      id: 3,
      titulo: "Aprende JavaScript",
      lenguaje: "javascript",
      vistas: 90222,
      nivel: "basico",
    },
  ],
  // cursos de matematicas
  matematicas: [
    {
      id: 1,
      titulo: "Aprende Calculo",
      tema: "calculo",
      vistas: 12433,
      nivel: "basico",
    },
    {
      id: 2,
      titulo: "Aprende Algebra",
      tema: "algebra",
      vistas: 23412,
      nivel: "intermedio",
    },
  ],
};

// exportamos el objeto para usarlo en otros archivos
module.exports.infoCursos = infoCursos;
