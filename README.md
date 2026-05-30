# crud de cursos - node.js y express

este proyecto es una api rest construida utilizando **node.js** y el framework **express**. la aplicacion gestiona un catalogo de cursos educativos divididos en dos categorias principales: **programacion** y **matematicas**, permitiendo realizar todas las operaciones basicas de un c.r.u.d (crear, leer, actualizar y eliminar) a traves de rutas organizadas por modulos independientes.

## 🚀 como poner en marcha el proyecto

para ejecutar este proyecto de forma local en tu computadora, sigue estos pasos:

1. descarga o clona este repositorio en tu maquina local.
2. abre una terminal dentro de la carpeta raiz del proyecto (`crud-cursos-express`).
3. instala todas las dependencias necesarias ejecutando el siguiente comando:
   ```bash
   npm install
inicia el servidor de desarrollo local con el comando:

Bash
node app.js
el servidor se encendera de manera automatica y estara escuchando en el puerto: http://localhost:3000

📂 estructura del proyecto
el codigo esta organizado de forma modular para mantener una arquitectura limpia y escalable:

datos/: contiene el archivo cursos.js que simula la base de datos local mediante objetos y arreglos.

routers/: contiene los controladores de rutas separados por interes (matematicas.js y programacion.js).

app.js: es el punto de entrada principal que inicializa el servidor express y conecta los routers correspondientes.

.gitignore: archivo encargado de evitar la subida de la carpeta node_modules al repositorio remoto.

🛠️ endpoints de la api (rutas de consulta)
las pruebas de los siguientes endpoints fueron validadas de forma exitosa utilizando la herramienta insomnia.

modulo de matematicas 🧮
GET /api/cursos/matematicas -> obtiene la lista completa de todos los cursos de matematicas disponibles.

GET /api/cursos/matematicas/:tema -> filtra los cursos por un tema especifico (ejemplo: /api/cursos/matematicas/calculo).

POST /api/cursos/matematicas -> agrega un nuevo curso al catalogo enviando un objeto json en el cuerpo de la peticion.

PUT /api/cursos/matematicas/:id -> reemplaza y actualiza por completo un curso existente buscando coincidencia por su id.

PATCH /api/cursos/matematicas/:id -> modifica de forma parcial unicamente los campos deseados de un curso segun su id.

DELETE /api/cursos/matematicas/:id -> elimina de forma definitiva un curso del listado utilizando su id.

modulo de programacion 💻
GET /api/cursos/programacion -> devuelve la lista de todos los cursos de programacion.

GET /api/cursos/programacion/:lenguaje -> filtra los cursos por el lenguaje de programacion indicado en la url.

POST /api/cursos/programacion -> añade un nuevo curso de programacion al arreglo correspondiente.

PUT /api/cursos/programacion/:id -> actualiza totalmente un curso existente de programacion por su id.

PATCH /api/cursos/programacion/:id -> modifica de manera parcial campos individuales de un curso por su id.

DELETE /api/cursos/programacion/:id -> remueve permanentemente un curso de programacion del catalogo segun su id.

🖥️ tecnologias utilizadas
node.js - entorno de ejecucion para javascript en el servidor.

express - framework minimalista para la gestion de rutas y peticiones http.

javascript (es6+) - lenguaje de programacion principal del proyecto.

insomnia - software de pruebas para validar el comportamiento de los endpoints rest.
