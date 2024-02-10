const { Router } = require("express");

const getAllTechnologys = require("../handlers/technologiesHandlers")

const technologysRouter = Router();

technologysRouter.get("/", getAllTechnologys)

module.exports = technologysRouter;