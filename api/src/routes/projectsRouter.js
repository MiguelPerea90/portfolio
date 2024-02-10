const { Router } = require("express");
const {
    getProjectsHandler,
    getProjectByIdHandler,
    createProjectHandler
} = require("../handlers/projectsHandlers");

const projectsRouter = Router();

projectsRouter.get("/", getProjectsHandler);

projectsRouter.get("/:id", getProjectByIdHandler);

projectsRouter.post("/", createProjectHandler);

module.exports = projectsRouter;