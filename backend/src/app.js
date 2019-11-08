//dependencias
const express = require("express");
const app = express();
const cors = require("cors");

//configuraciones
app.set('port', process.env.PORT || 4200);


//middlewares
app.use(cors());
app.use(express.json());


//routes
app.use("/api/notes", require("./Routes/notes"));
app.use("/api/users", require("./Routes/users"));


module.exports = app;