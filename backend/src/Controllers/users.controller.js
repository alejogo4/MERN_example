let UsersCtrl = {};

UsersCtrl.getUsers = (req,res)=>res.send("Usuarios Obtenidas");
UsersCtrl.createUser = (req,res)=>res.send("Usuario Insertada");
UsersCtrl.getUser = (req,res)=>res.send("Usuario Obtenidas");
UsersCtrl.deleteUser = (req,res)=>res.send("Usuario Eliminada");
UsersCtrl.editUser =  (req,res)=>res.send("Usuario Editada");


module.exports = UsersCtrl;