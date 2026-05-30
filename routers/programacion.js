const express = require("express");
// creamos el router para agrupar las rutas de programacion
const routerProgramacion = express.Router();

// traemos el arreglo de programacion desde el archivo de datos
const { programacion } = require("../datos/cursos.js").infoCursos;

// middleware para que la api entienda formato json
routerProgramacion.use(express.json());

// leer todo (get)
// devuelve todos los cursos de programacion
routerProgramacion.get("/", (req, res) => {
  console.log(
    "peticion get recibida: enviando todos los cursos de programacion",
  );
  res.json(programacion);
});

// leer por filtro (get)
// busca cursos por un lenguaje especifico
routerProgramacion.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  console.log(
    `peticion get recibida: buscando cursos del lenguaje "${lenguaje}"`,
  );
  const resultados = programacion.filter(
    (curso) => curso.lenguaje === lenguaje,
  );

  if (resultados.length === 0) {
    console.log(
      `advertencia: no se encontraron cursos para el lenguaje "${lenguaje}"`,
    );
    return res
      .status(404)
      .send(`No se encontraron cursos del lenguaje: ${lenguaje}`);
  }
  res.json(resultados);
});

// crear (post)
// recibe un nuevo curso y lo agrega a la lista de programacion
routerProgramacion.post("/", (req, res) => {
  let cursoNuevo = req.body;
  console.log(
    "peticion post recibida: intentando agregar el siguiente curso de programacion:",
    cursoNuevo,
  );
  programacion.push(cursoNuevo);
  console.log(
    `exito: curso de programacion con id ${cursoNuevo.id} agregado correctamente`,
  );
  res.status(201).json(programacion);
});

// actualizar todo (put)
// reemplaza por completo un curso usando su id
routerProgramacion.put("/:id", (req, res) => {
  const id = req.params.id;
  const cursoActualizado = req.body;
  console.log(
    `peticion put recibida: reemplazando el curso de programacion con id ${id}`,
  );

  const indice = programacion.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    programacion[indice] = cursoActualizado;
    res.json(programacion);
  } else {
    console.log(
      `error put: no se pudo actualizar porque el id ${id} de programacion no existe`,
    );
    res
      .status(404)
      .send(`No se encontró el curso con ID: ${id} para actualizar.`);
  }
});

// actualizar parcial (patch)
// modifica solo algunos campos de un curso por su id
routerProgramacion.patch("/:id", (req, res) => {
  const id = req.params.id;
  const infoNueva = req.body;
  console.log(
    `peticion patch recibida: modificando campos de programacion del id ${id}. datos nuevos:`,
    infoNueva,
  );

  const indice = programacion.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar, infoNueva);
    res.json(programacion);
  } else {
    console.log(
      `error patch: no se encontro el id ${id} de programacion para modificar`,
    );
    res
      .status(404)
      .send(`No se encontró el curso con ID: ${id} para modificar.`);
  }
});

// eliminar (delete)
// borra un curso usando su id
routerProgramacion.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log(
    `peticion delete recibida: intentando borrar el curso de programacion con id ${id}`,
  );
  const indice = programacion.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    programacion.splice(indice, 1);
    console.log(
      `exito: el curso de programacion con id ${id} fue eliminado de la lista`,
    );
    res.json(programacion);
  } else {
    console.log(
      `error delete: el curso de programacion con id ${id} no se pudo borrar porque no existe`,
    );
    res
      .status(404)
      .send(`No se encontró el curso con ID: ${id} para eliminar.`);
  }
});

module.exports = routerProgramacion;
