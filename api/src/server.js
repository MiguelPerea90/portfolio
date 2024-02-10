// Crea el servidor
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const server = express();
const mainRouter = require("./routes");

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use(express.static('public')); // Configuración para servir archivos estáticos desde la carpeta 'public'
server.use(mainRouter);

module.exports = server;



