const { sequelize } = require("./DB_connection");
const app = require("./server");
const saveApiData = require ("../Controllers/saveApiData");

app.listen(3001, async () => {
    await sequelize.sync({force: true});
    await saveApiData();
    //force true es para que la borre y la carue con cada actualizacion, cuando sea false es cuando ya esta completa
    console.log("Server on port 3001");
});