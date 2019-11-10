const UserModel = require("./../Models/User");
let UsersCtrl = {};


UsersCtrl.getUsers = async (req,res)=>{
    const users = await UserModel.find();
    res.json(users);
};
UsersCtrl.createUser = (req,res)=>{
    const {username} = req.body;
    const newUser = new UserModel({
        username
    })

    newUser.save();
    res.json({
        message:"Usuario Creado"
    })
};
//UsersCtrl.getUser = (req,res)=>res.send("Usuario Obtenidas");
UsersCtrl.deleteUser =  async (req,res)=>{
    await UserModel.deleteOne({"_id":req.params.id});
    res.json({
        message : "Usuario eliminado"
    });
};
//UsersCtrl.editUser =  (req,res)=>res.send("Usuario Editada");


module.exports = UsersCtrl;