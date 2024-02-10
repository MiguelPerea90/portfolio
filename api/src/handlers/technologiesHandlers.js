const allTechnologiesData = require("../controllers/technologiesControllers")
const { Technology } = require("../db");

const getAllTechnologys = async (req, res) => {
    try {
        const allTechnologiesDb = await Technology.findAll();
        if (allTechnologiesDb.length) {
            return res.status(200).json(allTechnologiesDb)
        } else {
            const dataTechnologies = await allTechnologiesData();
            res.status(200).json(dataTechnologies);
        }
    } catch (error) {
        res.status(400).json( { error : error.message } );
    }
}

module.exports = getAllTechnologys;