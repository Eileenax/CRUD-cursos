const express = require("express");
const app = express();

// importamos los routers usando un solo punto para la ruta correcta
const routerMatematicas = require("./routers/matematicas.js");
const routerProgramacion = require("./routers/programacion.js");

// vinculamos cada router a su ruta base correspondiente
app.use("/api/cursos/matematicas", routerMatematicas);
app.use("/api/cursos/programacion", routerProgramacion);

// ruta principal de bienvenida al servidor
app.get("/", (req, res) => {
  console.log("alguien ha visitado la raiz de la api (/)");
  res.send(
    "Bienvenido a la API de Cursos. Usa /api/cursos/matematicas o /api/cursos/programacion",
  );
});

// definimos el puerto del sistema o el puerto 3000 por defecto
const PUERTO = process.env.PORT || 3000;

// ponemos al servidor a escuchar peticiones
app.listen(PUERTO, () => {
  console.log(
    `El servidor está encendido y escuchando en el puerto ${PUERTO}...`,
  );
});
