const express = require("express");
// creamos el router para agrupar las rutas de matematicas
const routerMatematicas = express.Router();

// traemos el arreglo de matematicas desde el archivo de datos
const { matematicas } = require("../datos/cursos.js").infoCursos;

// middleware para que la api entienda el formato json que envie el cliente
routerMatematicas.use(express.json());

// leer todo (get)
// devuelve todos los cursos de matematicas
routerMatematicas.get("/", (req, res) => {
  console.log(
    "peticion get recibida: enviando todos los cursos de matematicas",
  );
  res.json(matematicas);
});

// leer por filtro (get)
// busca cursos por un tema especifico
routerMatematicas.get("/:tema", (req, res) => {
  const tema = req.params.tema;
  console.log(`peticion get recibida: buscando cursos del tema "${tema}"`);
  const resultados = matematicas.filter((curso) => curso.tema === tema);

  if (resultados.length === 0) {
    console.log(`advertencia: no se encontraron cursos para el tema "${tema}"`);
    return res.status(404).send(`No se encontraron cursos del tema: ${tema}`);
  }
  res.json(resultados);
});

// crear (post)
// recibe un nuevo curso y lo agrega a la lista
routerMatematicas.post("/", (req, res) => {
  let cursoNuevo = req.body;
  console.log(
    "peticion post recibida: intentando agregar el siguiente curso:",
    cursoNuevo,
  );
  matematicas.push(cursoNuevo);
  console.log(`exito: curso con id ${cursoNuevo.id} agregado correctamente`);
  res.status(201).json(matematicas);
});

// actualizar todo (put)
// reemplaza por completo un curso usando su id
routerMatematicas.put("/:id", (req, res) => {
  const id = req.params.id;
  const cursoActualizado = req.body;
  console.log(`peticion put recibida: reemplazando el curso con id ${id}`);

  const indice = matematicas.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    matematicas[indice] = cursoActualizado;
    res.json(matematicas);
  } else {
    console.log(
      `error put: no se pudo actualizar porque el id ${id} no existe`,
    );
    res
      .status(404)
      .send(`No se encontró el curso con ID: ${id} para actualizar.`);
  }
});

// actualizar parcial (patch)
// modifica solo algunos campos de un curso por su id
routerMatematicas.patch("/:id", (req, res) => {
  const id = req.params.id;
  const infoNueva = req.body;
  console.log(
    `peticion patch recibida: modificando campos del id ${id}. datos nuevos:`,
    infoNueva,
  );

  const indice = matematicas.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = matematicas[indice];
    Object.assign(cursoAModificar, infoNueva);
    res.json(matematicas);
  } else {
    console.log(`error patch: no se encontro el id ${id} para modificar`);
    res
      .status(404)
      .send(`No se encontró el curso con ID: ${id} para modificar.`);
  }
});

// eliminar (delete)
// borra un curso usando su id
routerMatematicas.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log(
    `peticion delete recibida: intentando borrar el curso con id ${id}`,
  );
  const indice = matematicas.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    matematicas.splice(indice, 1);
    console.log(`exito: el curso con id ${id} fue eliminado de la lista`);
    res.json(matematicas);
  } else {
    console.log(
      `error delete: el curso con id ${id} no se pudo borrar porque no existe`,
    );
    res
      .status(404)
      .send(`No se encontró el curso con ID: ${id} para eliminar.`);
  }
});

module.exports = routerMatematicas;
