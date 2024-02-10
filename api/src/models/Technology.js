const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("Technology", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, // Configura la autoincrementación
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, 
        { timestamps: false }
    );
}
