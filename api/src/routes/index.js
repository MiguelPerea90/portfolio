// Enrutador
const { Router } = require("express");
const projectsRouter = require("./projectsRouter");
const technologysRouter = require("./technologiesRouter");

const mainRouter = Router();

mainRouter.use("/proyectos", projectsRouter);
mainRouter.use("/tecnologias", technologysRouter);

module.exports = mainRouter;