require("dotenv").config();//Iniciar a correr las variables de entorno .env

const app = require("./app");
require("./database");



let runServer = async ()=>{
    await app.listen(4000);
    console.log("Servidor corriendo en el puerto 4000");
}

runServer();