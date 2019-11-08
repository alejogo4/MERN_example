require("dotenv").config();//Iniciar a correr las variables de entorno .env

const app = require("./app");
require("./database");



let runServer = async ()=>{
    await app.listen(app.get('port'));

    console.log("Servidor corriendo en el puerto "+app.get('port'));
}

runServer();