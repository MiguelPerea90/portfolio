const { Technology } = require("../db");
const dataArray = require("../data/tecnologies.");

const allTechnologiesData = async () =>  {
    // Inserta las tecnologías en la base de datos
    const dbTechnologies = await Technology.bulkCreate(dataArray.tecnologies);
    return dbTechnologies;
}

module.exports = allTechnologiesData;