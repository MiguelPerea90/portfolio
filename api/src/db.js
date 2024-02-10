const { Sequelize, DataTypes } = require('sequelize');
const ProjectModel = require("./models/Project");
const TechnologyModel = require("./models/Technology")
require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

// Crea la conexión con la base de datos
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, 
    { logging: false, native: false }
);

// Funciones que definen los modelos
ProjectModel(sequelize);
TechnologyModel(sequelize);

// Extrae los modelos de sequelize.models
const { Project, Technology } = sequelize.models;

// Relaciona los modelos
Project.belongsToMany( Technology, { through: 'ProjectTechnologies', timestamps: false } );
Technology.belongsToMany( Project, { through: 'ProjectTechnologies', timestamps: false } );

module.exports = { 
    conn: sequelize,  // Exporta la conexión con la base de datos
    ...sequelize.models // Exporta los modelos 
};