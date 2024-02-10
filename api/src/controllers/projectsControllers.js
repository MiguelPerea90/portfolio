const { Project, Technology } = require("../db");

// TRAE TODOS LOS PROYECTOS DE LA DB
const getAllProjects = async () => {
  const dbProjects = await Project.findAll({
    include: [
      {
        model: Technology,
        attributes: ["id", "name","image"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return dbProjects;
};

// BUSCA POR QUERY NAME
const searchProjectsByName = async (name) => {
  // Ejecuto la función que me trae toda la info de la db
  let allProjects = await getAllProjects();

  // Filtro los que inclullan un string de el nombre pasado cómo query
  let projectsByName = allProjects.filter((project) =>
    project.name.toLowerCase().includes(name.toString().toLowerCase())
  );

  // Retorno los resultados y me quedo con los primeros 15
  return projectsByName;
};

// TRAE UN PROYECTO DE LA DB POR ID
const getProjectById = async (id) => {
  const projectById = await Project.findByPk(id, {
    include: [
      {
        model: Technology,
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return projectById;
};

// CREA UN NUEVO PROYECTP
const createProject = async (name, image, technologies, description) => {
  // Crear el proyecto en la base de datos
  const newProject = await Project.create({ name, image, description });

  // Buscar las tecnologías en la base de datos
  const technologiesDb = await Technology.findAll({
    where: { name: technologies },
  });

  // Asociar las tecnologías al proyecto utilizando los IDs correspondientes
  await newProject.addTechnologies(technologiesDb.map((tech) => tech.id));

  return newProject;
};

module.exports = {
  getAllProjects,
  searchProjectsByName,
  getProjectById,
  createProject,
};
