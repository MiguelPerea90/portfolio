const server = require('./src/server');
const { conn } = require("./src/db");


(async () => {
    try {
        // sincroniza los modelos de Sequelize con la base de datos 
        await conn.sync({ force: false });
        console.log('Sincronización de modelos completada');
        // iniciar el servidor Express
        server.listen(3001, () => {
            console.log('Servidor escuchando en el puerto 3001');
        });
    } catch (error) {
        console.error('Error al sincronizar modelos:', error);
    }
})();