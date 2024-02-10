const { 
    getAllProjects,
    searchProjectsByName,
    getProjectById,
    createProject
} = require("../controllers/projectsControllers");

const getProjectsHandler = async (req, res) => {
    const {name} = req.query;
    try {
        if (name) {
            const projectByName = await searchProjectsByName(name);
            projectByName.length ?
            res.status(200).json(projectByName) :
            res.status(400).send("Sorry, project not found");
        } else {
            const allProjects = await getAllProjects();
            res.status(200).json(allProjects); 
        }
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}

const getProjectByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const projectById = await getProjectById(id);
        res.status(200).json(projectById);
    } catch (error) {
        res.status(400).json( { error: error.mesage } );
    }
}

const createProjectHandler = async (req, res) => {
    try {
        const { name, image, tecnologies, description } = req.body;
        const newProject = await createProject(name, image, tecnologies, description );
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getProjectsHandler,
    getProjectByIdHandler,
    createProjectHandler
}